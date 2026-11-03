import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en", "ja"],
  defaultLocale: "en",
  localePrefix: "always",
});
