import { defineCollection, z } from "astro:content"

const projectsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string(),
    img_alt: z.string().optional(),
    img: z.string(),
  }),
})

const labsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(),
    name: z.string(),
    platform: z.string(),
    vulnerabilities: z.array(z.string()),
    link: z.string(),
    difficulty: z.string(),
  }),
})

const writeupsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(),
    title: z.string(),
    date: z.string(),
    link: z.string(),
  }),
})

export const collections = {
  projects: projectsCollection,
  labs: labsCollection,
  writeup: writeupsCollection,
}
