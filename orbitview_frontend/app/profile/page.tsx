"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  MapPin,
  Link as LinkIcon,
  Calendar,
  Bot,
  FileText,
  Video,
  Newspaper,
  File,
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Edit,
  Settings,
  ExternalLink,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface ContentItem {
  id: string;
  type: "post" | "article" | "video" | "resource";
  title: string;
  description: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

interface AvatarInfo {
  id: string;
  name: string;
  image: string;
  expertise: string;
  rating: number;
  interactions: number;
  status: "online" | "offline";
  lastActive?: string;
}

const sampleContent: ContentItem[] = [
  {
    id: "1",
    type: "article",
    title: "Understanding Microservices Architecture",
    description: "A comprehensive guide to building scalable microservices...",
    date: "2024-03-19",
    likes: 234,
    comments: 45,
    shares: 23,
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b",
  },
  {
    id: "2",
    type: "video",
    title: "System Design Interview Preparation",
    description: "Learn how to ace your system design interviews...",
    date: "2024-03-18",
    likes: 567,
    comments: 89,
    shares: 34,
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be",
  },
  {
    id: "3",
    type: "resource",
    title: "Software Architecture Templates",
    description: "A collection of battle-tested architecture templates...",
    date: "2024-03-17",
    likes: 123,
    comments: 15,
    shares: 45,
  },
];

const avatars: AvatarInfo[] = [
  {
    id: "1",
    name: "Mr. Saleem.ai",
    image: "/saleem.png",
    expertise: "Python, Java, C++, inadvertent antics during lessons",
    rating: 4.9,
    interactions: 1234,
    status: "online",
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("content");

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "article":
        return <Newspaper className="w-4 h-4" />;
      case "resource":
        return <File className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Profile Header */}
        <Card className="p-6 bg-[#000d20] border-[#3d778c] mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image & Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src="/saleem.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-[#fbffff] mb-2">
                    Mr. Saleem
                  </h1>
                  <p className="text-[#3d778c] text-lg mb-4">
                    Math and CS Teacher @ Earl Haig Secondary School
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[#3d778c]">
                  <MapPin className="w-4 h-4" />
                  <span>Toronto, CA</span>
                </div>
                <div className="flex items-center gap-2 text-[#3d778c]">
                  {/* additional fields that the user wants to add --> JSONField on the Django backend
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="hover:text-[#68a2b3]">
                    github.com/johndoe
                  </a> */}
                </div>
                <div className="flex items-center gap-2 text-[#3d778c]">
                  <Calendar className="w-4 h-4" />
                  <span>Joined Feb 2025</span>
                </div>
              </div>

              <p className="text-[#fbffff] mb-4">
                Passionate about programming and making students laugh.
              </p>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-[#fbffff]">1.2K</div>
                  <div className="text-sm text-[#3d778c]">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#fbffff]">843</div>
                  <div className="text-sm text-[#3d778c]">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#fbffff]">156</div>
                  <div className="text-sm text-[#3d778c]">Posts</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-[#000d20] border border-[#3d778c]">
            <TabsTrigger
              value="content"
              className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
            >
              <FileText className="w-4 h-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger
              value="avatars"
              className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
            >
              <Bot className="w-4 h-4 mr-2" />
              AI Avatars
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleContent.map((item) => (
                <Card
                  key={item.id}
                  className="bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300"
                >
                  {item.image && (
                    <div className="relative h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-[#000d20]/80 hover:bg-[#000d20]"
                        >
                          <MoreHorizontal className="w-4 h-4 text-[#fbffff]" />
                        </Button>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(item.type)}
                      <span className="text-[#3d778c] text-sm">
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-[#fbffff] font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#3d778c] text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-[#3d778c] text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" /> {item.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" /> {item.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" /> {item.shares}
                        </span>
                      </div>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Avatars Tab */}
          <TabsContent value="avatars">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {avatars.map((avatar) => (
                <Card
                  key={avatar.id}
                  className="p-6 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={`${avatar.image}`} />
                        <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-[#000d20] ${
                          avatar.status === "online"
                            ? "bg-green-500"
                            : "bg-gray-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-[#fbffff] font-medium flex items-center gap-2">
                            {avatar.name}
                            <Bot className="w-4 h-4 text-[#68a2b3]" />
                          </h3>
                          <p className="text-[#3d778c]">{avatar.expertise}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[#3d778c] hover:text-[#68a2b3]"
                        >
                          <MoreHorizontal className="w-5 h-5" />
                        </Button>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#fbffff]">
                            {avatar.rating}
                          </div>
                          <div className="text-xs text-[#3d778c]">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#fbffff]">
                            {avatar.interactions}
                          </div>
                          <div className="text-xs text-[#3d778c]">
                            Interactions
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#fbffff]">
                            {avatar.status === "online"
                              ? "Active"
                              : avatar.lastActive}
                          </div>
                          <div className="text-xs text-[#3d778c]">Status</div>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button
                          className="flex-1 bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
                          asChild
                        >
                          <Link href="/chat">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Chat
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
