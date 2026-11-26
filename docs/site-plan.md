# Portfolio site plan

A personal site for Abril Linares Mendoza. People should leave knowing who she is, what she has built, where she has worked, and what she photographs.

Source repo: [adlm6/abril-linares-mendoza](https://github.com/adlm6/abril-linares-mendoza). Do not change [adlm6/abril-portfolio](https://github.com/adlm6/abril-portfolio).

Coding rules for the build live in [cursorrules.md](/cursor/stores/bc-146e5fc6-7fcf-4bc3-9538-13c57e5515a9/docs/cursorrules.md). That file is copied to the repo root as `.cursorrules` when the site is built.

## Sections

Home page with a first look at each section, plus its own page for Experience, Work, About, Photographs, and Music. There is no music block on the home page. Sticky glass nav: the A mark, then Experience, Work, About, Photos, Music, Contact. Experience sits immediately left of Work. Those links go to `/experience`, `/work`, `/about`, `/photos`, and `/music`. Contact stays only on the home page, and the nav link is `/#contact`. Nav pills have a real gap. The current page is one pill. Hover is a separate state and does not cover that pill.

1. **Hero.** Full-viewport photograph, chosen at random on each visit from gallery photos with `hero: true`. Portraits of an individual person set `hero: false` and never appear here. The headshot is not in that set. `heroPosition` is the CSS object-position for that photo, so a subject such as the bear can sit to the right of the name card. Do not scale the photo up past its pixels. Glass panel with name, one line, and two actions. The primary action is Experience. Photographs is the second.
2. **Experience.** On the home page this block comes before selected work. Home shows the first two roles and a link to `/experience`. That page is a vertical timeline: line, dot, date, role, organization in the accent color, and one short line. A polaroid stack of `experiencePhotos` sits beside it when she adds prints. The page ends with "See full resume".
3. **Selected work.** Comes after experience on the home page. A project image is an optional file under `public/projects/`. When it is missing, there is no media area, just the type. Each card has a repo or demo link when one exists. Home shows the first project and a link to `/work`.
4. **About.** Short bio, headshot, languages, honors, and a quiet skills line. Not a logo wall. Home shows the opening paragraph. The full page is `/about`. The headshot is served at its original pixel size.
5. **Photographs.** Home shows a few photos, a different handful each visit, then a button to `/photos`. Chips on that page are real buttons and filter the grid. The intro and the Instagram line are separate, with a blank line between them. The line is "See more photos on Instagram" and the linked handle `@abrilita_photos`. Captions appear only on hover, in Outfit, over a black gradient. Gallery photos zoom slightly on hover. The about portrait, the hero photo, and gallery photos float gently unless reduced motion is on. Instagram is not in the contact section.
6. **Music.** Its own page at `/music`, linked in the nav, not shown on the home page. Under the heading: "Music YouTube channel at AyDeeRisitas", with the name linking to the channel. Embeds sit in two columns of smaller rectangles. They come from `arrangements` in `data/content.ts`.
7. **Contact.** Email, LinkedIn, GitHub, then Instagram on its own line, on the home page only. Phone stays off the public page unless Abril asks for it.

## Copy

Facts below come from the Fall 2026 resume. Nothing here invents a metric.

### Hero

Eyebrow: Yale University · Computer Science and Economics · 2028

Name: Abril Linares Mendoza

Line: Engineer, economist, game designer, photographer, and musician at Yale.

Support: A third-year Yale student with 2+ years of internship experience. I'm passionate about combining art and computer science, and I love exploring the economics of it all!

Actions: Experience, Photographs

### Selected work

Label: Selected work

Intro: Two products about access, and the kind of internal tool I built for a baseball club.

**Mariachi Juvenil**
Kicker: Anthropic Claude Builder Hackathon, winner
Stack: JavaScript, React, Gemini API, Claude Code
Body: Youth music programs are hard to find and harder to afford. This React platform connects students with lower-cost instruction, built with Gemini and Claude.
Link: repo URL still needed

**meetHaven**
Kicker: Campus discovery
Stack: React, Node.js, Figma
Body: A campus app for finding events and student organizations. Prototyped in Figma against Nielsen's heuristics, then built so the right room is not a scavenger hunt.
Link: repo URL still needed

**Payroll demo**
Kicker: Pittsburgh Pirates
Stack: TypeScript
Body: A public demo of the internal tooling from the enterprise systems internship.
Repo: https://github.com/adlm6/demo-payroll-app
Demo: https://adlm6.github.io/demo-payroll-app/

### Experience

Label: Experience

Intro: Find the bottleneck, measure it, ship the tool.

**Pittsburgh Pirates, Enterprise Systems Intern**
May 2026 to August 2026, Pittsburgh
Built internal tools with OpenAI Codex and the MLB API to cut cross-department admin. With Business Intelligence, modeled the return on AI workflow automation so leadership could decide where to spend.

**Student Technology Collaborative, Lead Coordinator and Technician**
October 2025 to present, Yale University
Supervise a queue of 6+ technicians and a free repair pipeline for a campus of 10,000+ students. One-to-one diagnosis on hardware and software, aimed at queue time and resolution rate.

**Curious Cardinals, Product Management Mentor**
July 2026 to present, remote
Guide student founders from product strategy to a working MVP, using Claude, OpenAI, and fast prototyping.

**Women and Gender Minorities in CS, President**
September 2024 to present, New Haven
Direct a 15-person executive team for 200+ members. Weekly notes to 700+ subscribers, plus programs that widen who gets into technical rooms.

**UPMC Hillman Cancer Center, Biomedical Informatics Researcher**
May 2023 to November 2023, University of Pittsburgh
Ran differential gene expression and survival analysis in R across patient cohorts. Presented the methods at the American Medical Informatics Association Symposium.

Link label: See full resume
Link: https://docs.google.com/document/d/1SaVoVLnwcXPz8JxkL-TFHjnjLdj4OVpWxQ1KWDNqY30/edit?usp=sharing

### About

Label: About

Headline: Two majors, three languages, and a habit of making the thing.

Body: I'm Abril, a Yale student in computer science and economics, graduating in 2028. The coursework runs from systems and human-computer interaction to econometrics, plus product management in the age of AI. I studied intensive Mandarin and business at Donghua University in Shanghai.

I speak Spanish and English fluently, and Mandarin at an intermediate level. I'm a Yale Ogilvie Technology Scholar and a National Aspirations in Computing awardee.

The photographs on this site are mine.

Skills line: Python, C, Java, C#, JavaScript, React, Node.js, R, HTML/CSS. Git, REST APIs, UNIX, Unity, Figma.

Headshot is the portrait, used only here. Alt text: Abril Linares Mendoza, smiling, arms crossed, in a white shirt outdoors.

### Photographs

Label: Photographs

Intro: A room for the pictures. Filter by what you came to see. The photo behind the opening changes each time you visit.

Tags: Places, Architecture, Wildlife, Street, People

| File | Title | Tags |
| --- | --- | --- |
| garden-pavilions.jpg | Pavilions on the water | Places, Architecture |
| calligraphy-shop.jpg | Handwritten shop signs | Street, Places |
| painted-gate.jpg | Painted gate | Architecture, Places |
| red-lanterns.jpg | Lantern gate | Places, Street |
| grey-cat.jpg | Grey cat | Wildlife |
| canal-boat.jpg | Canal boat | Places, Street |
| clock-tower.jpg | Stone clock tower | Architecture |
| black-bear.jpg | Black bear | Wildlife |
| thermal-terraces.jpg | Thermal terraces | Places |
| courtyard-fountain.jpg | Courtyard fountain | Architecture, Places |
| rain-umbrellas.jpg | Rain and umbrellas | Places, People |
| graduation.jpg | Caps in the air | People |

Titles are descriptive on purpose. Place names can be added later without changing the layout. The headshot is not in this grid. The motionsites screenshot is a design reference only and never appears on the site.

### Contact

Headline: Say hello.

Lines:
- adlinares6@gmail.com
- LinkedIn: https://www.linkedin.com/in/abril-linares-mendoza-a8b287258
- GitHub: https://github.com/adlm6
- Pittsburgh and New Haven

No phone number, no contact form that needs a backend.

## Aesthetic prompt

Use this prompt as the design constraint for every screen. If a choice is not named here, prefer the quieter option.

Build a personal portfolio that feels like an Apple product page crossed with a photography monograph, with the card rhythm of motionsites.ai. The reference is a dark gallery of large rounded previews with bold type and small captions. Take the card scale, the rounded corners, and the caption-under-media rhythm from that reference. Do not copy its dark chrome, its template names, or its marketplace layout.

The page is flowy. Sections hand off through tall photographs and soft glass, not through hard color blocks. Components are translucent: white at about 55 percent, 20px backdrop blur, a 1px white edge, and a shadow so soft it reads as lift rather than a drop. Type and controls sit on that glass. Never put body text directly on a busy photograph without a glass or scrim.

Color stays neutral so the photos supply the color.
- Paper: #f4f1ec
- Ink: #1c1917
- Muted ink: #5c564e
- Glass: rgba(255, 255, 255, 0.55)
- Hairline: rgba(255, 255, 255, 0.7)
- Accent, used rarely: #9c2f24, taken from the lanterns. Active filter, the A mark on paper, text links, and the organization name on the experience timeline. Nowhere else.

Typography:
- Display: Fraunces, optical size on, soft contrast. Names, headlines, and photo titles only.
- UI and body: Outfit. 17px body, 1.5 line height, slightly loose tracking on eyebrows (0.08em, uppercase, 12px).
- Do not use Inter, Roboto, Arial, Space Grotesk, or a default system stack as the design voice.

Layout:
- Content column max 1120px. Photographs and the hero bleed to the viewport edges.
- Hero is 100svh. Photo is full bleed, slightly darkened at the bottom. Glass card sits lower left on desktop and lower center on a phone, max 520px wide. No centered column of three feature cards. No illustration. No gradient orb.
- Nav is a floating glass pill, 16px from the top. Left: the A. Right: five links. On small screens the links collapse to a glass sheet, not a hamburger icon from a kit.
- Work cards are at least 420px tall on desktop, two up, full width of the image area, 28px radius, caption row underneath in small Outfit with a kicker and a text link. On a phone they stack.
- Experience on its own page is a timeline: a vertical accent line, a dot, the date, the role, the organization in accent, and one short line. Home shows the first two roles and a button to that page. No company logos. Optional polaroid prints overlap beside the timeline.
- About is a two-column band: headshot in a 28px rounded frame, copy on the glass. One column on a phone, photo first.
- Photo grid is masonry-like with mixed aspect ratios, 16px gaps, 20px radius. Filter chips are pills. The active chip is ink on paper. Empty filter state says which tag has no photos yet.
- Contact is one short glass band, then a quiet footer with the A and the year.
- Spacing scale: 8, 16, 24, 40, 72, 120. Section padding is 120px vertical on desktop and 72px on a phone.

Logo: a single capital A. Two hairline strokes meeting at a sharp apex, crossbar set slightly above the optical center. Stroke about 1.5px at nav size. No circle, no box, no wordmark next to it in the nav. On a photograph it sits on a 36px glass disc. On paper it is ink.

Motion, with Framer Motion:
- Hero photo does not slide. It fades in over 700ms.
- Glass panels rise 12px and fade, 600ms, ease-out, once.
- Filter changes crossfade the grid. No bounce, no spring overshoot, no parallax on scroll.
- Honor prefers-reduced-motion by cutting transforms and keeping opacity instant.

Random photo: on each full page load, pick one gallery photo with `hero: true` for the hero. Do not pick the headshot or a portrait flagged `hero: false`. Use that photo's `heroPosition`. Do not enlarge it past its pixel size. Persist nothing, so a refresh can change it. The home photographs block also picks a few gallery photos at random each visit. Other sections may use a fixed photo as a band (lanterns behind contact, clock tower behind about) so the page does not reshuffle itself below the fold.

Forbidden, because they make the page look like a template:
- Purple or blue gradients
- Three icon columns ("fast, reliable, modern")
- A skills section of bouncing logo tiles
- Stock patterns, grain overlays, or a dark mode toggle
- Lorem ipsum, fake client logos, or metrics that are not in the copy above
- A blog, a CMS, or a comment form

## Hosting

Host the normal Next.js App Router app on Vercel’s free tier. Do not set `output: 'export'`, `basePath`, or `assetPrefix`. `next/image` uses the default optimizer.

GitHub Pages is not the host. The source repository is [adlm6/abril-linares-mendoza](https://github.com/adlm6/abril-linares-mendoza). Do not change `adlm6/abril-portfolio`, and do not publish this site to `adlm6/abril-linares`.

If the Vercel project is not connected yet, Abril imports that repository at [vercel.com/new](https://vercel.com/new), leaves the framework preset as Next.js, and deploys. No base path. A custom domain later is a DNS step on her side.

## Decisions

- New public repository: `adlm6/abril-linares-mendoza`. Do not change `adlm6/abril-portfolio`.
- Host on Vercel. No static export and no GitHub Pages.
- No phone number on the site.
- Selected work includes the payroll demo, with its repo and live demo.
- The resume link is the Google Doc on the experience page. Public links for Mariachi Juvenil and meetHaven are still missing. Hide those buttons until a URL exists.
- Place names and tag renames can wait.
