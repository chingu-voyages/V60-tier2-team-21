import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

export default function SectionCTA() {
  return (
    <section
      id="cta"
      className="pb-24 sm:pb-40 text-center max-w-(--breakpoint-xl) mx-auto"
    >
      <div className="px-2 py-8 sm:p-10 flex flex-col justify-center items-center rounded-xl">
        <SectionHeader
          title="Start tracking today."
          description="Your next job is out there. Let's make sure you don't miss a single opportunity."
        />
        <Button variant="default" size="lg">
          <Link
            href="/applications"
            className="flex justify-center items-center gap-1"
          >
            Get started <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
