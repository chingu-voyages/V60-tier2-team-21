import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

export default function SectionCTA() {
  return (
    <section
      id="cta"
      className="pb-24 sm:pb-40 text-center text-primary-foreground max-w-(--breakpoint-xl) mx-auto"
    >
      <div className="px-2 py-8 sm:p-10 flex flex-col justify-center items-center bg-primary rounded-xl shadow-xl ">
        <SectionHeader
          title="Start tracking today."
          description="Your next hob is out there. Let's make sure you don't miss a single opportunity."
          cnDescription="blue:text-black/60"
        />
        <Button variant="secondary" size="lg">
          Get started <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
