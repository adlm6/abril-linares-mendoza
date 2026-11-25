import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { work } from "@/data/content";
import { findPhoto } from "@/data/photos";

export function Work() {
  return (
    <section id="work" className="scroll-mt-28 bg-paper py-[72px] md:py-[120px]">
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <SectionHeading eyebrow={work.label} title={work.title} />
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-[72px] md:grid-cols-2 md:gap-y-[72px]">
          {work.projects.map((project, index) => {
            const image = findPhoto(project.image);
            const span =
              work.projects.length % 2 === 1 && index === work.projects.length - 1;
            return (
              <article key={project.title} className={span ? "md:col-span-2" : undefined}>
                <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-[#e6e1d9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      span
                        ? "(min-width: 768px) 1120px, 100vw"
                        : "(min-width: 768px) 540px, 100vw"
                    }
                    className="object-cover"
                    style={{ objectPosition: project.objectPosition }}
                  />
                </div>
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
      </div>
    </section>
  );
}
