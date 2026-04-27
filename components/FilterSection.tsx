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
const sortedApplications = Object.values(applications).sort((a, b) =>
  b.date.localeCompare(a.date),
);
const roles = [...new Set(applications.map((application) => application.role))]; //filter_dynamic
const locations = [
  ...new Set(applications.map((application) => application.location)),
]; //filter_dynamic

const FilterSection = () => {
  const [Status, setStatus] = useState<Record<statusType, boolean>>({
    Applied: true,
    Pending: true,
    Rejected: true,
    Offered: true,
    Interviewing: true,
  });
  const [Role, setRole] = useState<Record<string, boolean>>(
    Object.fromEntries(roles.map((role) => [role, true])),
  );
  const [Loc, setLoc] = useState<Record<string, boolean>>(
    Object.fromEntries(locations.map((loc) => [loc, true])),
  );

  const statuses = Object.keys(Status) as statusType[]; //filter_stable
  const filteredApplication = sortedApplications
    .filter((apl) => Status[apl.status] === true)
    .filter((apl) => Role[apl.role] === true)
    .filter((apl) => Loc[apl.location] === true);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between">
        {/* filter based on Status */}
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
        {/* filter based on Role */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex justify-between">
              Role
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuGroup>
              {roles.map((role) => (
                <DropdownMenuCheckboxItem
                  key={role}
                  checked={Role[role]}
                  onCheckedChange={(checked) =>
                    setRole({ ...Role, [role]: checked === true })
                  }
                >
                  {role}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* filter based on Location */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex justify-between">
              Location
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuGroup>
              {locations.map((loc) => (
                <DropdownMenuCheckboxItem
                  key={loc}
                  checked={Loc[loc]}
                  onCheckedChange={(checked) =>
                    setLoc({ ...Loc, [loc]: checked === true })
                  }
                >
                  {loc}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ApplicationsView applicationsList={filteredApplication} />
    </div>
  );
};

export default FilterSection;
