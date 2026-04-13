import Link from "next/link";
import Application from "@/components/applications/Application";

const ApplicationPage = async ({ params }: { params: { id: string } }) => {
  const routeParams = await params;

  return (
    <>
      <Application id={routeParams.id} />
      <Link href="/applications" className="underline">
        All Applications
      </Link>
    </>
  );
};

export default ApplicationPage;
