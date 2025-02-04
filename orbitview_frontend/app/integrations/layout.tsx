import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Integrations - OrbitView",
  description:
    "Connect your existing content from YouTube, Medium, Substack, and more to train your AI agent with your authentic knowledge and teaching style.",
  openGraph: {
    title: "Platform Integrations - OrbitView",
    description: "Import your existing content to train your AI agent",
    images: [
      {
        url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        width: 1200,
        height: 630,
        alt: "OrbitView Platform Integrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Integrations - OrbitView",
    description: "Import your existing content to train your AI agent",
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb"],
  },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
