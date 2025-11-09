import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
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

export const collections = {
  blog: blog,
  docs: docs,
};
