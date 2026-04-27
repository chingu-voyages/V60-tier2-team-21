"use client";

import { CalendarIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { INITIAL_APPLICATIONS } from "@/store/applications/data";
import type { Application } from "@/store/applications/types";

// import ApplicationsView from "./applications/ApplicationsView";

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
  const [date, setDate] = useState<DateRange>({
    from: new Date(sortedApplications[sortedApplications.length - 1].date),
    to: new Date(sortedApplications[0].date),
  });

  const statuses = Object.keys(Status) as statusType[]; //filter_static
  const filteredApplication = sortedApplications
    .filter((apl) => Status[apl.status] === true)
    .filter((apl) => Role[apl.role] === true)
    .filter((apl) => Loc[apl.location] === true)
    .filter((apl) =>
      date.from && date.to
        ? new Date(apl.date) >= date.from && new Date(apl.date) <= date.to
        : true,
    );

  const clearFilter = () => {
    setStatus({
      Applied: true,
      Pending: true,
      Rejected: true,
      Offered: true,
      Interviewing: true,
    });
    setRole(Object.fromEntries(roles.map((role) => [role, true])));
    setLoc(Object.fromEntries(locations.map((loc) => [loc, true])));
    setDate({
      from: new Date(sortedApplications[sortedApplications.length - 1].date),
      to: new Date(sortedApplications[0].date),
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-5">
        <div className="w-full grid grid-cols-2 md:flex md:gap-5 gap-2.5">
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
          {/* filter based on Date */}
          <Field>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker-range"
                  className="md:max-w-25 flex justify-between px-2.5 font-medium"
                >
                  <div className="flex gap-2">
                    <CalendarIcon />
                    Date
                  </div>
                  <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={(selected) => selected && setDate(selected)}
                  numberOfMonths={2}
                  required={false}
                />
              </PopoverContent>
            </Popover>
          </Field>
        </div>
        {/* clear filter */}
        <Button onClick={() => clearFilter()}>Clear Filter</Button>
      </div>
      {/* <ApplicationsView applicationsList={filteredApplication} /> */}
    </div>
  );
};

export default FilterSection;
