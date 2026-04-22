"use client";

import { Calendar, MapIcon, PenTool, X } from "lucide-react";
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
import { INITIAL_APPLICATIONS } from "@/store/applications/data";
import type { ApplicationStatus } from "@/store/applications/types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const tableColumns = ["Company", "Role", "Date", "Location", "Status", "Notes"];
const applications = Object.values(INITIAL_APPLICATIONS);

const getStatusVariant = (status: ApplicationStatus) => {
  switch (status) {
    case "Applied":
    case "Pending":
      return "green";
    case "Rejected":
      return "red";
    case "Offered":
      return "yellow";
    case "Interviewing":
      return "purple";
    default:
      return "default";
  }
};
const ApplicationsView = () => {
  const [openNote, setOpenNote] = useState<null | string>(null);

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
                  {application.date}
                </TableCell>

                <TableCell className="px-2.5 py-4">
                  {application.location}
                </TableCell>

                <TableCell className="px-2.5 py-4">
                  <Badge
                    variant={getStatusVariant(application.status)}
                    className="w-full"
                  >
                    {application.status}
                  </Badge>
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
                        <p className="p-3">{application.notes}</p>
                        <Button
                          variant="ghost"
                          type="button"
                          onClick={() => setOpenNote(null)}
                          className="absolute top-3 right-3"
                        >
                          <X className="size-4 ml-3 mb-3 cursor-pointer" />
                        </Button>
                      </Card>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => setOpenNote(application.id)}
                    className="cursor-pointer"
                  >
                    ...
                  </Button>
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
                  <div className="w-auto">
                    <Badge variant={getStatusVariant(application.status)}>
                      {application.status}
                    </Badge>
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
                          {application.date}
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
