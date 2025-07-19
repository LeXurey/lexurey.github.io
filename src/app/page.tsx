"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChatWidget } from "@/components/ui/chat-widget";

export default function HomePage() {
  const { t } = useLanguage();

  // Scroll reveal hooks for different sections
  const visionReveal = useScrollReveal();
  const capabilitiesReveal = useScrollReveal();
  const partnershipsReveal = useScrollReveal();
  const challengesReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-navy dark:text-white">
              {t.home.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="transition-all duration-200 hover:scale-105 transform"
              >
                <Link href="/contact">{t.nav.contactUs}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transition-all duration-200 hover:scale-105 transform"
              >
                <Link href="/what-we-do">{t.nav.whatWeDo}</Link>
              </Button>
            </div>
            <p className="mt-8 text-muted-foreground">
              {t.common.contactToday}
            </p>
          </div>
        </section>

        {/* Our Vision Section */}
        <section
          ref={visionReveal.ref}
          className={`py-16 px-4 bg-brand-teal/15 dark:bg-brand-navy/20 scroll-reveal ${
            visionReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-navy dark:text-brand-teal">
              {t.ourVision.title}
            </h2>

            <div className="p-8 rounded-lg border bg-card text-card-foreground mb-12">
              <div
                className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-center prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors"
                dangerouslySetInnerHTML={{
                  __html: t.ourVision.content,
                }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.home.vision.innovation.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.vision.innovation.description}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.home.vision.trust.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.vision.trust.description}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.home.vision.sustainability.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.home.vision.sustainability.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section
          ref={capabilitiesReveal.ref}
          className={`py-16 px-4 bg-background scroll-reveal ${
            capabilitiesReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-navy dark:text-brand-teal">
              {t.home.capabilities.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="mb-4">
                  <div
                    className="prose dark:prose-invert max-w-none prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: t.home.capabilities.researchDepth,
                    }}
                  />
                </div>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="mb-4">
                  <div
                    className="prose dark:prose-invert max-w-none prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: t.home.capabilities.deliveryExperience,
                    }}
                  />
                </div>
              </div>
              <div className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="mb-4">
                  <div
                    className="prose dark:prose-invert max-w-none prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: t.home.capabilities.securityFocus,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section
          ref={partnershipsReveal.ref}
          className={`py-16 px-4 bg-brand-teal/15 dark:bg-brand-navy/20 scroll-reveal ${
            partnershipsReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-navy dark:text-brand-teal">
              {t.home.partnerships.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200">
                <div
                  className="prose dark:prose-invert max-w-none prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                  dangerouslySetInnerHTML={{
                    __html: t.home.partnerships.compusoft,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section
          ref={challengesReveal.ref}
          className={`py-16 px-4 bg-background scroll-reveal ${
            challengesReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-navy dark:text-brand-teal">
              {t.home.challenges.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.home.challenges.zkpComplexity}</p>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.home.challenges.esgFrameworks}</p>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.home.challenges.transparency}</p>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.home.challenges.trust}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl mb-8 opacity-90">{t.common.contactToday}</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transition-all duration-200 hover:scale-105 transform"
            >
              <Link href="/contact">{t.nav.contactUs}</Link>
            </Button>
          </div>
        </section>
      </div>
      
      {/* Chat Widget */}
      <ChatWidget />
    </PageWrapper>
  );
}
