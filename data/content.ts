export const site = {
  name: "Abril Linares Mendoza",
  year: "2026",
  repository: "https://github.com/adlm6/abril-linares-mendoza",
} as const;

export const hero = {
  eyebrow: "Yale University · Computer Science and Economics · 2028",
  name: "Abril Linares Mendoza",
  line: "I build tools that take the drag out of real operations.",
  support:
    "Enterprise systems at the Pittsburgh Pirates. A repair desk for 10,000 Yale students. Genomics at UPMC Hillman.",
  workLabel: "Selected work",
  photosLabel: "Photographs",
} as const;

export const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/photos", label: "Photos" },
  { href: "/#contact", label: "Contact" },
] as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  kicker: string;
  stack: string;
  body: string;
  image: string;
  objectPosition: string;
  links: readonly ProjectLink[];
};

export const work = {
  label: "Selected work",
  title:
    "Two products about access, and the kind of internal tool I built for a baseball club.",
  projects: [
    {
      title: "Mariachi Juvenil",
      kicker: "Anthropic Claude Builder Hackathon, winner",
      stack: "JavaScript, React, Gemini API, Claude Code",
      body: "Youth music programs are hard to find and harder to afford. This React platform connects students with lower-cost instruction, built with Gemini and Claude.",
      image: "/photos/graduation.jpg",
      objectPosition: "center 62%",
      links: [],
    },
    {
      title: "meetHaven",
      kicker: "Campus discovery",
      stack: "React, Node.js, Figma",
      body: "A campus app for finding events and student organizations. Prototyped in Figma against Nielsen's heuristics, then built so the right room is not a scavenger hunt.",
      image: "/photos/courtyard-fountain.jpg",
      objectPosition: "center 55%",
      links: [],
    },
    {
      title: "Payroll demo",
      kicker: "Pittsburgh Pirates",
      stack: "TypeScript",
      body: "A public demo of the internal tooling from the enterprise systems internship.",
      image: "/photos/thermal-terraces.jpg",
      objectPosition: "center",
      links: [
        {
          label: "Repository",
          href: "https://github.com/adlm6/demo-payroll-app",
        },
        {
          label: "Live demo",
          href: "https://adlm6.github.io/demo-payroll-app/",
        },
      ],
    },
  ] satisfies readonly Project[],
} as const;

export type Role = {
  org: string;
  role: string;
  when: string;
  body: string;
};

export const experience = {
  label: "Experience",
  title: "Find the bottleneck, measure it, ship the tool.",
  roles: [
    {
      org: "Pittsburgh Pirates",
      role: "Enterprise Systems Intern",
      when: "May 2026 to August 2026, Pittsburgh",
      body: "Built internal tools with OpenAI Codex and the MLB API to cut cross-department admin. With Business Intelligence, modeled the return on AI workflow automation so leadership could decide where to spend.",
    },
    {
      org: "Student Technology Collaborative",
      role: "Lead Coordinator and Technician",
      when: "October 2025 to present, Yale University",
      body: "Supervise a queue of 6+ technicians and a free repair pipeline for a campus of 10,000+ students. One-to-one diagnosis on hardware and software, aimed at queue time and resolution rate.",
    },
    {
      org: "Curious Cardinals",
      role: "Product Management Mentor",
      when: "July 2026 to present, remote",
      body: "Guide student founders from product strategy to a working MVP, using Claude, OpenAI, and fast prototyping.",
    },
    {
      org: "Women and Gender Minorities in CS",
      role: "President",
      when: "September 2024 to present, New Haven",
      body: "Direct a 15-person executive team for 200+ members. Weekly notes to 700+ subscribers, plus programs that widen who gets into technical rooms.",
    },
    {
      org: "UPMC Hillman Cancer Center",
      role: "Biomedical Informatics Researcher",
      when: "May 2023 to November 2023, University of Pittsburgh",
      body: "Ran differential gene expression and survival analysis in R across patient cohorts. Presented the methods at the American Medical Informatics Association Symposium.",
    },
  ] satisfies readonly Role[],
} as const;

export const resume: { label: string; href: string | null } = {
  label: "Full resume",
  href: null,
};

export const about = {
  label: "About",
  headline: "Two majors, three languages, and a habit of making the thing.",
  paragraphs: [
    "I'm Abril, a Yale student in computer science and economics, graduating in 2028. The coursework runs from systems and human-computer interaction to econometrics, plus product management in the age of AI. I studied intensive Mandarin and business at Donghua University in Shanghai.",
    "I speak Spanish and English fluently, and Mandarin at an intermediate level. I'm a Yale Ogilvie Technology Scholar and a National Aspirations in Computing awardee.",
    "The photographs on this site are mine.",
  ],
  skills:
    "Python, C, Java, C#, JavaScript, React, Node.js, R, HTML/CSS. Git, REST APIs, UNIX, Unity, Figma.",
  backdrop: "/photos/clock-tower.jpg",
} as const;

export const photographs = {
  label: "Photographs",
  title: "A room for the pictures.",
  body: "Filter by what you came to see. The photo behind the opening changes each time you visit.",
  filterLabel: "Filter the photographs",
} as const;

export const contact = {
  headline: "Say hello.",
  email: "adlinares6@gmail.com",
  location: "Pittsburgh and New Haven",
  backdrop: "/photos/red-lanterns.jpg",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abril-linares-mendoza-a8b287258",
    },
    {
      label: "GitHub",
      href: "https://github.com/adlm6",
    },
  ],
} as const;
