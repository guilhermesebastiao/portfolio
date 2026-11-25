import { DEFAULT_LANGUAGE, isLanguage, LANGUAGE_COOKIE_KEY } from "@/shared/lib/language";
import { DEFAULT_THEME, isTheme, THEME_COOKIE_KEY } from "@/shared/lib/theme";
import { getCookieValue } from "@/shared/utils/get-cookie-value";
import { SITE_METADATA } from "@/shared/assets/data/metadata";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: [...SITE_METADATA.keywords],
  authors: [
    {
      name: SITE_METADATA.name,
      url: SITE_METADATA.links.github,
    },
  ],
  alternates: {
    canonical: SITE_METADATA.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_METADATA.title,
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [language, theme] = await Promise.all([
    getCookieValue({
      key: LANGUAGE_COOKIE_KEY,
      fallback: DEFAULT_LANGUAGE,
      isValid: isLanguage,
    }),
    getCookieValue({
      key: THEME_COOKIE_KEY,
      fallback: DEFAULT_THEME,
      isValid: isTheme,
    }),
  ]);

  return (
    <html
      lang={language}
      className={twMerge(geistSans.variable, geistMono.variable, theme, "antialiased")}
    >
      <body className="bg-background">
        <Providers initialTheme={theme} initialLanguage={language}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
