import { defineCollection, z } from 'astro:content';

const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.string().default('comparisons'),
    tools: z.array(z.string()),
    keywords: z.array(z.string()),
    affiliate_links: z.record(z.string()).optional(),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.string().default('reviews'),
    tool: z.string(),
    rating: z.number().min(1).max(10),
    pricing: z.string(),
    keywords: z.array(z.string()),
    affiliate_link: z.string().optional(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.string().default('guides'),
    keywords: z.array(z.string()),
  }),
});

export const collections = { comparisons, reviews, guides };
