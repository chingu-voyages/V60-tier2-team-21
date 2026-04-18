"use client";

import useApplicationsStore from "@/store/applications/useApplicationsStore";

const Application = ({ id }: { id: string }) => {
  const application = useApplicationsStore((state) => state.applications[id]);

  if (!application) return <p>Application Not Found</p>;

  return (
    <div>
      <p>{application.id}</p>
      <p>{application.role}</p>
      <p>{application.company}</p>
      <p>{application.status}</p>
    </div>
  );
};

export default Application;
