import { z, defineCollection } from "astro:content";

const gamesCollection = defineCollection({
  type: "data",
  schema: z.object({
    photo: z.string(),
    photoAlt: z.string(),
    tagline: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
    link: z.string(),
    scriptName: z.string().default(""),
  }),
});

export const collections = {
  games: gamesCollection,
};
