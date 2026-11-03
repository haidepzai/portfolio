"use client";

import { useTransition } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const languageNames = { de: "Deutsch", en: "English", ja: "日本語" };

export default function LanguageSwitcher() {
    const locale = useLocale();
    const translations = useTranslations("Navigation");
    const pathname = usePathname();
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    type="button"
                    title={translations("language")}
                    aria-label={`${translations("language")}: ${languageNames[locale]}`}
                    disabled={pending}
                    className="flex shrink-0 items-center justify-center gap-2 w-[96px] h-10 border border-white/30 rounded-md text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50"
                >
                    <Globe size={17} aria-hidden="true" />
                    <span>{locale.toUpperCase()}</span>
                    <ChevronDown size={14} aria-hidden="true" />
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    align="end"
                    side="top"
                    sideOffset={8}
                    collisionPadding={12}
                    aria-label={translations("language")}
                    className="z-[110] min-w-[176px] max-w-[calc(100vw-24px)] p-1 border border-primary/15 bg-white shadow-custom rounded-md"
                >
                    <DropdownMenu.RadioGroup
                        value={locale}
                        onValueChange={(language) => {
                            if (language === locale) return;
                            startTransition(() => {
                                router.replace(
                                    `${pathname}${window.location.search}${window.location.hash}`,
                                    { locale: language, scroll: false },
                                );
                            });
                        }}
                    >
                        {routing.locales.map((language) => (
                            <DropdownMenu.RadioItem
                                key={language}
                                value={language}
                                lang={language}
                                className="flex items-center gap-2 min-h-10 px-3 rounded text-sm text-primary outline-none cursor-pointer data-[highlighted]:bg-accent/15"
                            >
                                <span className="flex-1">{languageNames[language]}</span>
                                <span className="text-xs text-secondary">{language.toUpperCase()}</span>
                                <span className="w-4 h-4">
                                    <DropdownMenu.ItemIndicator>
                                        <Check size={16} aria-hidden="true" />
                                    </DropdownMenu.ItemIndicator>
                                </span>
                            </DropdownMenu.RadioItem>
                        ))}
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
