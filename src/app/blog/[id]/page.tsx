"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { getBlogPost } from "@/lib/blog";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { t, language } = useLanguage();
  const post = getBlogPost(params.id);

  const headerReveal = useScrollReveal();
  const contentReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  if (!post) {
    notFound();
  }

  const title = language === "zh" ? post.titleZh : post.title;
  const content = language === "zh" ? post.contentZh : post.content;
  const category = language === "zh" ? post.categoryZh : post.category;
  const tags = language === "zh" ? post.tagsZh : post.tags;

  return (
    <PageWrapper>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-brand-teal hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header
            ref={headerReveal.ref}
            className={`mb-8 scroll-reveal ${
              headerReveal.isVisible ? "visible" : ""
            }`}
          >
            <div className="mb-4">
              <span className="text-sm text-brand-teal font-medium bg-brand-teal/10 px-3 py-1 rounded-full">
                {category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-brand-navy dark:text-brand-teal">
              {title}
            </h1>

            <div className="flex items-center text-muted-foreground space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-muted px-3 py-1 rounded-full flex items-center space-x-1"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <article
            ref={contentReveal.ref}
            className={`prose prose-lg dark:prose-invert max-w-none scroll-reveal ${
              contentReveal.isVisible ? "visible" : ""
            }`}
          >
            <div
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: content
                  .replace(/\n/g, "<br />")
                  .replace(
                    /## (.*?)<br \/>/g,
                    '<h2 class="text-2xl font-bold mt-8 mb-4 text-brand-navy dark:text-brand-teal">$1</h2>'
                  )
                  .replace(
                    /### (.*?)<br \/>/g,
                    '<h3 class="text-xl font-bold mt-6 mb-3 text-brand-navy dark:text-brand-teal">$1</h3>'
                  )
                  .replace(
                    /# (.*?)<br \/>/g,
                    '<h1 class="text-3xl font-bold mt-8 mb-6 text-brand-navy dark:text-brand-teal">$1</h1>'
                  )
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="font-bold text-brand-navy dark:text-brand-teal">$1</strong>'
                  )
                  .replace(/- (.*?)<br \/>/g, '<li class="mb-2">$1</li>')
                  .replace(/(\d+)\. (.*?)<br \/>/g, '<li class="mb-2">$2</li>'),
              }}
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">
                  Published by{" "}
                  <span className="font-semibold text-brand-navy dark:text-brand-teal">
                    {post.author}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/blog">More Articles</Link>
              </Button>
            </div>
          </footer>

          {/* Call to Action */}
          <div
            ref={ctaReveal.ref}
            className={`mt-12 p-8 rounded-lg bg-gradient-to-r from-brand-navy to-brand-teal text-white text-center scroll-reveal ${
              ctaReveal.isVisible ? "visible" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">
              Interested in Our Solutions?
            </h2>
            <p className="mb-6 opacity-90">{t.common.contactToday}</p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-brand-navy hover:bg-white/90"
            >
              <Link href="/contact">{t.nav.contactUs}</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
