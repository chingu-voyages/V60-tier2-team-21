import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Application from "@/components/applications/Application";
import { Button } from "@/components/ui/button";

const ApplicationPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <>
      <Link
        href="/applications"
        className="mb-8 text-muted-foreground flex items-center gap-2 text-sm"
      >
        <ChevronLeft className="size-4" />
        Applications
      </Link>
      <Application id={id} />
    </>
  );
};

export default ApplicationPage;
