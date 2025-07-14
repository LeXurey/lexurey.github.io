import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/hooks/use-language";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeXurey - Let Us Extend the Future for You",
  description:
    "Zero-Knowledge Proof and blockchain-enabled ERP solutions for supply chain transparency, ESG compliance, and carbon market integrity.",
  keywords:
    "Zero-Knowledge Proof, ZKP, Blockchain, ERP, ESG, Compliance, Supply Chain, Carbon Market",
  authors: [{ name: "LeXurey" }],
  openGraph: {
    title: "LeXurey - Let Us Extend the Future for You",
    description:
      "Zero-Knowledge Proof and blockchain-enabled ERP solutions for supply chain transparency, ESG compliance, and carbon market integrity.",
    type: "website",
    url: "https://lexurey.com",
    images: [
      {
        url: "/img/official.png",
        width: 1200,
        height: 630,
        alt: "LeXurey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeXurey - Let Us Extend the Future for You",
    description:
      "Zero-Knowledge Proof and blockchain-enabled ERP solutions for supply chain transparency, ESG compliance, and carbon market integrity.",
    images: ["/img/official.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/Company-logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
 