import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "OrbitView - Transform Your Expertise into an AI Avatar",
    template: "%s | OrbitView",
  },
  description:
    "Create an AI avatar to share your knowledge 24/7. Perfect for busy professionals looking to monetize their expertise through personalized AI mentoring.",
  keywords: [
    "AI Avatar",
    "Digital Twin",
    "Knowledge Sharing",
    "Professional Mentoring",
    "AI Teaching",
    "Expert System",
    "Online Learning",
    "Passive Income",
    "Professional Development",
    "AI Technology",
  ],
  authors: [{ name: "OrbitView" }],
  creator: "OrbitView",
  publisher: "OrbitView",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://orbitview.ai"),
  openGraph: {
    title: "OrbitView - Transform Your Expertise into an AI Avatar",
    description:
      "Create an AI avatar to share your knowledge 24/7. Perfect for busy professionals looking to monetize their expertise through personalized AI mentoring.",
    url: "https://orbitview.ai",
    siteName: "OrbitView",
    images: [
      {
        url: "https://orbitview.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OrbitView - AI Avatar Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitView - Transform Your Expertise into an AI Avatar",
    description:
      "Create an AI avatar to share your knowledge 24/7. Perfect for busy professionals looking to monetize their expertise.",
    images: ["https://orbitview.ai/twitter-image.jpg"],
    creator: "@orbitview",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-montserrat`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
