import type { Metadata } from "next";

// Root metadata for auth pages
export const authMetadata: Metadata = {
  robots: "noindex, nofollow", // Prevent indexing of all auth pages
};

// Metadata configurations for each route
export const metadataConfig: Record<string, Metadata> = {
  additionalInfo: {
    title: "Is OrbitView Right for You? | OrbitView",
    description:
      "Discover if OrbitView is the right platform for sharing your expertise. Learn about ideal users, benefits, and requirements for creating your AI agent.",
    keywords: [
      "AI agent",
      "knowledge sharing",
      "expert platform",
      "teaching platform",
      "mentoring",
      "passive income",
      "expertise monetization",
    ],
    openGraph: {
      title: "Is OrbitView Right for You? | OrbitView",
      description:
        "Discover if OrbitView is the right platform for sharing your expertise. Learn about ideal users, benefits, and requirements for creating your AI agent.",
      type: "website",
      url: "https://orbitview.net/additional-info",
      siteName: "OrbitView",
      images: [
        {
          url: "https://orbitview.net/og-image.png",
          width: 1200,
          height: 630,
          alt: "OrbitView - Transform Your Expertise into an AI agent",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Is OrbitView Right for You? | OrbitView",
      description:
        "Discover if OrbitView is the right platform for sharing your expertise. Learn about ideal users, benefits, and requirements for creating your AI agent.",
      images: ["https://orbitview.net/og-image.png"],
    },
  },

  login: {
    title: "Sign In | OrbitView",
    description:
      "Sign in to your OrbitView account to manage your AI agent and share your expertise.",
    openGraph: {
      title: "Sign In | OrbitView",
      description:
        "Sign in to your OrbitView account to manage your AI agent and share your expertise.",
      type: "website",
      url: "https://orbitview.net/auth/login",
      siteName: "OrbitView",
    },
  },

  signup: {
    title: "Create Account | OrbitView",
    description:
      "Join OrbitView and start creating your AI agent to share your expertise with the world.",
    openGraph: {
      title: "Create Account | OrbitView",
      description:
        "Join OrbitView and start creating your AI agent to share your expertise with the world.",
      type: "website",
      url: "https://orbitview.net/auth/signup",
      siteName: "OrbitView",
    },
  },

  chat: {
    title: "Chat with AI Agent | OrbitView",
    description:
      "Interact with AI agents and learn from experts in real-time through our intelligent chat interface.",
    keywords: [
      "AI chat",
      "expert chat",
      "knowledge sharing",
      "interactive learning",
      "AI mentor",
    ],
    openGraph: {
      title: "Chat with AI Agent | OrbitView",
      description:
        "Interact with AI agents and learn from experts in real-time through our intelligent chat interface.",
      type: "website",
      url: "https://orbitview.net/chat",
      siteName: "OrbitView",
    },
  },

  content: {
    title: "Content Management | OrbitView",
    description:
      "Manage and organize your knowledge content. Create, edit, and publish content to train your AI agent.",
    keywords: [
      "content management",
      "knowledge base",
      "AI training",
      "expert content",
      "educational content",
    ],
    openGraph: {
      title: "Content Management | OrbitView",
      description:
        "Manage and organize your knowledge content. Create, edit, and publish content to train your AI agent.",
      type: "website",
      url: "https://orbitview.net/content",
      siteName: "OrbitView",
    },
  },

  create: {
    title: "Create Your AI Agent | OrbitView",
    description:
      "Design and customize your AI agent. Define its expertise, personality, and communication style.",
    keywords: [
      "create AI agent",
      "AI personality",
      "expert agent",
      "knowledge transfer",
      "AI customization",
    ],
    openGraph: {
      title: "Create Your AI Agent | OrbitView",
      description:
        "Design and customize your AI agent. Define its expertise, personality, and communication style.",
      type: "website",
      url: "https://orbitview.net/create",
      siteName: "OrbitView",
    },
  },

  dashboard: {
    title: "Dashboard | OrbitView",
    description:
      "Monitor your AI agent performance, track engagement, and manage your knowledge sharing platform.",
    keywords: [
      "AI dashboard",
      "performance metrics",
      "engagement analytics",
      "content management",
      "user insights",
    ],
    openGraph: {
      title: "Dashboard | OrbitView",
      description:
        "Monitor your AI agent performance, track engagement, and manage your knowledge sharing platform.",
      type: "website",
      url: "https://orbitview.net/dashboard",
      siteName: "OrbitView",
    },
  },

  feed: {
    title: "Knowledge Feed | OrbitView",
    description:
      "Explore expert content, insights, and updates from AI agents and knowledge creators.",
    keywords: [
      "knowledge feed",
      "expert content",
      "learning feed",
      "AI insights",
      "educational content",
    ],
    openGraph: {
      title: "Knowledge Feed | OrbitView",
      description:
        "Explore expert content, insights, and updates from AI agents and knowledge creators.",
      type: "website",
      url: "https://orbitview.net/feed",
      siteName: "OrbitView",
    },
  },

  profile: {
    title: "Profile | OrbitView",
    description:
      "Manage your expert profile, AI agents, and content. Track your impact and engagement with learners.",
    keywords: [
      "expert profile",
      "AI agent management",
      "content creator",
      "knowledge sharing",
      "personal brand",
    ],
    openGraph: {
      title: "Profile | OrbitView",
      description:
        "Manage your expert profile, AI agents, and content. Track your impact and engagement with learners.",
      type: "website",
      url: "https://orbitview.net/profile",
      siteName: "OrbitView",
    },
  },

  train: {
    title: "Train Your AI Agent | OrbitView",
    description:
      "Upload and manage training materials to enhance your AI agent's knowledge and expertise.",
    keywords: [
      "AI training",
      "knowledge upload",
      "agent training",
      "expertise sharing",
      "content management",
    ],
    openGraph: {
      title: "Train Your AI Agent | OrbitView",
      description:
        "Upload and manage training materials to enhance your AI agent's knowledge and expertise.",
      type: "website",
      url: "https://orbitview.net/train",
      siteName: "OrbitView",
    },
  },

  waitlist: {
    title: "Join the Waitlist | OrbitView",
    description:
      "Be among the first to create your AI agent and start sharing your expertise with the world.",
    keywords: [
      "waitlist",
      "early access",
      "AI agent",
      "expert platform",
      "knowledge sharing",
    ],
    openGraph: {
      title: "Join the Waitlist | OrbitView",
      description:
        "Be among the first to create your AI agent and start sharing your expertise with the world.",
      type: "website",
      url: "https://orbitview.net/waitlist",
      siteName: "OrbitView",
      images: [
        {
          url: "https://orbitview.net/og-image.png",
          width: 1200,
          height: 630,
          alt: "OrbitView - Transform Your Expertise into an AI agent",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Join the OrbitView Waitlist",
      description:
        "Be among the first to create your AI agent and start sharing your expertise with the world.",
      images: ["https://orbitview.net/og-image.png"],
    },
  },
};
