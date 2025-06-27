"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, Menu } from "lucide-react";
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
    { href: "/what-we-do", label: t.nav.whatWeDo },
    { href: "/what-were-capable-of", label: t.nav.whatWereCapableOf },
    { href: "/who-we-are", label: t.nav.whoWeAre },
    { href: "/our-solution", label: t.nav.ourSolution },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contactUs },
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
              src="/img/official.png"
              alt="LeXurey Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-brand-navy dark:text-brand-teal">
              LeXurey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
