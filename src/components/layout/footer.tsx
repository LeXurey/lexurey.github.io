"use client";

import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 LeXurey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
