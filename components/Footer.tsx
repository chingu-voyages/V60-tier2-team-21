import Link from "next/link";
import PlaceholderLogo from "@/components/PlaceholderLogo";
import { navigationLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="pb-24 sm:pb-40 border-t pt-10 max-w-(--breakpoint-xl) mx-auto px-2 sm:px-4 md:px-10"
    >
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-y-0 justify-between items-start">
        <Link href="/">
          <PlaceholderLogo className="text-foreground" />
        </Link>

        <p className="max-w-(--breakpoint-sm) text-lg/7 font-medium text-muted-foreground">
          Move beyond the clutter of generic job boards. Curate your career
          applications withing a high-fidelity workspace deisnged for editorial
          precision.
        </p>

        <div>
          <h4 className="font-semibold pb-4 text-foreground"> Navigation </h4>
          <ul className="flex flex-col gap-y-2">
            {navigationLink.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-base text-foreground">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
