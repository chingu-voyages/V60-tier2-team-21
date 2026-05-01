import DashboardCard from "@/components/DashboardCard";
import { dashboardDataCards } from "@/lib/data";

export default function DashboardCardOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs sm:grid-cols-2 xl:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {dashboardDataCards.map((card) => (
        <DashboardCard
          title={card.title}
          value={card.value}
          trendPercentage={card.trendPercentage}
          trendDirection={card.trendDirection}
          trendLabel={card.trendLabel}
          key={card.title}
        />
      ))}
    </div>
  );
}
