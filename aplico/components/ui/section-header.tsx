import {cn} from "@/lib/utils";
import type {SectionHeaderProps} from "@/lib/types";

export default function SectionHeader({ title, description, cnTitle, cnDescription }: SectionHeaderProps) {
  return (
    <header className="text-center">
      <h3 className={cn("text-5xl font-medium leading-none tracking-tighter sm:text-6xl text-balance pb-6", cnTitle)}>
        {title}
      </h3>

      <p className={cn("mx-auto max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-muted-foreground pb-12", cnDescription)}>
        {description}
      </p>
    </header>
  );
}
