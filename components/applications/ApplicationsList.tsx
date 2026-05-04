"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ApplicationStatusDropDown } from "@/components/ui/ApplicationStatusDropDown";
import { Button } from "@/components/ui/button";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

const ApplicationsList = () => {
  const applications = useApplicationsStore((state) => state.applications);

  if (!applications || Object.values(applications).length <= 0) {
    // TODO: improve this
    return (
      <div className="flex flex-col items-center pt-40">
        <p className="text-foreground pb-2"> Not found</p>
        <Link href="/dashboard">
          <Button variant="outline" className="text-muted-foreground">
            <ArrowLeft className="size-4" />
            Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section>
      <ul>
        {Object.values(applications).map((app) => {
          return (
            <li key={app.id} className="cursor-pointer">
              <Link href={`/applications/${app.id}`} className="py-4 block">
                <p>{app.role}</p>
                <p>{app.companyName}</p>
              </Link>

              <ApplicationStatusDropDown applicationId={app.id} />
              <hr />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ApplicationsList;
