"use client";

import { Calendar, MapIcon, PenTool } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export interface JobApplication {
  id: number;
  companyName: string;
  role: string;
  dateApplied: string;
  location: string;
  status: ApplicationStatus;
  notes?: string;
}

export const applications: JobApplication[] = [
  {
    id: 1,
    companyName: "Google",
    role: "Frontend Developer",
    dateApplied: "2026-03-12",
    location: "Mountain View, CA",
    status: "Interview",
    notes: "Completed HR screening, waiting for technical interview.",
  },
  {
    id: 2,
    companyName: "Amazon",
    role: "UI Engineer",
    dateApplied: "2026-03-08",
    location: "Seattle, WA",
    status: "Applied",
    notes: "Applied via careers page, no response yet.",
  },
  {
    id: 3,
    companyName: "Microsoft",
    role: "Software Engineer",
    dateApplied: "2026-03-05",
    location: "Redmond, WA",
    status: "Rejected",
    notes: "Rejected after resume screening.",
  },
  {
    id: 4,
    companyName: "Meta",
    role: "Frontend Developer",
    dateApplied: "2026-03-15",
    location: "Menlo Park, CA",
    status: "Offer",
    notes: "Offer received, reviewing compensation package.",
  },
  {
    id: 5,
    companyName: "Apple",
    role: "Web Developer",
    dateApplied: "2026-03-10",
    location: "Cupertino, CA",
    status: "Interview",
    notes: "Technical interview scheduled next week.",
  },
  {
    id: 6,
    companyName: "Netflix",
    role: "React Developer",
    dateApplied: "2026-03-18",
    location: "Los Gatos, CA",
    status: "Applied",
    notes: "Application submitted via referral.",
  },
  {
    id: 7,
    companyName: "Tesla",
    role: "Frontend Engineer",
    dateApplied: "2026-03-02",
    location: "Austin, TX",
    status: "Rejected",
    notes: "Rejected after first interview.",
  },
  {
    id: 8,
    companyName: "Airbnb",
    role: "Junior Frontend Developer",
    dateApplied: "2026-03-20",
    location: "San Francisco, CA",
    status: "Applied",
    notes: "Waiting for recruiter response.",
  },
  {
    id: 9,
    companyName: "Stripe",
    role: "Web Engineer",
    dateApplied: "2026-03-14",
    location: "San Francisco, CA",
    status: "Interview",
    notes: "Completed coding challenge.",
  },
  {
    id: 10,
    companyName: "Uber",
    role: "Frontend Developer",
    dateApplied: "2026-03-11",
    location: "San Francisco, CA",
    status: "Offer",
    notes: "Offer received, negotiating salary.",
  },
];

const tableColumns = ["Company", "Role", "Date", "Location", "Status", "Notes"];

const getStatusStyles = (status: ApplicationStatus) => {
  switch (status) {
    case "Applied":
      return "border-blue-500/20 bg-blue-500/10 text-blue-600";
    case "Interview":
      return "border-purple-500/20 bg-purple-500/10 text-purple-600";
    case "Offer":
      return "border-green-500/20 bg-green-500/10 text-green-600";
    case "Rejected":
      return "border-red-500/20 bg-red-500/10 text-red-600";
    default:
      return "border-border bg-muted text-muted-foreground";
  }
};

const ApplicationsView = () => {
  const [openNote, setOpenNote] = useState<null | number>(null);

  return (
    <>
      {/* larger screens=> table */}
      <div className="rounded-xl md:border border-border bg-card overflow-hidden">
        <Table className="hidden md:block w-full">
          <TableHeader>
            <TableRow className="bg-muted/70 hover:bg-muted/70 cursor-default">
              {tableColumns.map((col) => (
                <TableHead
                  key={col}
                  className={cn(
                    "py-4 text-sm font-medium text-muted-foreground",
                    col === "Company"
                      ? "pl-5"
                      : col === "Notes"
                        ? "pr-5"
                        : "px-2.5",
                  )}
                >
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {applications.map((application) => (
              <TableRow
                key={application.id}
                className="text-muted-foreground transition-colors hover:bg-muted/70 cursor-default"
              >
                <TableCell className="py-4 pl-5 font-medium text-foreground">
                  {application.companyName}
                </TableCell>

                <TableCell className="px-2.5 py-4">
                  {application.role}
                </TableCell>

                <TableCell className="px-2.5 py-4">
                  {application.dateApplied}
                </TableCell>

                <TableCell className="px-2.5 py-4">
                  {application.location}
                </TableCell>

                <TableCell className="px-2.5 py-4">
                  <p
                    className={cn(
                      "flex justify-center rounded-full border px-2.5 py-1 text-xs font-medium",
                      getStatusStyles(application.status),
                    )}
                  >
                    {application.status}
                  </p>
                </TableCell>

                <TableCell className="relative flex justify-center items-center pr-5 py-4 text-lg font-medium">
                  {openNote === application.id && (
                    <div>
                      <button
                        type="button"
                        className="fixed inset-0"
                        onClick={() => setOpenNote(null)}
                      ></button>
                      <Card className="absolute bg-foreground/85 w-60 h-30 top-0 right-0 z-10 text-accent/90 p-3 text-wrap">
                        <p>{application.notes}</p>
                        <button
                          type="button"
                          onClick={() => setOpenNote(null)}
                          className="absolute right-3 top-1 cursor-pointer"
                        >
                          x
                        </button>
                      </Card>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setOpenNote(application.id)}
                    className="cursor-pointer"
                  >
                    ...
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* smaller screens=> cards */}
      <div className="md:hidden">
        <ul className="p-8">
          {applications.map((application) => (
            <li key={application.id}>
              <Card className="mb-2.5">
                <CardHeader className="flex justify-between">
                  <CardTitle className="flex flex-col items-start">
                    <h3 className="font-semibold text-lg mb-0.85">
                      {application.companyName}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-2">
                      {application.role}
                    </p>
                  </CardTitle>
                  <div className="w-1/3 ">
                    <p
                      className={cn(
                        "w-full flex justify-center rounded-full border px-2.5 py-1 text-xs font-medium",
                        getStatusStyles(application.status),
                      )}
                    >
                      {application.status}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-4 pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap justify-between items-center text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapIcon className="size-4" />
                          {application.location}
                        </span>

                        <span className="flex items-center gap-1 pl-4">
                          <Calendar className="size-4" />
                          {application.dateApplied}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="w-full flex font-lighter text-foreground/90 gap-1.5">
                    <PenTool className="size-4 shrink-0 mt-0.5" />
                    {application.notes}
                  </p>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApplicationsView;
