import ApplicationsHeader from "@/components/applications/ApplicationsHeader";
import ApplicationsView from "@/components/applications/ApplicationsView";

const ApplicationsPage = () => {
  return (
    <section className="flex flex-col gap-4 lg:gap-12 mb-5 lg:mb-2">
      <ApplicationsHeader />
      <ApplicationsView />
    </section>
  );
};

export default ApplicationsPage;
