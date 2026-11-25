import { SectionHeading } from "@/components/SectionHeading";
import { experience, resume } from "@/data/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 bg-paper py-[72px] md:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <SectionHeading eyebrow={experience.label} title={experience.title} />
        <div className="mt-10 border-b border-ink/15 md:mt-[72px]">
          {experience.roles.map((role) => (
            <article key={`${role.org}-${role.role}`} className="border-t border-ink/15 py-10">
              <div className="md:grid md:grid-cols-[minmax(0,1fr)_16rem] md:gap-x-10">
                <p className="eyebrow md:col-start-1">{role.org}</p>
                <h3 className="display mt-3 text-[1.75rem] leading-tight text-ink md:col-start-1 md:text-[2rem]">
                  {role.role}
                </h3>
                <p className="mt-2 text-[15px] leading-snug text-muted md:col-start-2 md:row-start-1 md:row-span-2 md:mt-0 md:text-right">
                  {role.when}
                </p>
              </div>
              <p className="mt-6 max-w-[68ch] text-[17px] leading-[1.5] text-pretty text-ink">
                {role.body}
              </p>
            </article>
          ))}
        </div>
        {resume.href ? (
          <a className="link mt-10 inline-block" href={resume.href}>
            {resume.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
