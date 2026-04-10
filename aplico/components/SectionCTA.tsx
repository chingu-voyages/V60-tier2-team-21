import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SectionCTA() {
  return (
    <section id="cta" className="pb-24 sm:pb-40 text-center">
      <SectionHeader
        title="Start tracking today."
        description="Your next hob is out there. Let's make sure you don't miss a single opportunity."
      />
      <Button variant="default" size="lg">
        Get started <ArrowRight className="size-4" />
      </Button>
    </section>
  );
}
