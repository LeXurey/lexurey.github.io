"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function WhoWeArePage() {
  const { t } = useLanguage();

  const teamReveal = useScrollReveal();
  const expertiseReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-brand-navy dark:text-brand-teal">
            {t.whoWeAre.title}
          </h1>

          <div
            ref={teamReveal.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto scroll-reveal ${
              teamReveal.isVisible ? "visible" : ""
            }`}
          >
            {t.whoWeAre.team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card text-card-foreground text-center"
              >
                <div className="relative mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-48 h-48 mx-auto rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">
                  {member.name}
                </h3>
                <p className="text-brand-teal dark:text-brand-teal font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm mb-4 text-left">
                  {member.description}
                </p>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand-teal hover:text-brand-teal/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </Link>
              </div>
            ))}
          </div>

          <div
            ref={expertiseReveal.ref}
            className={`mt-16 p-8 rounded-lg bg-muted/20 text-center max-w-4xl mx-auto scroll-reveal ${
              expertiseReveal.isVisible ? "visible" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
              Our Expertise Drives Innovation
            </h2>
            <p className="text-muted-foreground">
              Our diverse team combines deep technical expertise with industry
              experience to deliver cutting-edge blockchain and ERP solutions
              that meet real-world enterprise needs.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
