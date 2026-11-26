export const tags = [
  "Travel",
  "Wildlife",
  "Graduation Photos",
  "Yale"
] as const;

export type Tag = (typeof tags)[number];

export type Photo = {
  src: string;
  title: string;
  alt: string;
  tags: readonly Tag[];
  width: number;
  height: number;
  /**
   * Portraits of an individual person are never eligible for the hero.
   * Set this false for those photos. The about headshot is not in `photos`.
   */
  hero: boolean;
  /**
   * CSS object-position when this photo is the hero, so the subject can sit
   * beside the name card. The bear's value keeps the cub on the right.
   */
  heroPosition: string;
};

export const photos: readonly Photo[] = [
  {
    src: "/photos/garden-pavilions.jpg",
    title: "Chongqing, China | Summer 2025",
    alt: "Wooden pavilions with tiled roofs standing over a still pond, trees along the far bank.",
    tags: ["Travel"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/calligraphy-shop.jpg",
    title: "Dali, China | Summer 2025",
    alt: "A shopfront with vertical handwritten signs, red roses, and an orange awning.",
    tags: ["Travel"],
    width: 1333,
    height: 2000,
    hero: false,
    heroPosition: "center",
  },
  {
    src: "/photos/painted-gate.jpg",
    title: "Dali, China | Summer 2025",
    alt: "A painted wooden gate with carved panels, blue tile, and a red door.",
    tags: ["Travel"],
    width: 1333,
    height: 2000,
    hero: false,
    heroPosition: "center",
  },
  {
    src: "/photos/red-lanterns.jpg",
    title: "Dali, China | Summer 2025",
    alt: "Rows of red and yellow lanterns framing stone steps and a temple roof.",
    tags: ["Travel"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/grey-cat.jpg",
    title: "Dali, China | Summer 2025",
    alt: "A grey cat with yellow eyes sitting on a stone path.",
    tags: ["Wildlife"],
    width: 2000,
    height: 1333,
    hero: false,
    heroPosition: "center",
  },
  {
    src: "/photos/canal-boat.jpg",
    title: "Chongqing, China | Summer 2025",
    alt: "A person in a straw hat poling a covered boat along a canal, red lanterns at either side.",
    tags: ["Travel"],
    width: 2000,
    height: 1465,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/clock-tower.jpg",
    title: "Harkness Tower, Yale University | Fall 2024",
    alt: "A stone clock tower rising through green trees.",
    tags: ["Yale"],
    width: 1333,
    height: 2000,
    hero: false,
    heroPosition: "center",
  },
  {
    src: "/photos/black-bear.jpg",
    title: "Yellowstone National Park, Wyoming | Summer 2024",
    alt: "A black bear perched on a broken branch against a tree trunk.",
    tags: ["Wildlife"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/thermal-terraces.jpg",
    title: "Yellowstone National Park, Wyoming | Summer 2024",
    alt: "Steaming mineral terraces in front of a forested hill.",
    tags: ["Travel"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/courtyard-fountain.jpg",
    title: "Prague, Czech Republic | Summer 2024",
    alt: "A stone fountain in a pale courtyard, with people crossing the square.",
    tags: ["Travel"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/rain-umbrellas.jpg",
    title: "Dali, China | Summer 2025",
    alt: "People with umbrellas walking a wet path toward a red-roofed hall.",
    tags: ["Travel"],
    width: 1333,
    height: 2000,
    hero: false,
    heroPosition: "center",
  },
  {
    src: "/photos/graduation.jpg",
    title: "Johns Hopkins University | Spring 2026",
    alt: "Three graduates in white dresses tossing their caps on a lawn.",
    tags: ["Graduation Photos"],
    width: 1333,
    height: 2000,
    hero: false,
    heroPosition: "center",
  },
];

// The about portrait is separate from the gallery. It is never eligible for the hero.
export const headshot = {
  src: "/about/headshot.jpg",
  alt: "Abril Linares Mendoza, smiling, arms crossed, in a white shirt outdoors.",
  width: 1922,
  height: 2209,
} as const;
