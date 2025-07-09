"use client";

import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function WhatWeDoPage() {
  const { t } = useLanguage();

  // Scroll reveal hooks for different sections
  const servicesReveal = useScrollReveal();
  const researchReveal = useScrollReveal();
  const summaryReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Main Content Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-brand-navy dark:text-brand-teal">
              {t.whatWeDo.title}
            </h1>

            <div className="p-8 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 mb-12">
              <div
                className="prose dark:prose-invert max-w-none text-lg leading-relaxed prose-a:text-brand-teal prose-a:hover:text-brand-navy dark:prose-a:hover:text-brand-teal prose-a:transition-colors prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                dangerouslySetInnerHTML={{
                  __html: t.whatWeDo.content,
                }}
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                {t.whatWeDo.video.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t.whatWeDo.video.description}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg border">
                  <iframe
                    src="https://www.youtube.com/embed/iZHo6gnMpM4"
                    title="LeXurey Solutions Overview"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesReveal.ref}
          className={`py-16 px-4 bg-brand-teal/15 dark:bg-brand-navy/20 scroll-reveal ${
            servicesReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-3xl mb-4">🔐</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.whatWeDo.services.zkp.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.whatWeDo.services.zkp.description}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-3xl mb-4">⛓️</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.whatWeDo.services.blockchain.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.whatWeDo.services.blockchain.description}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/10 transition-colors duration-200 hover:scale-105 transform">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {t.whatWeDo.services.esg.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.whatWeDo.services.esg.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Questions Section */}
        <section
          ref={researchReveal.ref}
          className={`py-16 px-4 bg-background scroll-reveal ${
            researchReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-navy dark:text-brand-teal">
              {t.whatWeDo.researchQuestions.title}
            </h2>

            <div className="space-y-6">
              {t.whatWeDo.researchQuestions.questions.map((question, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 hover:scale-105 transform"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg">{question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section
          ref={summaryReveal.ref}
          className={`py-16 px-4 bg-brand-teal/15 dark:bg-brand-navy/20 scroll-reveal ${
            summaryReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="p-8 rounded-lg bg-muted/20 text-center hover:bg-brand-teal/5 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                {t.whatWeDo.drivingInnovation.title}
              </h3>
              <p className="text-muted-foreground">
                {t.whatWeDo.drivingInnovation.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
