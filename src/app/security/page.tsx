"use client";

import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Lock } from "lucide-react";

export default function SecurityPage() {
  const { t } = useLanguage();

  const contentReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Stay Tuned Section */}
        <section
          ref={contentReveal.ref}
          className={`py-16 px-4 bg-background scroll-reveal ${
            contentReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-brand-navy dark:text-brand-teal">
                {t.security.stayTuned.title}
              </h2>

              <div className="p-8 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-brand-teal/10 rounded-full">
                    <Lock className="w-8 h-8 text-brand-teal" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.security.stayTuned.description}
                </p>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <p className="font-medium text-brand-navy dark:text-brand-teal mb-4">
                    {t.security.stayTuned.comingSoon}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
