"use client";

import { createContext, useContext, useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Settings2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const ConsentContext = createContext(null);

export function useCookieConsent() {
    const consent = useContext(ConsentContext);
    if (!consent) throw new Error("CookieConsentProvider is missing.");
    return consent;
}

export function CookieSettingsButton({ className }) {
    const { openSettings } = useCookieConsent();
    const translations = useTranslations("Cookies");

    return (
        <button type="button" onClick={openSettings} className={className}>
            <Settings2 size={16} aria-hidden="true" className="inline-block mr-1 align-text-bottom" />
            {translations("settings")}
        </button>
    );
}

export default function CookieConsentProvider({ children }) {
    const translations = useTranslations("Cookies");
    const [recaptchaConsent, setRecaptchaConsent] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = getCookieConsentValue("userCookieConsent");
        setRecaptchaConsent(stored === "true");
        setVisible(stored !== "true" && stored !== "false");
    }, []);

    return (
        <ConsentContext.Provider value={{ recaptchaConsent, openSettings: () => setVisible(true) }}>
            {children}
            <CookieConsent
                visible={visible ? "show" : "hidden"}
                location={null}
                disableStyles
                containerClasses="cookie-consent-banner"
                contentClasses="cookie-consent-content"
                buttonWrapperClasses="cookie-consent-actions"
                buttonClasses="cookie-consent-accept"
                declineButtonClasses="cookie-consent-decline"
                customContainerAttributes={{ role: "region", "aria-label": translations("settings") }}
                enableDeclineButton
                setDeclineCookie
                sameSite="lax"
                extraCookieOptions={{ path: "/" }}
                buttonText={translations("accept")}
                declineButtonText={translations("decline")}
                ariaAcceptLabel={translations("acceptLabel")}
                ariaDeclineLabel={translations("declineLabel")}
                cookieName="userCookieConsent"
                expires={365}
                onAccept={() => {
                    setRecaptchaConsent(true);
                    setVisible(false);
                }}
                onDecline={() => {
                    setRecaptchaConsent(false);
                    setVisible(false);
                    if (recaptchaConsent) window.location.reload();
                }}
            >
                {translations("notice")} {translations("withdrawal")} {" "}
                <Link href="/privacy-policy">{translations("privacy")}</Link>
            </CookieConsent>
        </ConsentContext.Provider>
    );
}