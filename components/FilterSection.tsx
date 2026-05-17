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
import useApplicationsStore from "@/store/applications/useApplicationsStore";
import ApplicationsView from "./applications/ApplicationsView";

type StatusType = "Applied" | "Pending" | "Rejected" | "Offered" | "Interview";

const defaultStatus: Record<StatusType, boolean> = {
  Applied: true,
  Pending: true,
  Rejected: true,
  Offered: true,
  Interview: true,
};

const FilterSection = () => {
  const applications = useApplicationsStore((state) => state.applications);

  const sortedApplications = [...applications].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  const roles = [
    ...new Set(applications.map((application) => application.role)),
  ];

  const locations = [
    ...new Set(applications.map((application) => application.location)),
  ];

  const [status, setStatus] =
    useState<Record<StatusType, boolean>>(defaultStatus);

  const [role, setRole] = useState<Record<string, boolean>>({});
  const [loc, setLoc] = useState<Record<string, boolean>>({});
  const [date, setDate] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const statuses = Object.keys(status) as StatusType[];

  const filteredApplication = sortedApplications
    .filter((application) => status[application.status])
    .filter((application) => role[application.role] !== false)
    .filter((application) => loc[application.location] !== false)
    .filter((application) =>
      date.from && date.to
        ? new Date(application.date) >= date.from &&
          new Date(application.date) <= date.to
        : true,
    );

  const clearFilter = () => {
    setStatus(defaultStatus);
    setRole({});
    setLoc({});
    setDate({
      from: undefined,
      to: undefined,
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
                {statuses.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={status[option]}
                    onCheckedChange={(checked) =>
                      setStatus((prev) => ({
                        ...prev,
                        [option]: checked === true,
                      }))
                    }
                  >
                    {option}
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
                {roles.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={role[option] !== false}
                    onCheckedChange={(checked) =>
                      setRole((prev) => ({
                        ...prev,
                        [option]: checked === true,
                      }))
                    }
                  >
                    {option}
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
                {locations.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={loc[option] !== false}
                    onCheckedChange={(checked) =>
                      setLoc((prev) => ({
                        ...prev,
                        [option]: checked === true,
                      }))
                    }
                  >
                    {option}
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

              <PopoverContent className="w-full p-1" align="start">
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

      <ApplicationsView applicationsList={filteredApplication} />
    </div>
  );
};

export default FilterSection;
