export const site = {
  name: "Abril Linares Mendoza",
  year: "2026",
  repository: "https://github.com/adlm6/abril-linares-mendoza",
} as const;

export const hero = {
  eyebrow: "Yale University · Computer Science and Economics · 2028",
  name: "Abril Linares Mendoza",
  line: "Engineer, economist, game designer, photographer, and musician.",
  support:
    "A third-year Yale student with 2+ years of internship experience. I'm passionate about combining art and computer science, and I love exploring the economics of it all!",
  photosLabel: "Photographs",
} as const;

export const navigation = [
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/photos", label: "Photos" },
  { href: "/music", label: "Music" },
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
  /** Optional file under public/projects/. Omit it and the project has no media area. */
  image?: string;
  /** CSS object-position for `image`, when one is set. */
  imagePosition?: string;
  links: readonly ProjectLink[];
};

export const work = {
  label: "Selected work",
  title:
    "Stuff I've built recently.",
  moreLabel: "See more work",
  projects: [
    {
      title: "Payroll App for a MLB Team",
      kicker: "Pittsburgh Pirates",
      stack: "TypeScript, CSS, JavaScript, MLB API, OpenAI Codex",
      body: "Built during my internship for the Pittsburgh Pirates. Pulls player and game data from the MLB API. Main functions are payroll operations and commissions. Note: this is a demo version of the application to protect the privacy of the original app (which is why neither the roster or the game data is being pulled from the MLB API). AI was used to make the sample version and to take away all branding.",
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
    {
      title: "Differential Gene Expression Analysis on Tumors of Black and White Women with TNBC",
      kicker: "UPMC Hillman Cancer Center Research",
      stack: "R, Biomedical Informatics",
      body: "Presented at the American Medical Informatics Association. Analyzed gene expression data to study racial disparities in triple-negative breast cancer. Used R to run differential gene expression and survival analysis across patient cohorts.",
      links: [
        {
          label: "Abstract",
          href: "https://docs.google.com/document/d/1IyD9e0IjyhxpFcOU6yv3rokB9ohwi5FLPee9eHgN9ec/edit?usp=sharing",
        },
      ],
    },
    {
      title: "meetHaven",
      kicker: "Campus discovery",
      stack: "React, Node.js, Figma",
      body: "A site to connect the New Haven student communities through shared interests by making it easy to discover events and make plans. Used Nelson's Heuristics to guide the UI/UX design process.",
      links: [
        {
          label: "Repository",
          href: "https://github.com/abrillm456/hci26-aaa",
        },
        {
          label: "Poster",
          href: "https://drive.google.com/file/d/18OFh4BGt-fst0KfCPFp1PdoGHnXMAkWJ/view?usp=sharing",
        }
      ],
    },
    {
      title: "Mariachi Juvenil",
      kicker: "Anthropic Claude Builder Hackathon, winner",
      stack: "JavaScript, React, Gemini API, Claude Code",
      body: "Youth music programs are hard to find and harder to afford. This React platform connects students with lower-cost instruction, built with Gemini and Claude.",
      links: [],
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
  title: "Past Roles",
  moreLabel: "See all experience",
  roles: [
    {
      org: "Pittsburgh Pirates",
      role: "Enterprise Systems Intern",
      when: "May 2026 to August 2026 | Pittsburgh, PA",
      body: "Built internal tools with OpenAI Codex and the MLB API to cut cross-department admin. With Business Intelligence, modeled the return on AI workflow automation so leadership could decide where to spend.",
    },
    {
      org: "Student Technology Collaborative",
      role: "Lead Coordinator and Hardware/Software Technician",
      when: "October 2025 to present | Yale University",
      body: "Supervise a queue of 6+ technicians and a free repair pipeline for a campus of 10,000+ students. One-to-one diagnosis on hardware and software, aimed at queue time and resolution rate.",
    },
    {
      org: "Curious Cardinals",
      role: "Product Management Mentor",
      when: "July 2026 to present | remote",
      body: "Guide student founders from product strategy to a working MVP, using Claude, OpenAI, and fast prototyping.",
    },
    {
      org: "Women and Gender Minorities in CS",
      role: "President",
      when: "September 2024 to present | New Haven, CT",
      body: "Direct a 15-person executive team for 200+ members. Weekly notes to 700+ subscribers, plus programs that widen who gets into technical rooms.",
    },
    {
      org: "UPMC Hillman Cancer Center",
      role: "Biomedical Informatics Researcher",
      when: "May 2023 to November 2023 | University of Pittsburgh",
      body: "Ran differential gene expression and survival analysis in R across patient cohorts. Presented the methods at the American Medical Informatics Association Symposium.",
    },
  ] satisfies readonly Role[],
} as const;

export type ExperiencePhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Prints for the polaroid stack beside the experience timeline.
// Add a file under public/experience/ and a row here.
// { src: "/experience/example.jpg", alt: "Short description of the photo.", width: 1600, height: 1600 },
export const experiencePhotos: readonly ExperiencePhoto[] = [];

export const resume = {
  label: "See full resume",
  href: "https://docs.google.com/document/d/1SaVoVLnwcXPz8JxkL-TFHjnjLdj4OVpWxQ1KWDNqY30/edit?usp=sharing",
} as const;

export const about = {
  label: "About",
  headline: "Abril is April in Spanish.",
  moreLabel: "More about me",
  paragraphs: [
    "Hello! Hola! 你好! I'm Abril, a Yale student in computer science and economics, graduating in 2028. I'm passionate about product management, artificial intelligence, and building technology that creates meaningful impact.",
    "My coursework runs from systems and human-computer interaction to econometrics, plus product management in the age of AI. I studied intensive Mandarin and international economics at Donghua University in Shanghai.",
    "As an Enterprise Systems Intern with the Pittsburgh Pirates, I built custom business applications using Codex and the MLB API while helping lead the organization's AI adoption through workflow automation and ROI analysis of emerging technologies. Previously, I've conducted biomedical informatics research at the UPMC Hillman Cancer Center, where I analyzed gene expression data to study racial disparities in triple-negative breast cancer and presented my findings at the American Medical Informatics Association Annual Symposium.",
    "Beyond my technical work, I am deeply committed to leadership and expanding access to technology. I serve as President of Women and Gender Minorities in Computer Science at Yale, where I lead initiatives that connect students with technical, professional, and community-building opportunities. As Orchestra Manager for a Yale Orchestra, I combined my passion for music with organizational leadership, and as a mentor with Curious Cardinals, I guide students in creating projects that blend technology, music, and entrepreneurship, encouraging my mentees to think creatively while developing technical skills.",
    "Fluent in English and Spanish and proficient in Mandarin Chinese, I enjoy collaborating across disciplines and cultures. I'm a Yale Ogilvie Technology Scholar and a National Aspirations in Computing awardee.",
    "Outside of class and work, I play, compose, and arrange music. I also capture and edit photography. All photos on this site are mine!",
  ],
  skills:
    "Python, C, Java, C#, JavaScript, React, Node.js, R, HTML/CSS. Git, REST APIs, UNIX, Unity, Figma.",
  backdrop: "/photos/clock-tower.jpg",
} as const;

export const photographs = {
  label: "Photographs",
  title: "It all started with a gifted camera...",
  body: "Digital shots from campus and travel. Graduating from Yale, Harvard, JHU, Pitt, or CMU this Spring? Contact me for 2027. If you're a Yale club seeking a photo shoot, use the Yale filter to see past club photos and reach out if you're interested! See more photos on Instagram @abrilita_photos",
  homeBody: "A photo I've taken recently, chosen again each visit.",
  moreLabel: "See all photographs",
} as const;

export const contact = {
  headline: "Say hello.",
  email: "adlinares6@gmail.com",
  location: "Pittsburgh, PA and New Haven, CT",
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

export type Arrangement = {
  title: string;
  /** The id in a YouTube watch URL, after v=. */
  youtubeId: string;
  note?: string;
};

export const music = {
  label: "Music",
  title: "Arrangements and compositions.",
  empty: "Music YouTube channel at AyDeeRisitas.",
  // Add an arrangement by dropping a YouTube id in data/content.ts.
} as const;

// Add an arrangement by dropping a YouTube id in this list.
// { title: "Arrangement title", youtubeId: "yourYouTubeId", note: "Optional note." },
export const arrangements: readonly Arrangement[] = [
  {
    title: "Dancing In The Flames by The Weeknd",
    youtubeId: "jOc9py77s2Y",
    note: "Arrangement for two pianos.",
  },
];
