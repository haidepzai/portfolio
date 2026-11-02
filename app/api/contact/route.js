const recaptchaVerifyUrl = "https://www.google.com/recaptcha/api/siteverify";
const resendUrl = "https://api.resend.com/emails";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const recaptchaToken = body.recaptchaToken;
  if (typeof recaptchaToken !== "string" || !recaptchaToken) {
    return Response.json(
      { error: "Please complete the reCAPTCHA check." },
      { status: 400 }
    );
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return Response.json(
      { error: "CAPTCHA verification is not configured." },
      { status: 503 }
    );
  }

  const requiredFields = ["firstname", "lastname", "email", "message"];
  if (
    requiredFields.some(
      (field) => typeof body[field] !== "string" || !body[field].trim()
    )
  ) {
    return Response.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const email = body.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return Response.json(
      { error: "The message service is not configured." },
      { status: 503 }
    );
  }

  try {
    const verificationResponse = await fetch(recaptchaVerifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      }),
      cache: "no-store",
    });
    const verification = await verificationResponse.json();

    if (!verificationResponse.ok || !verification.success) {
      return Response.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 403 }
      );
    }

    const resendResponse = await fetch(resendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Son Hai Vu <info@sonhaivu.com>",
        to: ["info@sonhaivu.com"],
        reply_to: email,
        subject: "New portfolio contact message",
        text: [
          `Name: ${body.firstname.trim()} ${body.lastname.trim()}`,
          `Email: ${email}`,
          `Phone: ${typeof body.phone === "string" ? body.phone.trim() : ""}`,
          "",
          body.message.trim(),
        ].join("\n"),
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      return Response.json(
        { error: "Your message could not be sent. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "The message service is unavailable. Please try again later." },
      { status: 502 }
    );
  }
}