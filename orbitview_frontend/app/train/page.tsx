"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Upload, 
  FileText, 
  Database, 
  Bot, 
  Grid, 
  List, 
  Folder, 
  File, 
  MoreVertical, 
  Trash2,
  Download,
  PenLine,
  Tag,
  Info
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FileLabel {
  id: string;
  text: string;
  context: string;
}

interface FileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: Date;
  progress?: number;
  labels: FileLabel[];
}

export default function TrainAvatar() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [currentFolder, setCurrentFolder] = useState<string>('/');
  const [editingFile, setEditingFile] = useState<FileItem | null>(null);
  const [newLabel, setNewLabel] = useState({ text: '', context: '' });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified),
        progress: 0,
        labels: []
      }));
      setFiles(prev => [...prev, ...newFiles]);
      simulateUpload(newFiles);
    }
  };

  const simulateUpload = (newFiles: FileItem[]) => {
    newFiles.forEach(file => {
      const interval = setInterval(() => {
        setFiles(prev => prev.map(f => {
          if (f.id === file.id) {
            const progress = ((f.progress || 0) + 10);
            if (progress >= 100) clearInterval(interval);
            return { ...f, progress };
          }
          return f;
        }));
      }, 500);
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified),
        progress: 0,
        labels: []
      }));
      setFiles(prev => [...prev, ...newFiles]);
      simulateUpload(newFiles);
    }
  };

  const handleFileSelect = (fileId: string) => {
    setSelectedFiles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fileId)) {
        newSet.delete(fileId);
      } else {
        newSet.add(fileId);
      }
      return newSet;
    });
  };

  const handleDelete = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    setSelectedFiles(prev => {
      const newSet = new Set(prev);
      newSet.delete(fileId);
      return newSet;
    });
  };

  const handleAddLabel = () => {
    if (editingFile && newLabel.text) {
      setFiles(prev => prev.map(file => {
        if (file.id === editingFile.id) {
          return {
            ...file,
            labels: [
              ...file.labels,
              {
                id: Math.random().toString(36).substring(7),
                text: newLabel.text,
                context: newLabel.context
              }
            ]
          };
        }
        return file;
      }));
      setNewLabel({ text: '', context: '' });
    }
  };

  const handleRemoveLabel = (fileId: string, labelId: string) => {
    setFiles(prev => prev.map(file => {
      if (file.id === fileId) {
        return {
          ...file,
          labels: file.labels.filter(label => label.id !== labelId)
        };
      }
      return file;
    }));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-[#68a2b3]" />
            <h1 className="text-3xl font-bold text-[#fbffff]">Training Materials</h1>
          </div>
          <div className="h-1 w-32 bg-[#3d778c] mb-6 rounded-full" />
          <p className="text-[#3d778c] text-lg">
            Manage and organize your training materials to enhance your AI avatar's knowledge.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 bg-[#000d20] border-[#3d778c]">
            <div className="space-y-6">
              {/* File Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all
                  ${dragActive 
                    ? 'border-[#68a2b3] bg-[#3d778c]/10' 
                    : 'border-[#3d778c] hover:border-[#68a2b3]'
                  }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <Label 
                  htmlFor="file-upload" 
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <div className="w-20 h-20 rounded-full bg-[#3d778c]/10 flex items-center justify-center">
                    <Upload className="w-10 h-10 text-[#68a2b3]" />
                  </div>
                  <div>
                    <p className="text-[#fbffff] text-lg font-medium mb-1">
                      Drop files here or click to upload
                    </p>
                    <p className="text-[#3d778c]">
                      Supports PDF, DOC, DOCX, TXT, PPT, PPTX
                    </p>
                  </div>
                </Label>
              </div>

              {/* File Management Interface */}
              {files.length > 0 && (
                <div className="space-y-4">
                  {/* Toolbar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setViewMode('grid')}
                        className={`border-[#3d778c] ${viewMode === 'grid' ? 'bg-[#3d778c] text-[#fbffff]' : 'text-[#3d778c]'}`}
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setViewMode('list')}
                        className={`border-[#3d778c] ${viewMode === 'list' ? 'bg-[#3d778c] text-[#fbffff]' : 'text-[#3d778c]'}`}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {selectedFiles.size > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-[#3d778c]">
                          {selectedFiles.size} selected
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            selectedFiles.forEach(id => handleDelete(id));
                          }}
                          className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Selected
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* File Grid/List View */}
                  <div className={viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    : "space-y-2"
                  }>
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className={`group relative ${
                          viewMode === 'grid'
                            ? 'p-4 border border-[#3d778c] rounded-lg hover:border-[#68a2b3] transition-all'
                            : 'p-3 border border-[#3d778c] rounded-lg hover:border-[#68a2b3] transition-all'
                        } ${selectedFiles.has(file.id) ? 'bg-[#3d778c]/20' : 'bg-transparent'}`}
                        onClick={() => handleFileSelect(file.id)}
                      >
                        <div className={`flex ${viewMode === 'grid' ? 'flex-col items-center' : 'items-center'} gap-4`}>
                          <div className={`${viewMode === 'grid' ? 'text-center' : 'flex-shrink-0'}`}>
                            <FileText className="w-12 h-12 text-[#68a2b3]" />
                          </div>
                          <div className={`flex-1 ${viewMode === 'grid' ? 'text-center' : ''}`}>
                            <p className="text-[#fbffff] font-medium truncate">{file.name}</p>
                            <p className="text-[#3d778c] text-sm">
                              {formatFileSize(file.size)}
                            </p>
                            {/* Labels */}
                            {file.labels.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {file.labels.map(label => (
                                  <TooltipProvider key={label.id}>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <div className="flex items-center gap-1 bg-[#3d778c]/20 px-2 py-1 rounded-full">
                                          <Tag className="w-3 h-3 text-[#68a2b3]" />
                                          <span className="text-xs text-[#fbffff]">{label.text}</span>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleRemoveLabel(file.id, label.id);
                                            }}
                                            className="ml-1 text-[#3d778c] hover:text-[#68a2b3]"
                                          >
                                            ×
                                          </button>
                                        </div>
                                      </TooltipTrigger>
                                      {label.context && (
                                        <TooltipContent className="max-w-xs bg-[#000d20] border-[#3d778c] p-3">
                                          <p className="text-[#fbffff] text-sm">{label.context}</p>
                                        </TooltipContent>
                                      )}
                                    </Tooltip>
                                  </TooltipProvider>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {/* File Actions */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <MoreVertical className="h-4 w-4 text-[#3d778c]" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#000d20] border-[#3d778c]">
                              <Dialog onOpenChange={(open) => {
                                if (open) setEditingFile(file);
                                else {
                                  setEditingFile(null);
                                  setNewLabel({ text: '', context: '' });
                                }
                              }}>
                                <DialogTrigger asChild>
                                  <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                                    <Tag className="mr-2 h-4 w-4" /> Manage Labels
                                  </DropdownMenuItem>
                                </DialogTrigger>
                                <DialogContent className="bg-[#000d20] border-[#3d778c]">
                                  <DialogHeader>
                                    <DialogTitle className="text-[#fbffff]">Manage Labels for {file.name}</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="label" className="text-[#fbffff]">Label</Label>
                                      <Input
                                        id="label"
                                        value={newLabel.text}
                                        onChange={(e) => setNewLabel(prev => ({ ...prev, text: e.target.value }))}
                                        placeholder="Enter a label (e.g., 'Technical Documentation')"
                                        className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Label htmlFor="context" className="text-[#fbffff]">Context</Label>
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger>
                                              <Info className="w-4 h-4 text-[#3d778c]" />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-[#000d20] border-[#3d778c] p-3">
                                              <p className="text-[#fbffff] text-sm">
                                                Describe when and how your AI avatar should use this information.
                                              </p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </div>
                                      <Textarea
                                        id="context"
                                        value={newLabel.context}
                                        onChange={(e) => setNewLabel(prev => ({ ...prev, context: e.target.value }))}
                                        placeholder="Describe when this information should be used (e.g., 'Use when explaining system architecture')"
                                        className="bg-transparent border-[#3d778c] text-[#fbffff] placeholder:text-[#3d778c]"
                                      />
                                    </div>
                                    <Button
                                      onClick={handleAddLabel}
                                      disabled={!newLabel.text}
                                      className="w-full bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff] disabled:opacity-50"
                                    >
                                      Add Label
                                    </Button>
                                    {/* Existing Labels */}
                                    {file.labels.length > 0 && (
                                      <div className="mt-4">
                                        <h4 className="text-[#fbffff] font-medium mb-2">Existing Labels</h4>
                                        <div className="space-y-2">
                                          {file.labels.map(label => (
                                            <div
                                              key={label.id}
                                              className="flex items-center justify-between p-2 border border-[#3d778c] rounded-lg"
                                            >
                                              <div>
                                                <p className="text-[#fbffff]">{label.text}</p>
                                                {label.context && (
                                                  <p className="text-[#3d778c] text-sm">{label.context}</p>
                                                )}
                                              </div>
                                              <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleRemoveLabel(file.id, label.id)}
                                                className="text-[#3d778c] hover:text-[#68a2b3]"
                                              >
                                                <Trash2 className="h-4 w-4" />
                                              </Button>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                                <Download className="mr-2 h-4 w-4" /> Download
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-[#fbffff] hover:bg-[#3d778c]/20">
                                <PenLine className="mr-2 h-4 w-4" /> Rename
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                className="text-red-500 hover:bg-[#3d778c]/20"
                                onClick={() => handleDelete(file.id)}
                              >
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* Upload Progress */}
                        {typeof file.progress === 'number' && file.progress < 100 && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3d778c]/20">
                            <div
                              className="h-full bg-[#68a2b3] transition-all duration-300"
                              style={{ width: `${file.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}