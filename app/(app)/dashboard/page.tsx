import DashboardCardOverview from "@/components/dashboard/DashboardCardOverview";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-6 lg:gap-12 mb-5 lg:mb-2">
      <DashboardHeader />
      <DashboardCardOverview />
      <DashboardChart />
    </section>
  );
}
