import ApplicationsHeader from "@/components/applications/ApplicationsHeader";
import FilterSection from "@/components/FilterSection";

const ApplicationsPage = () => {
  return (
    <section className="flex flex-col gap-4 lg:gap-12 mb-5 lg:mb-2">
      <ApplicationsHeader />
      <FilterSection />
    </section>
  );
};

export default ApplicationsPage;
