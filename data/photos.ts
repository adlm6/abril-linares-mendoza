export const tags = [
  "Places",
  "Architecture",
  "Wildlife",
  "Street",
  "People",
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
    title: "Pavilions on the water",
    alt: "Wooden pavilions with tiled roofs standing over a still pond, trees along the far bank.",
    tags: ["Places", "Architecture"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/calligraphy-shop.jpg",
    title: "Handwritten shop signs",
    alt: "A shopfront with vertical handwritten signs, red roses, and an orange awning.",
    tags: ["Street", "Places"],
    width: 1333,
    height: 2000,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/painted-gate.jpg",
    title: "Painted gate",
    alt: "A painted wooden gate with carved panels, blue tile, and a red door.",
    tags: ["Architecture", "Places"],
    width: 1333,
    height: 2000,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/red-lanterns.jpg",
    title: "Lantern gate",
    alt: "Rows of red and yellow lanterns framing stone steps and a temple roof.",
    tags: ["Places", "Street"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/grey-cat.jpg",
    title: "Grey cat",
    alt: "A grey cat with yellow eyes sitting on a stone path.",
    tags: ["Wildlife"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/canal-boat.jpg",
    title: "Canal boat",
    alt: "A person in a straw hat poling a covered boat along a canal, red lanterns at either side.",
    tags: ["Places", "Street"],
    width: 2000,
    height: 1465,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/clock-tower.jpg",
    title: "Stone clock tower",
    alt: "A stone clock tower rising through green trees.",
    tags: ["Architecture"],
    width: 1333,
    height: 2000,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/black-bear.jpg",
    title: "Black bear",
    alt: "A black bear perched on a broken branch against a tree trunk.",
    tags: ["Wildlife"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "32% center",
  },
  {
    src: "/photos/thermal-terraces.jpg",
    title: "Thermal terraces",
    alt: "Steaming mineral terraces in front of a forested hill.",
    tags: ["Places"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/courtyard-fountain.jpg",
    title: "Courtyard fountain",
    alt: "A stone fountain in a pale courtyard, with people crossing the square.",
    tags: ["Architecture", "Places"],
    width: 2000,
    height: 1333,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/rain-umbrellas.jpg",
    title: "Rain and umbrellas",
    alt: "People with umbrellas walking a wet path toward a red-roofed hall.",
    tags: ["Places", "People"],
    width: 1333,
    height: 2000,
    hero: true,
    heroPosition: "center",
  },
  {
    src: "/photos/graduation.jpg",
    title: "Caps in the air",
    alt: "Three graduates in white dresses tossing their caps on a lawn.",
    tags: ["People"],
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
