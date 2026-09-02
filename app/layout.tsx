import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const siteUrl = "https://portofolio-dhesta.vercel.app/";
const title = "Dhesta Irham Prasetya | Web Developer & UI/UX Designer";
const description =
  "Portfolio Dhesta Irham Prasetya yang menampilkan proyek web development, sistem informasi, dan studi kasus UI/UX.";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Dhesta Irham Prasetya",
  },
  description,
  applicationName: "Portfolio Dhesta Irham Prasetya",
  authors: [{ name: "Dhesta Irham Prasetya", url: siteUrl }],
  creator: "Dhesta Irham Prasetya",
  category: "technology",
  keywords: [
    "Dhesta Irham Prasetya",
    "web developer",
    "Laravel developer",
    "UI/UX designer",
    "Sistem Informasi",
    "portfolio developer Indonesia",
    "Next.js portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Portfolio Dhesta Irham Prasetya",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhesta Irham Prasetya",
    url: siteUrl,
    jobTitle: "Web Developer & UI/UX Designer",
    sameAs: [
      "https://github.com/Dstz88",
      "https://www.instagram.com/dsstaa_ip/",
    ],
  };

  return (
    <html lang="id" className={`${outfit.variable} dark antialiased`}>
      <body className={`${outfit.className} bg-[#050505] text-white selection:bg-[#6EE7F9] selection:text-[#050505] overflow-x-hidden min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40" />
        {children}
      </body>
    </html>
  );
}
