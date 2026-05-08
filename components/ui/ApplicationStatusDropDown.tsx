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
import { ApplicationStatus } from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

interface Props {
  applicationId: string;
}

export function ApplicationStatusDropDown({ applicationId }: Props) {
  const { applications, updateApplication } = useApplicationsStore(
    (state) => state,
  );

  const application = applications[applicationId];

  if (!application) return null;

  const handleStatusChange = (value: ApplicationStatus) => {
    updateApplication(applicationId, { status: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={application.status.toLowerCase() as "default"}
          className="p-0 uppercase text-[11px] px-2 py-0.5 rounded-full cursor-pointer h-auto"
        >
          <span className="rounded-full w-1.5 h-1.5 inline-block bg-current"></span>
          {application.status}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Change Status</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={application.status}
            onValueChange={(value) =>
              handleStatusChange(value as ApplicationStatus)
            }
          >
            {Object.values(ApplicationStatus).map((status) => {
              return (
                <DropdownMenuRadioItem
                  value={status}
                  key={status}
                  className="cursor-pointer font-medium uppercase text-xs"
                >
                  {status}

                  {/* <Badge className="rounded-full w-1.5 h-1.5 inline-block bg-current" variant={status.toLowerCase()}/> */}
                  {/* <span className="rounded-full w-1.5 h-1.5 inline-block bg-current"></span> */}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
