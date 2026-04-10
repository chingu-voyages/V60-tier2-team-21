import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-24 sm:pb-40 text-center">
      <h1 className="bg-gradient-to-br  from-foreground from-30%  to-foreground/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl py-6">
        The private vault for your professional legacy
      </h1>

      <p className="mx-auto max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-muted-foreground mb-12">
        Move beyond the clutter of generic job boards. Curate your career
        applications withing a high-fidelity workspace deisnged for editorial
        precision.
      </p>

      <div className="flex gap-4 justify-center items-center mb-10">
        <Button variant="default" size="lg">
          Go to dashboard
        </Button>

        <Button variant="outline" size="lg">
          View Demo
        </Button>
      </div>

      <div className="rounded-2xl w-full aspect-video bg-background shadow-xl px-6 border">
        {" "}
      </div>
    </section>
  );
}
