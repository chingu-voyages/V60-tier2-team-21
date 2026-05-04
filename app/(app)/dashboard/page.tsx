import DashboardCardOverview from "@/components/dashboard/DashboardCardOverview";
import DashboardCardProfile from "@/components/dashboard/DashboardCardProfile";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-12">
      <DashboardHeader />
      <DashboardCardOverview />
      <DashboardChart />
    </section>
  );
}
