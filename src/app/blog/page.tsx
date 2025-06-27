"use client";

import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function BlogPage() {
  const { t } = useLanguage();
  const contentReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
              {t.blog.title}
            </h1>
            <p className="text-xl text-muted-foreground">{t.blog.subtitle}</p>
          </div>

          {/* Stay Tuned Card */}
          <div
            ref={contentReveal.ref}
            className={`flex justify-center scroll-reveal ${
              contentReveal.isVisible ? "visible" : ""
            }`}
          >
            <div className="max-w-md w-full">
              <article className="p-8 rounded-lg border bg-card text-card-foreground hover:shadow-lg transition-shadow text-center">
                <div className="text-6xl mb-6">📝</div>
                <h2 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                  {t.blog.stayTuned.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.blog.stayTuned.description}
                </p>
                <div className="p-4 rounded-lg bg-brand-teal/10 dark:bg-brand-navy/20">
                  <p className="text-sm text-brand-navy dark:text-brand-teal font-medium">
                    {t.blog.stayTuned.comingSoon}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
