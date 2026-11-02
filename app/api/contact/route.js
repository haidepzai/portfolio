const recaptchaVerifyUrl = "https://www.google.com/recaptcha/api/siteverify";
const formspreeUrl = "https://formspree.io/f/xdkapnzv";

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

    const formspreeResponse = await fetch(formspreeUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: body.firstname.trim(),
        lastname: body.lastname.trim(),
        email: body.email.trim(),
        phone: typeof body.phone === "string" ? body.phone.trim() : "",
        message: body.message.trim(),
      }),
      cache: "no-store",
    });

    if (!formspreeResponse.ok) {
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