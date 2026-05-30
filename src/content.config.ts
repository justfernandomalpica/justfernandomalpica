import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "@/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    galery: z.string().optional(),
  }),
});

export const collections = { projects };
