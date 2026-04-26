"use client";
import { PanelLeft, Search, TrendingDown, TrendingUp } from "lucide-react";
import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import ApplicationsView from "@/components/applications/ApplicationsView";
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

// <h1 className="text-2xl font-semibold pb-8"> Hello, Bob Smith </h1>
export function DashboardHeaderSimple() {
  return (
    <div className="flex flex-col">
      <h1 className="bg-gradient-to-br from-foreground from-30%  to-foreground/40 bg-clip-text text-xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-3xl lg:text-4xl py-6">
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

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs sm:grid-cols-2 lg:grid-cols-4 dark:*:data-[slot=card]:bg-card pb-14">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Applications</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            128
          </CardTitle>
          <CardAction></CardAction>
        </CardHeader>
        <CardFooter className="flex items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            <Badge variant="outline">
              <TrendingUp />
              12%
            </Badge>
            From last week
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Interviews</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            24
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            <Badge variant="outline">
              <TrendingUp />
              12%
            </Badge>
            From last week
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Offers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            3
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            <Badge variant="outline">
              <TrendingUp />
              12%
            </Badge>
            From last week
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            <Badge variant="outline">
              <TrendingUp />
              12%
            </Badge>
            From last week
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

const chartData = [
  {
    date: "2026-04-01",
    Applied: 222,
    Pending: 150,
    Interviewing: 180,
    Rejected: 90,
    Offered: 60,
  },
  {
    date: "2026-04-02",
    Applied: 97,
    Pending: 180,
    Interviewing: 120,
    Rejected: 70,
    Offered: 40,
  },
  {
    date: "2026-04-03",
    Applied: 167,
    Pending: 120,
    Interviewing: 140,
    Rejected: 60,
    Offered: 50,
  },
  {
    date: "2026-04-04",
    Applied: 242,
    Pending: 260,
    Interviewing: 200,
    Rejected: 110,
    Offered: 80,
  },
  {
    date: "2026-04-05",
    Applied: 373,
    Pending: 290,
    Interviewing: 250,
    Rejected: 130,
    Offered: 100,
  },
  {
    date: "2026-04-06",
    Applied: 301,
    Pending: 340,
    Interviewing: 270,
    Rejected: 120,
    Offered: 90,
  },
  {
    date: "2026-04-07",
    Applied: 245,
    Pending: 180,
    Interviewing: 190,
    Rejected: 100,
    Offered: 70,
  },
  {
    date: "2026-04-08",
    Applied: 409,
    Pending: 320,
    Interviewing: 300,
    Rejected: 150,
    Offered: 120,
  },
  {
    date: "2026-04-09",
    Applied: 59,
    Pending: 110,
    Interviewing: 90,
    Rejected: 40,
    Offered: 20,
  },
  {
    date: "2026-04-10",
    Applied: 261,
    Pending: 190,
    Interviewing: 210,
    Rejected: 100,
    Offered: 75,
  },
  {
    date: "2026-04-11",
    Applied: 327,
    Pending: 350,
    Interviewing: 280,
    Rejected: 140,
    Offered: 110,
  },
  {
    date: "2026-04-12",
    Applied: 292,
    Pending: 210,
    Interviewing: 220,
    Rejected: 110,
    Offered: 85,
  },
  {
    date: "2026-04-13",
    Applied: 342,
    Pending: 380,
    Interviewing: 300,
    Rejected: 150,
    Offered: 120,
  },
  {
    date: "2026-04-14",
    Applied: 137,
    Pending: 220,
    Interviewing: 160,
    Rejected: 80,
    Offered: 50,
  },
  {
    date: "2026-04-15",
    Applied: 120,
    Pending: 170,
    Interviewing: 150,
    Rejected: 70,
    Offered: 45,
  },
  {
    date: "2026-04-16",
    Applied: 138,
    Pending: 190,
    Interviewing: 170,
    Rejected: 85,
    Offered: 55,
  },
  {
    date: "2026-04-17",
    Applied: 446,
    Pending: 360,
    Interviewing: 320,
    Rejected: 160,
    Offered: 130,
  },
  {
    date: "2026-04-18",
    Applied: 364,
    Pending: 410,
    Interviewing: 330,
    Rejected: 170,
    Offered: 140,
  },
  {
    date: "2026-04-19",
    Applied: 243,
    Pending: 180,
    Interviewing: 200,
    Rejected: 100,
    Offered: 70,
  },
  {
    date: "2026-04-20",
    Applied: 89,
    Pending: 150,
    Interviewing: 120,
    Rejected: 60,
    Offered: 35,
  },
  {
    date: "2026-04-21",
    Applied: 137,
    Pending: 200,
    Interviewing: 180,
    Rejected: 90,
    Offered: 60,
  },
  {
    date: "2026-04-22",
    Applied: 224,
    Pending: 170,
    Interviewing: 190,
    Rejected: 95,
    Offered: 70,
  },
  {
    date: "2026-04-23",
    Applied: 138,
    Pending: 230,
    Interviewing: 200,
    Rejected: 100,
    Offered: 75,
  },
  {
    date: "2026-04-24",
    Applied: 387,
    Pending: 290,
    Interviewing: 260,
    Rejected: 130,
    Offered: 100,
  },
  {
    date: "2026-04-25",
    Applied: 215,
    Pending: 250,
    Interviewing: 220,
    Rejected: 110,
    Offered: 80,
  },
  {
    date: "2026-04-26",
    Applied: 75,
    Pending: 130,
    Interviewing: 110,
    Rejected: 50,
    Offered: 30,
  },
  {
    date: "2026-04-27",
    Applied: 383,
    Pending: 420,
    Interviewing: 340,
    Rejected: 180,
    Offered: 150,
  },
  {
    date: "2026-04-28",
    Applied: 122,
    Pending: 180,
    Interviewing: 160,
    Rejected: 80,
    Offered: 55,
  },
  {
    date: "2026-04-29",
    Applied: 315,
    Pending: 240,
    Interviewing: 230,
    Rejected: 120,
    Offered: 90,
  },
  {
    date: "2026-04-30",
    Applied: 454,
    Pending: 380,
    Interviewing: 350,
    Rejected: 190,
    Offered: 160,
  },
  {
    date: "2026-05-01",
    Applied: 165,
    Pending: 220,
    Interviewing: 180,
    Rejected: 90,
    Offered: 65,
  },
  {
    date: "2026-05-02",
    Applied: 293,
    Pending: 310,
    Interviewing: 260,
    Rejected: 140,
    Offered: 110,
  },
  {
    date: "2026-05-03",
    Applied: 247,
    Pending: 190,
    Interviewing: 210,
    Rejected: 100,
    Offered: 75,
  },
  {
    date: "2026-05-04",
    Applied: 385,
    Pending: 420,
    Interviewing: 330,
    Rejected: 170,
    Offered: 140,
  },
  {
    date: "2026-05-05",
    Applied: 481,
    Pending: 390,
    Interviewing: 360,
    Rejected: 200,
    Offered: 170,
  },
  {
    date: "2026-05-06",
    Applied: 498,
    Pending: 520,
    Interviewing: 400,
    Rejected: 220,
    Offered: 180,
  },
  {
    date: "2026-05-07",
    Applied: 388,
    Pending: 300,
    Interviewing: 290,
    Rejected: 150,
    Offered: 120,
  },
  {
    date: "2026-05-08",
    Applied: 149,
    Pending: 210,
    Interviewing: 180,
    Rejected: 90,
    Offered: 60,
  },
  {
    date: "2026-05-09",
    Applied: 227,
    Pending: 180,
    Interviewing: 190,
    Rejected: 95,
    Offered: 70,
  },
  {
    date: "2026-05-10",
    Applied: 293,
    Pending: 330,
    Interviewing: 260,
    Rejected: 140,
    Offered: 110,
  },
];

const chartConfig = {
  applied: {
    label: "Applied",
    color: "var(--chart-1)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-2)",
  },
  interviewing: {
    label: "Interviewing",
    color: "var(--chart-3)",
  },
  rejected: {
    label: "Rejected",
    color: "var(--chart-4)",
  },
  offered: {
    label: "Offered",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2026-05-10");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  // 	let finalCharData = []
  // 	Object.values(ApplicationStatus).map((status) => {
  // 		let countCurrStatus = filteredData.filter((el) => el.status === status)
  // 		finalCharData = [...finalCharData, {[status]: countCurrStatus.length}]
  // 	})

  return (
    <Card className="pt-0 mb-14">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Application Journey</CardTitle>
          <CardDescription>
            Showing activity for the last {timeRange}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillApplied" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-applied)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-applied)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillPending" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pending)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pending)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillInterviewing" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-interviewing)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-interviewing)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillRejected" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-rejected)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-rejected)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillOffered" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-offered)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-offered)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Applied"
              type="natural"
              fill="url(#fillApplied)"
              stroke="var(--color-applied)"
              stackId="a"
            />
            <Area
              dataKey="Pending"
              type="natural"
              fill="url(#fillPending)"
              stroke="var(--color-pending)"
              stackId="a"
            />

            <Area
              dataKey="Interviewing"
              type="natural"
              fill="url(#fillInterviewing)"
              stroke="var(--color-interviewing)"
              stackId="a"
            />

            <Area
              dataKey="Rejected"
              type="natural"
              fill="url(#fillRejected)"
              stroke="var(--color-rejected)"
              stackId="a"
            />

            <Area
              dataKey="Offered"
              type="natural"
              fill="url(#fillOffered)"
              stroke="var(--color-offered)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <>
      {/* <DashboardHeader /> */}
      <DashboardHeaderSimple />
      <DashboardCards />
      <ChartAreaInteractive />
      <ApplicationsView />
    </>
  );
}
