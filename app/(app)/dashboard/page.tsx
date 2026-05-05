import { Search } from "lucide-react";
import FilterSection from "@/components/FilterSection";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <h1 className="bg-gradient-to-br from-foreground from-30%  to-foreground/40 bg-clip-text text-xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-3xl lg:text-4xl py-6">
        Dashboard
      </h1>

      <div className="flex justify-between">
        <p className="hidden sm:block max-w-sm text-lg/7 font-medium text-muted-foreground mb-6">
          Welcome back, Curator. Your career trajectory is looking optimal.
        </p>

        <p className="sm:hidden max-w-sm text-lg/7 font-medium text-muted-foreground mb-6">
          Track your job search progress.
        </p>

        <div className="hidden sm:block relative">
          <Search className="absolute top-3.25 left-2" />
          <Input
            type="text"
            placeholder="search applications"
            className=" w-[250px] py-6 pl-12"
          />
        </div>
      </div>

      <FilterSection />
    </div>
  );
}
