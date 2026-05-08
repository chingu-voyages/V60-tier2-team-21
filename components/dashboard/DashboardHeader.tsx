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

      <div className="flex justify-between items-center border-b pb-4">
        <h3 className="text-base font-semibold"> Dashboard </h3>

        <Button variant="secondary">
          <Search />
          <span className="text-muted-foreground"> search applications </span>
        </Button>
      </div>
    </header>
  );
}
