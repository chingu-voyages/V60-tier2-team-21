import type { SectionHeaderProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  title,
  description,
  cnTitle,
  cnDescription,
}: SectionHeaderProps) {
  return (
    <header className="text-center">
      <h3
        className={cn(
          "text-4xl font-medium leading-none tracking-tighter md:text-7xl pb-6 text-balance",
          cnTitle,
        )}
      >
        {title}
      </h3>

      {description && (
        <p
          className={cn(
            "mx-auto max-w-(--breakpoint-md) text-lg/7 font-medium text-muted-foreground pb-12",
            cnDescription,
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
