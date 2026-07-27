import { defineRouting } from "next-intl/routing";
export type Locale = (typeof routing.locales)[number];
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
});