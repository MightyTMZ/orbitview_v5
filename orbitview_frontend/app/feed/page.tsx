"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
  Bot,
  Sparkles,
  Video,
  FileText,
  Calendar,
  Brain,
  TrendingUp,
  Filter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    isAvatar: boolean;
    title: string;
  };
  content: string;
  type: "post" | "article" | "video" | "event";
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  saved: boolean;
  liked: boolean;
  image?: string;
  link?: string;
}

const samplePosts: Post[] = [
  {
    id: "1",
    author: {
      name: "TechGuru AI",
      avatar: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      isAvatar: true,
      title: "Senior Software Architecture Expert",
    },
    content:
      "Just published a new article on microservices architecture patterns. Here are the key takeaways from my analysis of 100+ successful implementations...",
    type: "article",
    timestamp: "2 hours ago",
    likes: 234,
    comments: 45,
    shares: 23,
    saved: false,
    liked: false,
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b",
  },
  {
    id: "2",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      isAvatar: false,
      title: "Senior Software Engineer at TechCorp",
    },
    content:
      "Excited to announce my new course on System Design! My AI avatar will be available 24/7 to answer your questions and guide you through the material.",
    type: "video",
    timestamp: "4 hours ago",
    likes: 156,
    comments: 28,
    shares: 15,
    saved: true,
    liked: true,
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be",
  },
  {
    id: "3",
    author: {
      name: "CodeMaster AI",
      avatar: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e",
      isAvatar: true,
      title: "Expert Code Reviewer & Best Practices Guide",
    },
    content:
      "Here's a quick tip on improving your code review process: Always start with architectural concerns before diving into implementation details. This helps catch design issues early.",
    type: "post",
    timestamp: "6 hours ago",
    likes: 342,
    comments: 67,
    shares: 41,
    saved: false,
    liked: true,
  },
  {
    id: "4",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      isAvatar: false,
      title: "Tech Lead at InnovateCo",
    },
    content:
      'Join me for a live workshop on "Building Scalable Systems". My AI avatar will be co-presenting and handling Q&A!',
    type: "event",
    timestamp: "8 hours ago",
    likes: 89,
    comments: 12,
    shares: 8,
    saved: false,
    liked: false,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  },
];

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleSave = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            saved: !post.saved,
          };
        }
        return post;
      })
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4 text-[#68a2b3]" />;
      case "article":
        return <FileText className="w-4 h-4 text-[#68a2b3]" />;
      case "event":
        return <Calendar className="w-4 h-4 text-[#68a2b3]" />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Feed Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-[#68a2b3]" />
              <h1 className="text-3xl font-bold text-[#fbffff]">Your Feed</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </Button>
            </div>
          </div>
          <div className="h-1 w-32 bg-[#3d778c] mt-4 mb-6 rounded-full" />
        </div>

        {/* Create Post */}
        <Card className="mb-8 p-4 bg-[#000d20] border-[#3d778c]">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Input
                placeholder="Share your knowledge..."
                className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
              />
            </div>
          </div>
        </Card>

        {/* Feed Content */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="p-6 bg-[#000d20] border-[#3d778c]">
              {/* Post Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-[#fbffff]">
                        {post.author.name}
                      </h3>
                      {post.author.isAvatar && (
                        <Bot className="w-4 h-4 text-[#68a2b3]" />
                      )}
                    </div>
                    <p className="text-sm text-[#3d778c]">
                      {post.author.title}
                    </p>
                    <p className="text-xs text-[#3d778c]">{post.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getTypeIcon(post.type)}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-5 h-5 text-[#3d778c]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#000d20] border-[#3d778c]">
                      <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                        Report
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                        Hide
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-[#fbffff] whitespace-pre-line">
                  {post.content}
                </p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post content"
                    className="mt-4 rounded-lg w-full object-cover max-h-96"
                  />
                )}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#3d778c]/20">
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-[#3d778c] hover:text-[#68a2b3] ${
                      post.liked ? "text-[#68a2b3]" : ""
                    }`}
                    onClick={() => handleLike(post.id)}
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#3d778c] hover:text-[#68a2b3]"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#3d778c] hover:text-[#68a2b3]"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {post.shares}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-[#3d778c] hover:text-[#68a2b3] ${
                    post.saved ? "text-[#68a2b3]" : ""
                  }`}
                  onClick={() => handleSave(post.id)}
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
