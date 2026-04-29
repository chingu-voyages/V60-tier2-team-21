import { TrendingDown, TrendingUp } from "lucide-react";

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

export default function DashboardCard({
  title,
  value,
  trendPercentage,
  trendDirection,
  trendLabel,
}) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
        <CardAction></CardAction>
      </CardHeader>
      <CardFooter className="flex items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
          <Badge variant="outline">
            {trendDirection === "up" ? <TrendingUp /> : <TrendingDown />}
            {trendPercentage}%
          </Badge>
          {trendLabel}
        </div>
      </CardFooter>
    </Card>
  );
}
