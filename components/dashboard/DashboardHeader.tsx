import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <header className="flex-col flex">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-xl font-medium leading-none tracking-tight pb-12">
          Good afteroon, Bob.
        </h1>
      </div>

      <h3 className="text-base font-semibold border-b pb-4"> Dashboard </h3>
    </header>
  );
}
