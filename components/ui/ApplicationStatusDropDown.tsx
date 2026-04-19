"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ApplicationsStatus } from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

interface Props {
  applicationId: string;
}

const STATUS_STYLES: Record<ApplicationsStatus, string> = {
  [ApplicationsStatus.Applied]:
    "bg-status-applied text-status-applied-foreground",
  [ApplicationsStatus.Pending]:
    "bg-status-pending text-status-pending-foreground",
  [ApplicationsStatus.Interviewing]:
    "bg-status-interviewing text-status-interviewing-foreground",
  [ApplicationsStatus.Rejected]:
    "bg-status-rejected text-status-rejected-foreground",
  [ApplicationsStatus.Offered]:
    "bg-status-offered text-status-offered-foreground",
};

export function ApplicationStatusDropDown({ applicationId }: Props) {
  const { applications, updateApplication } = useApplicationsStore(
    (state) => state,
  );

  const application = applications[applicationId];

  const handleStatusChange = (value: ApplicationsStatus) => {
    updateApplication(applicationId, { status: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className={`p-0 font-semibold uppercase text-xs px-3 rounded-full cursor-pointer h-auto py-1 ${STATUS_STYLES[application.status]}`}
        >
          <span className="rounded-full w-1.5 h-1.5 inline-block bg-current"></span>
          {application.status}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 bg-status-dropdown text-status-dropdown-foreground">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-status-dropdown-title-foreground">
            Change Status
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={application.status}
            onValueChange={(value) =>
              handleStatusChange(value as ApplicationsStatus)
            }
          >
            {Object.values(ApplicationsStatus).map((status) => {
              return (
                <DropdownMenuRadioItem
                  value={status}
                  key={status}
                  className="cursor-pointer font-medium uppercase text-xs"
                >
                  {status}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
