import SectionHeader from "@/components/ui/section-header";
export default function SectionBento() {
  return (
    <section id="features" className="pb-24 sm:pb-40 text-center relative">
      {/* <div  */}
      {/* 	className="h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] absolute top-0 -left-4 md:-left-14" */}
      {/* > </div> */}

      <SectionHeader
        title="Everything you need. Nothing you don't."
        description="A focused set of tools designed for a focused job search."
      />

      <div className="grid grid-cols-2 grid-rows-2 border h-screen">
        <div className="w-full h-full border-b">
          <div className="bg-blue-400 h-3/4"></div>

          <div className="text-left p-6">
            <h4 className="text-lg tracking-tighter font-semibold">
              {" "}
              Track Every Application{" "}
            </h4>
            <p className="text-muted-foreground">
              {" "}
              Log companies, roles, dates, and locations in one clean workspace.
              never lose track of where you applied.
            </p>
          </div>
        </div>
        <div className="w-full h-full border-l border-b">
          <div className="bg-cyan-400 h-3/4"></div>

          <div className="text-left p-6">
            <h4 className="text-lg tracking-tighter font-semibold">
              Conversion Analytics
            </h4>
            <p className="text-muted-foreground">
              See your applied, interview, offer funnel at a glance. Unrestand
              what's working and what isn't.
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="bg-purple-400 h-3/4"></div>

          <div className="text-left p-6">
            <h4 className="text-lg tracking-tighter font-semibold">
              Response Time Insights
            </h4>
            <p className="text-muted-foreground">
              Track how long companies take to respond and spot patterns across
              your job search.
            </p>
          </div>
        </div>

        <div className="w-full h-full border-l">
          <div className="bg-red-400 h-3/4"></div>

          <div className="text-left p-6">
            <h4 className="text-lg tracking-tighter font-semibold">
              Status Managent
            </h4>
            <p className="text-muted-foreground">
              Keep every application organized with clear status badges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
