import Link from "next/link";
import { PolaroidStack } from "@/components/PolaroidStack";
import { SectionHeading } from "@/components/SectionHeading";
import { experience, experiencePhotos, resume, type Role } from "@/data/content";

type ExperienceProps = {
  variant?: "home" | "page";
};

function Timeline({ roles }: { roles: readonly Role[] }) {
  return (
    <ol className="relative m-0 list-none border-l border-accent/55 pl-8">
      {roles.map((role) => (
        <li key={`${role.org}-${role.role}`} className="relative pb-12 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[37px] size-2.5 rounded-full bg-accent ring-4 ring-paper"
          />
          <p className="text-[15px] leading-snug text-muted">{role.when}</p>
          <h3 className="display mt-2 text-[1.7rem] leading-tight text-ink">{role.role}</h3>
          <p className="mt-1 text-[17px] font-medium leading-snug text-accent">{role.org}</p>
          <p className="mt-2 max-w-[62ch] text-[17px] leading-[1.5] text-pretty text-ink">
            {role.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Experience({ variant = "home" }: ExperienceProps) {
  const roles = variant === "home" ? experience.roles.slice(0, 2) : experience.roles;
  const shell =
    variant === "page"
      ? "bg-paper px-4 pb-[72px] pt-32 md:px-6 md:pb-[120px] md:pt-36"
      : "bg-paper px-4 py-[72px] md:px-6 md:py-[120px]";
  const showPrints = variant === "page" && experiencePhotos.length > 0;

  return (
    <section className={shell}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeading
          eyebrow={experience.label}
          title={experience.title}
          as={variant === "page" ? "h1" : "h2"}
        />
        <div
          className={
            showPrints
              ? "mt-10 grid items-start gap-16 md:mt-[72px] md:grid-cols-[minmax(0,1fr)_240px] md:gap-12"
              : "mt-10 md:mt-[72px]"
          }
        >
          <Timeline roles={roles} />
          {showPrints ? (
            <div className="md:sticky md:top-32">
              <PolaroidStack photos={experiencePhotos} />
            </div>
          ) : null}
        </div>
        {variant === "home" ? (
          <p className="mt-10">
            <Link className="btn btn-ink" href="/experience">
              {experience.moreLabel}
            </Link>
          </p>
        ) : (
          <p className="mt-12">
            <a className="btn btn-ink" href={resume.href} target="_blank" rel="noreferrer">
              {resume.label}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
