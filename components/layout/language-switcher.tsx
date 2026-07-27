"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={
            loc === locale
              ? "rounded-md bg-primary/10 px-2 py-1 text-primary"
              : "rounded-md px-2 py-1 text-muted hover:text-primary"
          }
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}