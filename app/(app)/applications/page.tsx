import ApplicationsHeader from "@/components/applications/ApplicationsHeader";
import ApplicationsView from "@/components/applications/ApplicationsView";

const ApplicationsPage = () => {
  return (
    <section className="flex flex-col gap-12">
      <ApplicationsHeader />
      <ApplicationsView />
    </section>
  );
};

export default ApplicationsPage;
