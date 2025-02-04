import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Train Your AI Agent - OrbitView",
  description:
    "Upload and manage training materials to enhance your AI agent's knowledge and capabilities.",
  openGraph: {
    title: "Train Your AI Agent - OrbitView",
    description: "Upload and manage training materials for your AI agent",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633613286991-611fe299c4be",
        width: 1200,
        height: 630,
        alt: "OrbitView Training Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Train Your AI Agent - OrbitView",
    description: "Upload and manage training materials for your AI agent",
    images: ["https://images.unsplash.com/photo-1633613286991-611fe299c4be"],
  },
};

export default function TrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
