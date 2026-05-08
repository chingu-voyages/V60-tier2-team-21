"use client";

import { cva } from "class-variance-authority";
import { CloudCheck, ShieldX, Snowflake, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import { ApplicationStatus } from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

export default function Analytics() {
  const { applications } = useApplicationsStore();
  const applicationsList = Object.values(applications);

  const applicationsData = Object.values(applicationsList).reduce(
    (acc, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    },
    {} as Record<ApplicationStatus, number>,
  );

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    useApplicationsStore.persist.rehydrate();
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section className="flex flex-col gap-6 lg:gap-12 mb-5 lg:mb-2">
      <AnalyticsHeader />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <ApplicationFunnel applicationsData={applicationsData} />
          <StatusDistribution applicationsData={applicationsData} />
        </div>

        <PercentageCards applicationsData={applicationsData} />
      </div>
    </section>
  );
}

const ApplicationFunnel = ({
  applicationsData,
}: {
  applicationsData: Record<ApplicationStatus, number>;
}) => {
  const funnelBars = [
    {
      status: ApplicationStatus.Applied,
      count: applicationsData[ApplicationStatus.Applied] || 0,
      className:
        "text-[#243552] bg-[#DBE3F5] dark:text-[#DBE3F5] dark:bg-[#243552] blue:text-[#002E6A] blue:bg-[#ADC6FF]",
    },
    {
      status: ApplicationStatus.Interview,
      count: applicationsData[ApplicationStatus.Interview] || 0,
      className:
        "text-[#1E3A6F] bg-[#D6E2FB] dark:text-[#D6E2FB] dark:bg-[#1E3A6F] blue:text-[#D6E3FF] blue:bg-[#4D8EFF99]",
    },
    {
      status: ApplicationStatus.Offered,
      count: applicationsData[ApplicationStatus.Offered] || 0,
      className:
        "text-[#0F5C2A] bg-[#D4EFD9] dark:text-[#D4EFD9] dark:bg-[#0F5C2A] blue:text-[#C2C6D6] blue:bg-[#243552]",
    },
  ];

  const counts = funnelBars.map((bar) => bar.count).sort((a, b) => a - b);

  const minCount = counts[0];
  const maxCount = counts[counts.length - 1];

  return (
    <div className="rounded-xl bg-background px-4 py-5 md:px-8 md:py-11 border flex-2/3">
      <h2 className="font-bold text-xl pb-4 text-foreground">
        Application Funnel
      </h2>

      <div className="grid gap-4">
        {funnelBars.map((bar) => {
          return (
            <div
              key={bar.status}
              className={`px-4 py-3 md:px-6 md:py-5 flex justify-between items-center rounded-lg  m-auto min-w-56 ${bar.className} ${maxCount === bar.count ? "w-full" : minCount === bar.count ? "w-1/3" : "w-1/2"}`}
            >
              <p className="font-bold text-base">{bar.status}</p>
              <p className="font-extrabold text-2xl">{bar.count || "0"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const distributionDotVariants = cva("rounded-full w-3 h-3 inline-block", {
  variants: {
    variant: {
      [ApplicationStatus.Applied]:
        "bg-[#DBE3F5] dark:bg-[#243552] blue:bg-[#ADC6FF]",
      [ApplicationStatus.Pending]:
        "bg-[#FFF0C7] dark:bg-[#7A5600] blue:bg-[#FFD66B]",
      [ApplicationStatus.Interview]:
        "bg-[#D6E2FB] dark:bg-[#1E3A6F] blue:bg-[#4D8EFF]",
      [ApplicationStatus.Offered]:
        "bg-[#D4EFD9] dark:bg-[#0F5C2A] blue:bg-[#C2C6D6]",
      [ApplicationStatus.Rejected]:
        "bg-[#FCD6D3] dark:bg-[#7A0000] blue:bg-[#FF8A80]",
    },
  },
});

const StatusDistributionDot = ({ variant }: { variant: ApplicationStatus }) => {
  return <span className={distributionDotVariants({ variant })}></span>;
};

const StatusDistribution = ({
  applicationsData,
}: {
  applicationsData: Record<ApplicationStatus, number>;
}) => {
  return (
    <div className="rounded-xl bg-background px-4 py-5 md:px-8 md:py-11 border border-border flex-1/3">
      <h3 className="pb-6 md:pb-8 font-bold text-foreground uppercase text-sm">
        Status Distribution
      </h3>
      <div className="grid gap-3">
        {Object.values(ApplicationStatus).map((status) => {
          return (
            <div
              key={`distribution-${status}`}
              className="flex items-center justify-between text-foreground"
            >
              <span className="flex gap-2 items-center">
                <StatusDistributionDot variant={status} />
                <span>{status}</span>
              </span>

              <span className="font-medium">
                {applicationsData[status] || "0"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CARDS = [
  {
    title: "Applied → Interview",
    activeBarClass: "bg-[#3B82F6] dark:bg-[#60A5FA] blue:bg-[#ADC6FF]",
    IconComponent: Snowflake,
    iconClass: "text-[#3B82F6] dark:text-[#60A5FA] blue:text-[#ADC6FF]",
  },
  {
    title: "Interview → Rejected",
    activeBarClass: "bg-[#F97316] dark:bg-[#FB923C] blue:bg-[#FFB786]",
    IconComponent: ShieldX,
    iconClass: "text-[#F97316] dark:text-[#FB923C] blue:text-[#FFB786]",
  },
  {
    title: "Interview → Offer",
    activeBarClass: "bg-[#93C5FD] dark:bg-[#BFDBFE] blue:bg-[#D6E3FF]",
    IconComponent: CloudCheck,
    iconClass: "text-[#93C5FD] dark:text-[#BFDBFE] blue:text-[#D6E3FF]",
  },
  {
    title: "Applied → Offer",
    activeBarClass: "bg-[#2563EB] dark:bg-[#3B82F6] blue:bg-[#4D8EFF]",
    IconComponent: Sparkles,
    iconClass: "text-[#2563EB] dark:text-[#3B82F6] blue:text-[#4D8EFF]",
  },
];

const PercentageCards = ({
  applicationsData,
}: {
  applicationsData: Record<ApplicationStatus, number>;
}) => {
  const applied = applicationsData[ApplicationStatus.Applied] || 0;
  const interview = applicationsData[ApplicationStatus.Interview] || 0;
  const rejected = applicationsData[ApplicationStatus.Rejected] || 0;
  const offered = applicationsData[ApplicationStatus.Offered] || 0;

  const totalApplied = applied + interview + rejected + offered;
  const totalInterviewed = interview + offered;

  const pct = (num: number, den: number) =>
    den === 0 ? 0 : Math.round((num / den) * 1000) / 10;

  const rates = [
    pct(totalInterviewed, totalApplied),
    pct(rejected, totalInterviewed),
    pct(offered, totalInterviewed),
    pct(offered, totalApplied),
  ];

  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {CARDS.map(({ IconComponent, ...card }, i) => {
        const rate = rates[i];
        return (
          <div
            key={card.title}
            className="bg-background text-foreground border border-border flex-1 gap-4 p-4 md:p-6 rounded-xl space-y-4"
          >
            <div className="bg-[#E5E7EB] dark:bg-[#374151] blue:bg-[#243552] rounded-sm w-10 h-10 flex justify-center items-center">
              <IconComponent className={`${card.iconClass}`} />
            </div>

            <p className="uppercase font-semibold text-sm text-foreground">
              {card.title}
            </p>
            <p className="text-2xl font-extrabold text-foreground">{rate}%</p>

            <div className="w-full h-1 rounded-full bg-[#E5E7EB] dark:bg-[#374151] blue:bg-[#243552]">
              <div
                className={`${card.activeBarClass} h-1 rounded-full`}
                style={{ width: `${rate}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
