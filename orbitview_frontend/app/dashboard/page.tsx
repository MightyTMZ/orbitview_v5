"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Users,
  MessageSquare,
  Clock,
  TrendingUp,
  Star,
  ThumbsUp,
  AlertCircle,
  BarChart3,
  Calendar,
  Filter,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data - replace with real data from your backend
const interactionsData = [
  { date: "2024-03-01", conversations: 45 },
  { date: "2024-03-02", conversations: 52 },
  { date: "2024-03-03", conversations: 38 },
  { date: "2024-03-04", conversations: 65 },
  { date: "2024-03-05", conversations: 48 },
  { date: "2024-03-06", conversations: 57 },
  { date: "2024-03-07", conversations: 43 },
];

const topicsData = [
  { name: "Technical Design", value: 35 },
  { name: "Code Review", value: 25 },
  { name: "Architecture", value: 20 },
  { name: "Best Practices", value: 15 },
  { name: "Career Advice", value: 5 },
];

const feedbackData = [
  { rating: "5 ⭐", count: 145 },
  { rating: "4 ⭐", count: 89 },
  { rating: "3 ⭐", count: 28 },
  { rating: "2 ⭐", count: 12 },
  { rating: "1 ⭐", count: 5 },
];

const COLORS = ["#68a2b3", "#3d778c", "#2c5a6b", "#1b3c4a", "#0a1e29"];

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("week");

  return (
    <main className="min-h-screen bg-[#000d20] py-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-[#68a2b3]" />
              <h1 className="text-3xl font-bold text-[#fbffff]">
                Agent Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-[#3d778c] text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button
                size="sm"
                className="bg-[#3d778c] hover:bg-[#68a2b3] text-[#fbffff]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
          <div className="h-1 w-32 bg-[#3d778c] mt-4 mb-6 rounded-full" />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              title: "Total Interactions",
              value: "2,847",
              change: "+12%",
              icon: MessageSquare,
              color: "text-[#68a2b3]",
            },
            {
              title: "Active Users",
              value: "486",
              change: "+8%",
              icon: Users,
              color: "text-[#68a2b3]",
            },
            {
              title: "Avg. Response Time",
              value: "1.2s",
              change: "-15%",
              icon: Clock,
              color: "text-[#68a2b3]",
            },
            {
              title: "Satisfaction Rate",
              value: "94%",
              change: "+3%",
              icon: Star,
              color: "text-[#68a2b3]",
            },
          ].map((metric, index) => (
            <Card
              key={index}
              className="p-6 bg-[#000d20] border-[#3d778c] hover:border-[#68a2b3] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#3d778c] mb-1">{metric.title}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-[#fbffff]">
                      {metric.value}
                    </h3>
                    <span
                      className={`text-sm ${
                        metric.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Interactions Over Time */}
          <Card className="p-6 bg-[#000d20] border-[#3d778c]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[#fbffff]">
                Interactions Over Time
              </h3>
              <div className="flex gap-2">
                {["day", "week", "month"].map((range) => (
                  <Button
                    key={range}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setTimeRange(range as "day" | "week" | "month")
                    }
                    className={`border-[#3d778c] ${
                      timeRange === range
                        ? "bg-[#3d778c] text-[#fbffff]"
                        : "text-[#3d778c] hover:bg-[#3d778c] hover:text-[#fbffff]"
                    }`}
                  >
                    {range.charAt(0).toUpperCase() + range.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={interactionsData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#3d778c"
                    opacity={0.1}
                  />
                  <XAxis dataKey="date" stroke="#3d778c" />
                  <YAxis stroke="#3d778c" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000d20",
                      border: "1px solid #3d778c",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbffff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="conversations"
                    stroke="#68a2b3"
                    strokeWidth={2}
                    dot={{ fill: "#68a2b3" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Topics Distribution */}
          <Card className="p-6 bg-[#000d20] border-[#3d778c]">
            <h3 className="text-lg font-semibold text-[#fbffff] mb-6">
              Topics Distribution
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={topicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {topicsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000d20",
                      border: "1px solid #3d778c",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbffff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* User Feedback */}
        <Card className="p-6 bg-[#000d20] border-[#3d778c] mb-8">
          <h3 className="text-lg font-semibold text-[#fbffff] mb-6">
            User Feedback Distribution
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={feedbackData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#3d778c"
                  opacity={0.1}
                />
                <XAxis dataKey="rating" stroke="#3d778c" />
                <YAxis stroke="#3d778c" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#000d20",
                    border: "1px solid #3d778c",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#fbffff" }}
                />
                <Bar dataKey="count" fill="#68a2b3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Activity & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="p-6 bg-[#000d20] border-[#3d778c]">
            <h3 className="text-lg font-semibold text-[#fbffff] mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: MessageSquare,
                  title: "New conversation started",
                  description: "User discussing system architecture patterns",
                  time: "2 minutes ago",
                },
                {
                  icon: ThumbsUp,
                  title: "Positive feedback received",
                  description:
                    "5-star rating with comment: 'Very helpful explanation!'",
                  time: "15 minutes ago",
                },
                {
                  icon: AlertCircle,
                  title: "Knowledge gap identified",
                  description:
                    "Missing information about new React 19 features",
                  time: "1 hour ago",
                },
                {
                  icon: TrendingUp,
                  title: "Performance improvement",
                  description: "Response time decreased by 20%",
                  time: "2 hours ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3d778c]/10 flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-4 h-4 text-[#68a2b3]" />
                  </div>
                  <div>
                    <p className="text-[#fbffff] font-medium">
                      {activity.title}
                    </p>
                    <p className="text-[#3d778c] text-sm">
                      {activity.description}
                    </p>
                    <p className="text-[#3d778c] text-xs mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Insights */}
          <Card className="p-6 bg-[#000d20] border-[#3d778c]">
            <h3 className="text-lg font-semibold text-[#fbffff] mb-4">
              Performance Insights
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Brain,
                  title: "Knowledge Accuracy",
                  value: "96%",
                  trend: "↑ 2% from last week",
                  color: "text-green-500",
                },
                {
                  icon: Clock,
                  title: "Response Latency",
                  value: "1.2s",
                  trend: "↓ 0.3s from last week",
                  color: "text-green-500",
                },
                {
                  icon: Users,
                  title: "User Retention",
                  value: "78%",
                  trend: "↑ 5% from last week",
                  color: "text-green-500",
                },
                {
                  icon: BarChart3,
                  title: "Learning Rate",
                  value: "High",
                  trend: "Stable performance",
                  color: "text-blue-500",
                },
              ].map((insight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3d778c]/10 flex items-center justify-center flex-shrink-0">
                    <insight.icon className="w-4 h-4 text-[#68a2b3]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[#fbffff] font-medium">
                        {insight.title}
                      </p>
                      <p className="text-[#fbffff] font-bold">
                        {insight.value}
                      </p>
                    </div>
                    <p className={`text-sm ${insight.color}`}>
                      {insight.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
