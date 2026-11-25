import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  as = "h2",
  children,
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <Tag className="display mt-4 text-balance text-[2.25rem] leading-[1.12] text-ink md:text-[3.25rem]">
        {title}
      </Tag>
      {children ? (
        <div className="mt-6 max-w-[62ch] text-[17px] leading-[1.5] text-pretty text-ink">
          {children}
        </div>
      ) : null}
    </div>
  );
}
