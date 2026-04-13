"use client";

import SectionHeader from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
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
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import { Button } from "@/components/ui/button";

import { Building2, Calendar, Map, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  Cell,
  LabelList,
} from "recharts";

import BlurFade from "@/components/ui/blur-fade";

export default function SectionBento() {
  return (
    <section id="features" className="pb-24 sm:pb-40 text-center relative">

      <SectionHeader
        title="Everything you need. Nothing you don't."
        description="A focused set of tools designed for a focused job search."
      />
			

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 border">
        <div className="w-full h-full border-b grid lg:grid-rows-[1fr_125px]">
          <div className="flex-1 p-4 sm:p-8">
            <BentoApplication />
          </div>

          <div className="text-left p-6 border-t">
            <h4 className="text-lg tracking-tighter font-semibold">
              Track Every Application
            </h4>
            <p className="text-muted-foreground">
              Log companies, roles, dates, and locations in one clean workspace.
              never lose track of where you applied.
            </p>
          </div>
        </div>

        <div className="w-full h-full border-l border-b grid lg:grid-rows-[1fr_125px]">
          <div className=" p-4 sm:p-8 flex justify-center items-center">
            <div className="w-full">
              <ChartAreaLegend />
            </div>
          </div>

          <div className="text-left p-6 border-t">
            <h4 className="text-lg tracking-tighter font-semibold">
              Conversion Analytics
            </h4>
            <p className="text-muted-foreground">
              See your applied, interview, offer funnel at a glance. Unrestand
              what's working and what isn't.
            </p>
          </div>
        </div>

        <div className="w-full h-full grid lg:grid-rows-[1fr_125px]">
          <div className="p-4 sm:p-8 flex justify-center items-center">
            <div className="w-full">
              <ChartBarNegative />
            </div>
          </div>

          <div className="text-left p-6 border-t">
            <h4 className="text-lg tracking-tighter font-semibold">
              Response Time Insights
            </h4>
            <p className="text-muted-foreground">
              Track how long companies take to respond and spot patterns across
              your job search.
            </p>
          </div>
        </div>

        <div className="w-full h-full sm:border-l grid lg:grid-rows-[1fr_125px]">
          <div className="h-full p-4 sm:p-8 overflow-hidden border-t sm:border-t-0">
            <BentoStatus />
          </div>

          <div className="text-left p-6 border-t">
            <h4 className="text-lg tracking-tighter font-semibold">
              Status Managent
            </h4>
            <p className="text-muted-foreground">
              Keep every application organized with clear status badges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const chartTrackData = [
  { month: "January", applied: 186, interview: 80, offer: 10 },
  { month: "February", applied: 305, interview: 200, offer: 73 },
  { month: "March", applied: 237, interview: 120, offer: 93 },
  { month: "April", applied: 73, interview: 20, offer: 3 },
  { month: "May", applied: 209, interview: 130, offer: 8 },
  { month: "June", applied: 214, interview: 140, offer: 13 },
];

const chartTrackConfig = {
  applied: {
    label: "applied",
    color: "var(--chart-1)",
  },
  interview: {
    label: "interview",
    color: "var(--chart-2)",
  },
  offer: {
    label: "Offer",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartAreaLegend() {
  return (
    <ChartContainer config={chartTrackConfig}>
      <AreaChart
        accessibilityLayer
        data={chartTrackData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Area
          dataKey="interview"
          type="natural"
          fill="var(--color-interview)"
          fillOpacity={0.4}
          stroke="var(--color-interview)"
          stackId="a"
        />
        <Area
          dataKey="applied"
          type="natural"
          fill="var(--color-applied)"
          fillOpacity={0.4}
          stroke="var(--color-applied)"
          stackId="a"
        />
        <Area
          dataKey="offer"
          type="natural"
          fill="var(--color-offer)"
          fillOpacity={0.4}
          stroke="var(--color-offer)"
          stackId="a"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
}

export function BentoApplication() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-start">
          <h3 className="font-semibold text-lg">Google</h3>

          <p className="text-muted-foreground font-medium mb-2">
            Software developer
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Map className="size-4" />
                Switwerland
              </span>

              <span className="flex items-center gap-1">
                <Building2 className="size-4" />
                Tech
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="size-4" />
                {/* {format(new Date(application.applicationDate), "MMM d, yyyy")} */}
                20, Jan 2026
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline"> See more details </Button>
      </CardFooter>
    </Card>
  );
}
export function BentoStatus() {
  return (
    <>
      <div className="border rounded-2xl text-left p-4 bg-background -translate-y-2 translate-x-2 flex justify-between gap-4">
        <Badge variant="green">Applied</Badge>

        <div className="w-full bg-muted rounded-xl" />
      </div>

      <div className="border rounded-2xl text-left p-4 -translate-y-4 translate-x-4 bg-background flex justify-between gap-4">
        <Badge variant="red">Rejected</Badge>

        <div className="w-full bg-muted rounded-xl" />
      </div>

      <div className="border rounded-2xl text-left p-4 -translate-y-6 translate-x-6 bg-background flex justify-between gap-4">
        <Badge variant="yellow">Offer</Badge>
        <div className="w-full bg-muted rounded-xl" />
      </div>

      <div className="border rounded-2xl text-left p-4 -translate-y-8 translate-x-8 bg-background flex justify-between gap-4">
        <Badge variant="blue">Test case</Badge>
        <div className="w-full bg-muted rounded-xl" />
      </div>

      <div className="border rounded-2xl text-left p-4 -translate-y-10 translate-x-10 bg-background flex justify-between gap-4">
        <Badge variant="sky">HR Interview</Badge>
        <div className="w-full bg-muted rounded-xl" />
      </div>

      <div className="border rounded-2xl text-left p-4 -translate-y-12 translate-x-12 bg-background flex justify-between gap-4">
        <Badge variant="purple">Managment Interview</Badge>
        <div className="w-full bg-muted rounded-xl" />
      </div>
    </>
  );
}

const chartTimeData = [
  { days: "<1 day", response: 186 },
  { days: "1-3 day", response: 205 },
  { days: "4-7 day", response: -207 },
  { days: "1-2 weeks", response: 173 },
  { days: "2-4 weeks", response: -209 },
  { days: "4 weeks", response: 214 },
];

const chartTimeConfig = {
  visitors: {
    label: "response",
  },
} satisfies ChartConfig;

export function ChartBarNegative() {
  return (
    <ChartContainer config={chartTimeConfig}>
      <BarChart accessibilityLayer data={chartTimeData}>
        <CartesianGrid vertical={false} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel hideIndicator />}
        />
        <Bar dataKey="response">
          <LabelList position="top" dataKey="days" fillOpacity={1} />
          {chartTimeData.map((item) => (
            <Cell
              key={item.days}
              fill={item.response > 0 ? "var(--chart-1)" : "var(--chart-2)"}
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
