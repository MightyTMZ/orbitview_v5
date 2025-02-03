"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Video,
  FileText,
  File,
  Newspaper,
  Calendar,
  Upload,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Metadata } from "next";

interface ContentItem {
  id: string;
  title: string;
  type: "video" | "post" | "resource" | "article" | "event";
  status: "draft" | "published" | "scheduled";
  date: string;
  views?: number;
  engagement?: number;
  thumbnail?: string;
}

const sampleContent: ContentItem[] = [
  {
    id: "1",
    title: "Introduction to System Design",
    type: "video",
    status: "published",
    date: "2024-03-19",
    views: 1234,
    engagement: 89,
    thumbnail: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b",
  },
  {
    id: "2",
    title: "Best Practices in Code Review",
    type: "article",
    status: "published",
    date: "2024-03-18",
    views: 567,
    engagement: 45,
  },
  {
    id: "3",
    title: "System Design Workshop",
    type: "event",
    status: "scheduled",
    date: "2024-04-01",
  },
  {
    id: "4",
    title: "Architecture Decision Records Template",
    type: "resource",
    status: "published",
    date: "2024-03-17",
    views: 890,
  },
  {
    id: "5",
    title: "Microservices vs Monolith",
    type: "post",
    status: "draft",
    date: "2024-03-16",
  },
];

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredContent, setFilteredContent] =
    useState<ContentItem[]>(sampleContent);

  const contentTypes = [
    { value: "all", label: "All Content", icon: FileText },
    { value: "video", label: "Videos", icon: Video },
    { value: "post", label: "Posts", icon: FileText },
    { value: "resource", label: "Resources", icon: File },
    { value: "article", label: "Articles", icon: Newspaper },
    { value: "event", label: "Events", icon: Calendar },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500/10 text-green-500";
      case "draft":
        return "bg-yellow-500/10 text-yellow-500";
      case "scheduled":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video;
      case "post":
        return FileText;
      case "resource":
        return File;
      case "article":
        return Newspaper;
      case "event":
        return Calendar;
      default:
        return FileText;
    }
  };

  const TypeIcon = ({ type }: { type: string }) => {
    const IconComponent = getTypeIcon(type);
    return <IconComponent className="w-8 h-8 text-[#68a2b3]" />;
  };

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#68a2b3]" />
              <h1 className="text-3xl font-bold text-[#fbffff]">
                Content Management
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]">
                <Plus className="w-4 h-4 mr-2" />
                Create Content
              </Button>
            </div>
          </div>
          <div className="h-1 w-32 bg-[#3d778c] mt-4 mb-6 rounded-full" />
        </div>

        {/* Content Management Interface */}
        <Card className="bg-[#000d20] border-[#3d778c] p-6">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3d778c] w-4 h-4" />
              <Input
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
              />
            </div>
            <Button
              variant="outline"
              className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="bg-[#000d20] border border-[#3d778c] p-1 space-x-2">
              {contentTypes.map((type) => (
                <TabsTrigger
                  key={type.value}
                  value={type.value}
                  className="data-[state=active]:bg-[#3d778c] data-[state=active]:text-[#fbffff]"
                >
                  <type.icon className="w-4 h-4 mr-2" />
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content List */}
            <TabsContent value="all" className="space-y-4">
              {sampleContent.map((item) => (
                <Card
                  key={item.id}
                  className="p-4 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Thumbnail or Icon */}
                    <div className="w-16 h-16 rounded-lg bg-[#3d778c]/10 flex items-center justify-center">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-[#3d778c]/10 flex items-center justify-center">
                          <TypeIcon type={item.type} />
                        </div>
                      )}
                    </div>

                    {/* Content Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-[#fbffff] font-medium">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                                item.status
                              )}`}
                            >
                              {item.status.charAt(0).toUpperCase() +
                                item.status.slice(1)}
                            </span>
                            <span className="text-[#3d778c] text-sm">
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-[#3d778c] hover:text-[#68a2b3]"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#000d20] border-[#3d778c]">
                            <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                              <Pencil className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            {item.type === "article" && (
                              <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Stereoscopic View
                              </DropdownMenuItem>
                            )}
                            {item.type === "event" && (
                              <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Event Page
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-500 hover:bg-red-500/10">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* Stats */}
                      {(item.views || item.engagement) && (
                        <div className="flex items-center gap-4 mt-2">
                          {item.views && (
                            <span className="text-[#3d778c] text-sm">
                              {item.views.toLocaleString()} views
                            </span>
                          )}
                          {item.engagement && (
                            <span className="text-[#3d778c] text-sm">
                              {item.engagement}% engagement
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </main>
  );
}
