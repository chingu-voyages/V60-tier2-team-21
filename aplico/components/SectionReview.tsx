import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
const topMarquee = [
  {
    review:
      "I've tried so many apps to stay organized while job hunting, but this one actually works. *It keeps everything in one place and makes the process way less stressful.* I finally feel in control.",
    name: "Emma Wilson",
    description: "Recent graduate",
  },
  {
    review:
      "Job searching used to feel overwhelming, especially tracking applications across different sites. *This app makes it super simple and even kind of enjoyable.* I actually look forward to updating it.",
    name: "Daniel Brooks",
    description: "Career switcher",
  },
  {
    review:
      "I love how clean and intuitive everything is. *I can see all my applications, interviews, and notes at a glance.* It saves me so much time every day.",
    name: "Sofia Martinez",
    description: "Marketing assistant",
  },
  {
    review:
      "Before using this, I constantly forgot where I applied. *Now I feel organized and confident going into every interview.* It's honestly a game changer.",
    name: "Liam Carter",
    description: "Job seeker",
  },
  {
    review:
      "What surprised me the most is how motivating it is. *Seeing my progress laid out visually keeps me going even on tough days.* I wish I had this sooner.",
    name: "Ava Thompson",
    description: "University student",
  },
  {
    review:
      "Simple, effective, and exactly what I needed. *No clutter, no confusion—just a clear way to track my job search.* Highly recommended.",
    name: "Noah Bennett",
    description: "Freelancer",
  },
];

export default function SectionReview() {
  return (
    <section id="review" className="pb-24 sm:pb-40">
      <SectionHeader
        title="Hear from our beautiful users"
        description="Thousands of user trust Aplico daily. See how it change your job search"
      />

      <div className="group relative py-10 flex max-h-screen flex-col gap-4 overflow-hidden p-2 sm:flex-row">
        {Array.from({ length: 2 }, (_, ix) => (
          <ul
            className="group-hover:[animation-play-state:paused] animate-marquee flex shrink-0 min-w-full flex-col gap-[var(--gap-marquee)] overflow-hidden sm:flex-row animate-marquee-y sm:animate-marquee-x"
            key={ix}
          >
            {topMarquee.map(({ review, name, description }, idx) => {
              let rgxForSplit = /^(.+)\*(.*)\*(.*)$/gm;
              let allText = [...review.matchAll(rgxForSplit)];
              const textSplitted = allText[0];

              return (
                <li
                  className="bg-background w-fit rounded-xl p-4 flex flex-col justify-between"
                  key={idx}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400" />
                        <div className="flex flex-col">
                          <h3 className="text-foreground/90 font-medium">
                            {name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {" "}
                            {description}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90 max-w-96 pb-6 leading-relaxed font-normal select-none">
                        {textSplitted[1]}
                        <span className="text-accent-foreground font-medium">
                          {textSplitted[2]}
                        </span>
                        {textSplitted[3]}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        ))}

        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20% sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20% sm:inset-y-0 sm:right-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-l sm:left-auto" />
      </div>
    </section>
  );
}
