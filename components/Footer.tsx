import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex w-full max-w-[1120px] items-center gap-4 px-4 py-10 md:px-6">
        <Link href="/" aria-label={site.name} className="text-ink">
          <Logo />
        </Link>
        <p className="text-[15px] text-muted">{site.year}</p>
      </div>
    </footer>
  );
}
