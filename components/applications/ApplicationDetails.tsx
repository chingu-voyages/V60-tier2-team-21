"use client";

import {
  ArrowLeft,
  Calendar,
  Hash,
  Map as MapIcon,
  Pencil,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

const ApplicationDetails = ({ id }: { id: string }) => {
  const application = useApplicationsStore((state) => state.applications[id]);

  if (!application) {
    // TODO: improve this
    return (
      <div className="flex flex-col items-center pt-40">
        <p className="text-foreground pb-2"> Not found</p>
        <Link href="/applications">
          <Button variant="outline" className="text-muted-foreground">
            <ArrowLeft className="size-4" />
            Applications
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl font-semibold">
              {application.companyName}
            </h1>
            <Badge variant={application.status.toLowerCase()}>
              <p>{application.status}</p>
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground font-medium pb-3">
            {application.role}
          </p>
        </div>

        <div className="flex gap-2 sm:gap-4 pb-12 sm:pb-0">
          <Button variant="outline">
            <Pencil className="size-4" />
            Edit
          </Button>
          <Button variant="destructive">
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </header>

      <div className="flex flex-wrap gap-x-10 gap-y-4 items-center pb-12 text-base">
        <div className="flex gap-3 items-center">
          <MapIcon className="size-4  text-muted-foreground" />
          <span className="text-sm sm:text-base">{application.location}</span>
        </div>

        <div className="flex gap-3 items-center">
          <Hash className="size-4 text-muted-foreground" />
          <span className="text-sm sm:text-base">{application.id}</span>
        </div>

        <div className="flex gap-3 items-center">
          <Calendar className="size-4 text-muted-foreground" />
          <span className="text-sm sm:text-base">
            {new Intl.DateTimeFormat(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(new Date(application.date))}
          </span>
        </div>
      </div>

      <Card className="max-w-(--breakpoint-xl)">
        <CardHeader>
          <CardTitle className="text-lg">Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap text-sm">{application.notes}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationDetails;
