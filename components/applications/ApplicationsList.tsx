"use client";

import Link from "next/link";
import useApplicationsStore from "@/store/applications/useApplicationsStore";
import { ApplicationStatusDropDown } from "../ui/ApplicationStatusDropDown";

const ApplicationsList = () => {
  const applications = useApplicationsStore((state) => state.applications);

  return (
    <section>
      <ul>
        {Object.values(applications).map((app) => {
          return (
            <li key={app.id} className="cursor-pointer">
              <Link href={`/application/${app.id}`} className="py-4 block">
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
