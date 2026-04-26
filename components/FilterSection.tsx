"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { INITIAL_APPLICATIONS } from "@/store/applications/data";
import type { Application } from "@/store/applications/types";
import ApplicationsView from "./applications/ApplicationsView";

type statusType =
  | "Applied"
  | "Pending"
  | "Rejected"
  | "Offered"
  | "Interviewing";
const applications: Application[] = Object.values(INITIAL_APPLICATIONS);

const FilterSection = () => {
  const [Status, setStatus] = useState<Record<statusType, boolean>>({
    Applied: true,
    Pending: true,
    Rejected: true,
    Offered: true,
    Interviewing: true,
  });

  const statuses = Object.keys(Status) as statusType[];
  const filteredApplication = applications.filter(
    (apl) => Status[apl.status] === true,
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex justify-between">
              Status
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuGroup>
              {statuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={Status[status]}
                  onCheckedChange={(checked) =>
                    setStatus({ ...Status, [status]: checked === true })
                  }
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ApplicationsView applications={filteredApplication} />
    </div>
  );
};

export default FilterSection;
