"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Globe,
  Menu,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/use-language";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/what-were-capable-of", label: t.nav.whatWereCapableOf },
    { href: "/who-we-are", label: t.nav.whoWeAre },
    { href: "/our-solution", label: t.nav.ourSolution },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contactUs },
  ];

  const whatWeDoItems = [
    { href: "/what-we-do", label: t.nav.carbonAuditing },
    { href: "/security", label: t.nav.security },
    {
      href: "https://compusoftaus.com.au",
      label: t.nav.compusoftAustralia,
      external: true,
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={
                theme === "dark"
                  ? "/img/company dark.PNG"
                  : "/img/Company logo.PNG"
              }
              alt="LeXurey Logo"
              width={56}
              height={56}
              className="h-14 w-14"
            />
            <span className="text-xl font-bold text-brand-navy dark:text-brand-teal">
              LeXurey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* What We Do Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-base font-medium transition-all duration-200 hover:scale-105 transform flex items-center space-x-1 group`}
                >
                  <span
                    className={`
                      ${
                        pathname === "/what-we-do" || pathname === "/security"
                          ? "bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy bg-clip-text text-transparent"
                          : "text-foreground/80 group-hover:bg-gradient-to-r group-hover:from-brand-navy group-hover:to-brand-teal dark:group-hover:from-brand-teal dark:group-hover:to-brand-navy group-hover:bg-clip-text group-hover:text-transparent"
                      }
                    `}
                  >
                    {t.nav.whatWeDo}
                  </span>
                  <ChevronDown
                    className={`
                      w-4 h-4 transition-colors
                      ${
                        pathname === "/what-we-do" || pathname === "/security"
                          ? "text-brand-teal"
                          : "text-foreground/80 group-hover:text-brand-teal"
                      }
                    `}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {whatWeDoItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className="transition-all"
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link href={item.href} className="flex items-center">
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-all duration-200 hover:scale-105 transform ${
                    isActive
                      ? "bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy bg-clip-text text-transparent"
                      : "text-foreground/80 hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-teal dark:hover:from-brand-teal dark:hover:to-brand-navy hover:bg-clip-text hover:text-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-teal dark:hover:from-brand-teal dark:hover:to-brand-navy hover:text-white transition-all duration-200"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">{t.common.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className="hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-teal dark:hover:from-brand-teal dark:hover:to-brand-navy hover:text-white transition-all"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("zh")}
                  className="hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-teal dark:hover:from-brand-teal dark:hover:to-brand-navy hover:text-white transition-all"
                >
                  中文
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-brand-navy dark:text-brand-teal" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
              <Moon className="h-4 w-4 text-brand-navy dark:text-brand-teal" />
            </div>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-teal dark:hover:from-brand-teal dark:hover:to-brand-navy hover:text-white transition-all duration-200"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {/* What We Do Section */}
                <div className="px-2 py-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    {t.nav.whatWeDo}
                  </p>
                  {whatWeDoItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <DropdownMenuItem
                        key={item.href}
                        asChild
                        className={`ml-2 transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy text-white font-bold"
                            : ""
                        }`}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full"
                          >
                            <span>{item.label}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="flex items-center w-full"
                          >
                            <span>{item.label}</span>
                          </Link>
                        )}
                      </DropdownMenuItem>
                    );
                  })}
                </div>

                {/* Separator */}
                <div className="my-1 h-px bg-border" />

                {/* Other Navigation Items */}
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <DropdownMenuItem
                      key={item.href}
                      asChild
                      className={`transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy text-white font-bold"
                          : "hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-teal dark:hover:from-brand-teal dark:hover:to-brand-navy hover:text-white"
                      }`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
