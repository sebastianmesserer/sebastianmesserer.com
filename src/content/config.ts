import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    description: z.string(),
    ogTitle: z.string().optional(),
    ogImage: z.string().optional(),
    showSignup: z.boolean().optional(),
  }),
});

export const collections = { essays };
