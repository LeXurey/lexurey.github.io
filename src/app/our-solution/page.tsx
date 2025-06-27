"use client";

import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function OurSolutionPage() {
  const { t } = useLanguage();

  const featuresReveal = useScrollReveal();
  const actionReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Main Content Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-brand-navy dark:text-brand-teal">
              {t.ourSolution.title}
            </h1>

            <div className="p-8 rounded-lg border bg-card text-card-foreground mb-12 hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200">
              <div
                className="prose dark:prose-invert max-w-none text-lg leading-relaxed prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                dangerouslySetInnerHTML={{
                  __html: t.ourSolution.content,
                }}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={featuresReveal.ref}
          className={`py-16 px-4 bg-brand-teal/15 dark:bg-brand-navy/20 scroll-reveal ${
            featuresReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.features.privacy.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.features.privacy.description}
                </p>
              </div>

              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.features.integration.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.features.integration.description}
                </p>
              </div>

              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.features.insights.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.features.insights.description}
                </p>
              </div>

              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.features.compliance.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.features.compliance.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action in Progress Section */}
        <section
          ref={actionReveal.ref}
          className={`py-16 px-4 bg-background scroll-reveal ${
            actionReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-navy dark:text-brand-teal">
              {t.actionInProgress.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-4xl mb-4">🚧</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.phases.phase1.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.phases.phase1.description}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.phases.phase2.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.phases.phase2.description}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.ourSolution.phases.phase3.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.ourSolution.phases.phase3.description}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-muted/20 text-center">
              <h3 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                Join Our Journey
              </h3>
              <p className="text-muted-foreground">
                We're actively looking for partners and pilot customers to help
                shape the future of enterprise blockchain solutions. Get in
                touch to learn how you can be part of our innovation journey.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
