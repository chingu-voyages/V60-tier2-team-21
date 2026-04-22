import Link from "next/link";
import Application from "@/components/applications/Application";

const ApplicationPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <>
      <Application id={id} />
      <Link href="/applications" className="underline">
        All Applications
      </Link>
    </>
  );
};

export default ApplicationPage;
