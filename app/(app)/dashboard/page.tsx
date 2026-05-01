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
    <header className="flex-col flex">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium leading-none tracking-tighter sm:text-4xl pt-6 pb-12">
          Good afteroon, Bob.
        </h1>
      </div>

      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-base font-semibold"> Dashboard </h3>

        <Button variant="secondary">
          <Search />
          <span className="text-muted-foreground"> search applications </span>
        </Button>
      </div>
    </header>
  );
}

// export function DashboardHeader() {
//   return (
//     <header className="flex [--header-height:80px] h-(--header-height) items-center gap-2 border-b transition-[width,height] ease-linear pb-8">
//       <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 ">
//         <PanelLeft />
//         <div className="h-6 w-px bg-muted" />
//         <p className="text-base font-medium">Documents</p>
//
//         <div className="flex items-center gap-2 ml-auto">
//           <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400" />
//           <div className="flex flex-col">
//             <h3 className="text-foreground/90 font-medium">Bob Smith</h3>
//             <p className="text-sm text-muted-foreground">Founder</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-12">
      <DashboardHeaderSimple />
      <DashboardCardOverview />
      <DashboardChart />
      <DashboardCardProfile />
      {/* <ApplicationsView /> */}
    </div>
  );
}
