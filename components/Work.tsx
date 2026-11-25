import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { work, type Project } from "@/data/content";

type WorkProps = {
  variant?: "home" | "page";
};

function ProjectMedia({
  project,
  wide,
}: {
  project: Project;
  wide: boolean;
}) {
  if (!project.image) {
    return (
      <div className="glass flex h-[420px] items-end px-8 py-8">
        <p className="display text-balance text-[2rem] leading-tight text-ink">
          {project.kicker}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-[#e6e1d9]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={
          wide ? "(min-width: 768px) 1120px, 100vw" : "(min-width: 768px) 540px, 100vw"
        }
        className="object-cover"
        style={{ objectPosition: project.imagePosition ?? "center" }}
      />
    </div>
  );
}

export function Work({ variant = "home" }: WorkProps) {
  const projects = variant === "home" ? work.projects.slice(0, 1) : work.projects;
  const shell =
    variant === "page"
      ? "bg-paper px-4 pb-[72px] pt-32 md:px-6 md:pb-[120px] md:pt-36"
      : "bg-paper px-4 py-[72px] md:px-6 md:py-[120px]";

  return (
    <section className={shell}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeading
          eyebrow={work.label}
          title={work.title}
          as={variant === "page" ? "h1" : "h2"}
        />
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-[72px] md:grid-cols-2 md:gap-y-[72px]">
          {projects.map((project, index) => {
            const span = projects.length % 2 === 1 && index === projects.length - 1;
            return (
              <article key={project.title} className={span ? "md:col-span-2" : undefined}>
                <ProjectMedia project={project} wide={span} />
                <div className="mt-4 max-w-2xl">
                  <p className="eyebrow">{project.kicker}</p>
                  <h3 className="display mt-3 text-[2rem] leading-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.5] text-pretty text-ink">
                    {project.body}
                  </p>
                  <p className="mt-4 text-[15px] leading-snug text-muted">{project.stack}</p>
                  {project.links.length > 0 ? (
                    <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          className="link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        {variant === "home" ? (
          <p className="mt-10 md:mt-16">
            <Link className="btn btn-ink" href="/work">
              {work.moreLabel}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
