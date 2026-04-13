"use client";

import Link from "next/link";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

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
                <p>{app.company}</p>
                <p>{app.status}</p>
              </Link>
              <hr />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ApplicationsList;
