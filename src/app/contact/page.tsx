"use client";

import Link from "next/link";
import { Mail, Globe, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactPage() {
  const { t } = useLanguage();

  const contactReveal = useScrollReveal();

  return (
    <PageWrapper>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-brand-navy dark:text-brand-teal">
            {t.contact.title}
          </h1>

          <div
            ref={contactReveal.ref}
            className={`grid md:grid-cols-2 gap-12 scroll-reveal ${
              contactReveal.isVisible ? "visible" : ""
            }`}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <h2 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                  {t.contact.getInTouch}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.common.contactToday}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-teal" />
                    <div>
                      <p className="font-semibold">{t.contact.director}</p>
                      <p className="text-muted-foreground">admin@lexurey.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-brand-teal" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <Link
                        href="https://lexurey.com"
                        className="text-brand-teal hover:underline"
                      >
                        https://lexurey.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-brand-teal" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <Link
                        href="https://github.com/lexurey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-teal hover:underline"
                      >
                        github.com/lexurey
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-brand-teal" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <Link
                        href="https://www.linkedin.com/company/107500862"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-teal hover:underline"
                      >
                        Follow us on LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <h2 className="text-2xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                {t.contact.sendMessage}
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder={t.contact.form.companyPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-md border bg-background"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-teal hover:bg-brand-teal/90"
                >
                  {t.contact.form.sendButton}
                </Button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </PageWrapper>
  );
}
