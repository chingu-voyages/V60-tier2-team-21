"use client";

import {
  type Application,
  ApplicationStatus,
} from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

export default function Dashboard() {
  const { applications } = useApplicationsStore();
  const applicationsList = Object.values(applications);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <ApplicationFunnel applications={applicationsList} />
        <StatusDistribution applications={applicationsList} />
      </div>
    </div>
  );
}

const ApplicationFunnel = ({
  applications,
}: {
  applications: Application[];
}) => {
  const applicationFunnelsCount = Object.values(applications).reduce(
    (acc, curr) => {
      if (acc[curr.status] !== undefined) {
        acc[curr.status] += 1;
      }

      return acc;
    },
    {
      [ApplicationStatus.Applied]: 0,
      [ApplicationStatus.Interviewing]: 0,
      [ApplicationStatus.Offered]: 0,
    } as Record<ApplicationStatus, number>,
  );

  const funnelBars = [
    {
      status: ApplicationStatus.Applied,
      count: applicationFunnelsCount[ApplicationStatus.Applied],
      className:
        "text-[#243552] bg-[#DBE3F5] dark:text-[#DBE3F5] dark:bg-[#243552] blue:text-[#002E6A] blue:bg-[#ADC6FF]",
    },
    {
      status: ApplicationStatus.Interviewing,
      count: applicationFunnelsCount[ApplicationStatus.Interviewing],
      className:
        "text-[#1E3A6F] bg-[#D6E2FB] dark:text-[#D6E2FB] dark:bg-[#1E3A6F] blue:text-[#D6E3FF] blue:bg-[#4D8EFF99]",
    },
    {
      status: ApplicationStatus.Offered,
      count: applicationFunnelsCount[ApplicationStatus.Offered],
      className:
        "text-[#0F5C2A] bg-[#D4EFD9] dark:text-[#D4EFD9] dark:bg-[#0F5C2A] blue:text-[#C2C6D6] blue:bg-[#243552]",
    },
  ];

  return (
    <div className="rounded-xl bg-background px-4 py-5 md:px-8 md:py-11 border flex-1">
      <h2 className="font-bold text-xl pb-4 text-foreground">
        Application Funnel
      </h2>

      <div className="grid gap-4">
        {funnelBars.map((bar) => {
          return (
            <div
              key={bar.status}
              className={`px-4 py-3 md:px-6 md:py-5 flex justify-between rounded-lg  min-w-56 ${bar.className}`}
            >
              <p className="font-bold text-base">{bar.status}</p>
              <p className="font-extrabold text-2xl">{bar.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const statusDotClass: Record<ApplicationStatus, string> = {
  [ApplicationStatus.Applied]:
    "bg-[#DBE3F5] dark:bg-[#243552] blue:bg-[#ADC6FF]",
  [ApplicationStatus.Pending]:
    "bg-[#FFF0C7] dark:bg-[#7A5600] blue:bg-[#FFD66B]",
  [ApplicationStatus.Interviewing]:
    "bg-[#D6E2FB] dark:bg-[#1E3A6F] blue:bg-[#4D8EFF]",
  [ApplicationStatus.Rejected]:
    "bg-[#FCD6D3] dark:bg-[#7A0000] blue:bg-[#FF8A80]",
  [ApplicationStatus.Offered]:
    "bg-[#D4EFD9] dark:bg-[#0F5C2A] blue:bg-[#C2C6D6]",
};

const StatusDistribution = ({
  applications,
}: {
  applications: Application[];
}) => {
  const applicationFunnelsCount = Object.values(applications).reduce(
    (acc, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    },
    {} as Record<ApplicationStatus, number>,
  );

  return (
    <div className="rounded-xl bg-background px-4 py-5 md:px-8 md:py-11 border border-border flex-1">
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
                <span
                  className={`rounded-full w-3 h-3 inline-block ${statusDotClass[status]}`}
                />
                <span>{status}</span>
              </span>

              <span className="font-medium">
                {applicationFunnelsCount[status] || "0"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
