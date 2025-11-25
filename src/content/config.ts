import { defineCollection, z } from 'astro:content';
import { glob } from "astro/loaders";

const docsSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  order: z.number().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    published: z.boolean().default(true),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/docs/articles" }),
  schema: docsSchema,
});

const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/docs/tutorials" }),
  schema: docsSchema,
});

const howtos = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/docs/howtos" }),
  schema: docsSchema,
});

const reference = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/docs/reference" }),
  schema: docsSchema,
});

export const collections = {
  blog,
  articles,
  tutorials,
  howtos,
  reference,
};
