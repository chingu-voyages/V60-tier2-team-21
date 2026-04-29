"use client";
import { PanelLeft, Search, TrendingDown, TrendingUp } from "lucide-react";
import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  XAxis,
} from "recharts";
import ApplicationsView from "@/components/applications/ApplicationsView";
import DashboardCardOverview from "@/components/DashboardCardOverview";
import DashboardCardProfile from "@/components/DashboardCardProfile";
import DashboardChart from "@/components/DashboardChart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ApplicationStatus } from "@/store/applications/types";

export function DashboardHeaderSimple() {
  return (
    <div className="flex flex-col">
      <h1 className="bg-gradient-to-br from-foreground from-30%  to-foreground/40 bg-clip-text text-xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-3xl lg:text-4xl py-8">
        Dashboard
      </h1>

      <div className="flex justify-between">
        <p className="hidden sm:block max-w-sm text-lg/7 font-medium text-muted-foreground mb-6">
          Welcome back, Curator. Your career trajectory is looking optimal.
        </p>

        <p className="sm:hidden max-w-sm text-lg/7 font-medium text-muted-foreground mb-6">
          Track your job search progress.
        </p>

        <div className="hidden sm:block relative">
          <Search className="absolute top-3.25 left-2" />
          <Input
            type="text"
            placeholder="search applications"
            className=" w-[250px] py-6 pl-12"
          />
        </div>
      </div>
    </div>
  );
}

export function DashboardHeader() {
  return (
    <header className="flex [--header-height:80px] h-(--header-height) items-center gap-2 border-b transition-[width,height] ease-linear pb-8">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 ">
        <PanelLeft />
        <div className="h-6 w-px bg-muted" />
        <p className="text-base font-medium">Documents</p>

        <div className="flex items-center gap-2 ml-auto">
          <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400" />
          <div className="flex flex-col">
            <h3 className="text-foreground/90 font-medium">Bob Smith</h3>
            <p className="text-sm text-muted-foreground">Founder</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardHeaderSimple />
      <DashboardCardOverview />
      <ApplicationsView />
      <DashboardChart />
      <DashboardCardProfile />
    </>
  );
}
