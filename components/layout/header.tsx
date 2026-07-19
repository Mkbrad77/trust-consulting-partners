"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Container } from "./container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/logo-full-color.png"
            alt={siteConfig.legalName}
            width={258}
            height={36}
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {siteConfig.mainNav.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[420px] gap-1 p-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 hover:bg-muted/10"
                          >
                            <div className="text-sm font-medium text-foreground">
                              {child.label}
                            </div>
                            <p className="mt-0.5 text-xs text-muted">
                              {child.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(navigationMenuTriggerStyle(), "text-sm font-medium")}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-4 lg:flex">
          {/* ✅ Correction ici : Ajout de la balise ouvrante <a> */}
          <a
            href={siteConfig.contact.phones[0].href}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.contact.phones[0].number}</span>
          </a>
          
          <Link
            href="/contact"
            className={cn(buttonVariants(), "bg-primary hover:bg-primary-dark")}
          >
            Prendre rendez-vous
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            className="lg:hidden block p-2 rounded-md hover:bg-muted/10 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/logo-icon.png"
                  alt={siteConfig.legalName}
                  width={36}
                  height={36}
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {siteConfig.mainNav.map((item) => (
                <div key={item.label} className="py-2">
                  <SheetClose
                    render={<Link href={item.href} />}
                    className="text-base font-medium text-foreground block"
                  >
                    {item.label}
                  </SheetClose>
                  {item.children && (
                    <div className="mt-2 flex flex-col gap-2 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <SheetClose
                          key={child.href}
                          render={<Link href={child.href} />}
                          className="text-sm text-muted hover:text-primary block"
                        >
                          {child.label}
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <SheetClose
                render={<Link href="/contact" />}
                className={cn(buttonVariants(), "mt-4 bg-primary hover:bg-primary-dark text-center block")}
              >
                Prendre rendez-vous
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}