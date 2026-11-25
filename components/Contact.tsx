import { PhotoBand } from "@/components/PhotoBand";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/content";

export function Contact() {
  return (
    <PhotoBand id="contact" src={contact.backdrop}>
      <Reveal className="glass on-glass w-full max-w-[640px] px-6 py-8 md:px-10 md:py-12">
        <h2 className="display text-[2.75rem] leading-none md:text-[3.75rem]">
          {contact.headline}
        </h2>
        <ul className="mt-8 space-y-3 text-[17px] leading-[1.5]">
          <li>
            <a className="link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </li>
          {contact.links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
          <li>{contact.location}</li>
        </ul>
      </Reveal>
    </PhotoBand>
  );
}
