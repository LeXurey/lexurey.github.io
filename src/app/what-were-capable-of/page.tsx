"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function WhatWereCapableOfPage() {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  const enterpriseReveal = useScrollReveal();

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Main Content Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-12 text-center text-brand-navy dark:text-brand-teal">
              {t.whatWereCapableOf.title}
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              {t.whatWereCapableOf.sections.map((section, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200"
                >
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {section.content}
                    </p>

                    {section.expandable && (
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center space-x-2 text-brand-teal hover:text-brand-navy dark:hover:text-brand-teal transition-colors font-medium"
                      >
                        <span>
                          {expandedCards[index] ? "Show Less" : "Learn More"}
                        </span>
                        {expandedCards[index] ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Expandable Content - ERP */}
                  {section.expandable &&
                    expandedCards[index] &&
                    section.title.includes("ERP") &&
                    section.expandedContent &&
                    "experience" in section.expandedContent && (
                      <div className="border-t bg-muted/20 p-8 animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-6">
                          {/* Industry Experience */}
                          <div className="mb-6">
                            <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                              {section.expandedContent.experience.title}
                            </h3>
                            <div
                              className="prose dark:prose-invert max-w-none mb-4 prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                              dangerouslySetInnerHTML={{
                                __html:
                                  section.expandedContent.experience
                                    .description,
                              }}
                            />
                            <ul className="space-y-2">
                              {section.expandedContent.experience.clients.map(
                                (client: string, clientIndex: number) => (
                                  <li
                                    key={clientIndex}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                                    <div
                                      className="prose dark:prose-invert max-w-none prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                                      dangerouslySetInnerHTML={{
                                        __html: client,
                                      }}
                                    />
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Technical Integrations */}
                          <div className="mb-6">
                            <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                              {section.expandedContent.integrations.title}
                            </h3>
                            <div
                              className="prose dark:prose-invert max-w-none mb-4 prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                              dangerouslySetInnerHTML={{
                                __html:
                                  section.expandedContent.integrations
                                    .description,
                              }}
                            />
                            <ul className="space-y-2">
                              {section.expandedContent.integrations.items.map(
                                (item: string, itemIndex: number) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                                    <div
                                      className="prose dark:prose-invert max-w-none prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                                      dangerouslySetInnerHTML={{
                                        __html: item,
                                      }}
                                    />
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Delivery & Innovation */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg bg-card border">
                              <div
                                className="prose dark:prose-invert max-w-none prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                                dangerouslySetInnerHTML={{
                                  __html: section.expandedContent.delivery,
                                }}
                              />
                            </div>
                            <div className="p-4 rounded-lg bg-card border">
                              <div
                                className="prose dark:prose-invert max-w-none prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                                dangerouslySetInnerHTML={{
                                  __html: section.expandedContent.innovation,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Expandable Content - ESG */}
                  {section.expandable &&
                    expandedCards[index] &&
                    section.title.includes("ESG") &&
                    section.expandedContent &&
                    "intro" in section.expandedContent && (
                      <div className="border-t bg-muted/20 p-8 animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-6">
                          {/* Introduction */}
                          <div className="p-6 rounded-lg border bg-card">
                            <div
                              className="prose dark:prose-invert max-w-none text-lg leading-relaxed prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                              dangerouslySetInnerHTML={{
                                __html: section.expandedContent.intro,
                              }}
                            />
                          </div>

                          {/* Problem Statement */}
                          <div className="p-6 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                            <div
                              className="prose dark:prose-invert max-w-none text-muted-foreground"
                              dangerouslySetInnerHTML={{
                                __html: section.expandedContent.problem,
                              }}
                            />
                          </div>

                          {/* Solution */}
                          <div className="p-6 rounded-lg border bg-card">
                            <div
                              className="prose dark:prose-invert max-w-none text-lg leading-relaxed mb-6 prose-strong:text-brand-navy dark:prose-strong:text-brand-teal"
                              dangerouslySetInnerHTML={{
                                __html: section.expandedContent.solution.title,
                              }}
                            />
                            <div className="grid md:grid-cols-3 gap-4">
                              {section.expandedContent.solution.features.map(
                                (feature: string, featureIndex: number) => (
                                  <div
                                    key={featureIndex}
                                    className="p-4 rounded-lg bg-muted/20 hover:bg-brand-teal/10 transition-colors duration-200 text-center"
                                  >
                                    <div className="text-2xl mb-2">
                                      {featureIndex === 0
                                        ? "🔗"
                                        : featureIndex === 1
                                        ? "👥"
                                        : "⚙️"}
                                    </div>
                                    <div
                                      className="prose dark:prose-invert max-w-none prose-strong:text-brand-navy dark:prose-strong:text-brand-teal text-sm"
                                      dangerouslySetInnerHTML={{
                                        __html: feature,
                                      }}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Outcome */}
                          <div className="p-6 rounded-lg bg-gradient-to-r from-brand-teal to-brand-navy dark:from-brand-navy dark:to-brand-teal text-white text-center">
                            <div
                              className="prose prose-invert max-w-none text-lg leading-relaxed prose-strong:text-white"
                              dangerouslySetInnerHTML={{
                                __html: section.expandedContent.outcome,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section
          ref={enterpriseReveal.ref}
          className={`py-16 px-4 bg-brand-teal/15 dark:bg-brand-navy/20 scroll-reveal ${
            enterpriseReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="p-8 rounded-lg bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy text-white text-center hover:scale-105 transform transition-all duration-200">
              <h2 className="text-3xl font-bold mb-4">
                {t.whatWereCapableOf.enterpriseGrade.title}
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {t.whatWereCapableOf.enterpriseGrade.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
