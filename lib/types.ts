export interface SectionHeaderProps {
  title: string;
  description?: string;
  cnTitle?: string;
  cnDescription?: string;
}

export interface DashboardDataCards {
  title: string;
  value: number;
  trendPercentage: number;
  trendDirection: "up" | "down";
  trendLabel: string;
}
