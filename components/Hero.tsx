import { Rocket } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-24 sm:pb-40 text-center">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card justify-center w-fit mx-auto shadow-badge">
          <Rocket className="size-4" />
          <span className="text-sm font-medium text-foreground">
            Now in private alpha
          </span>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="bg-gradient-to-br from-foreground from-30%  to-foreground/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl py-6">
          The private vault for your professional legacy
        </h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <p className="mx-auto max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-muted-foreground mb-12">
          Move beyond the clutter of generic job boards. Curate your career
          applications withing a high-fidelity workspace deisnged for editorial
          precision.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="flex gap-4 justify-center items-center mb-10">
          <Button size="lg">Go to dashboard</Button>

          <Button variant="outline" size="lg">
            View Demo
          </Button>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="rounded-2xl w-full aspect-video bg-background border p-4 bg-ring/20 ">
          <div className="rounded-xl w-full h-full bg-background"> </div>
        </div>
      </BlurFade>
    </section>
  );
}
