
import { z } from "zod";
import { infotechQuoteOptions } from "../../../../lib/infotech-quote-options";

export const quoteSchema = z.object({
  fullName: z.string().trim().min(2).max(150),

  company: z.string().trim().max(150).default(""),

  email: z.string().trim().email().max(255),

  phone: z.string().trim().min(7).max(30),

  websiteType: z.enum(infotechQuoteOptions.websiteTypes),

  pageCount: z.enum(infotechQuoteOptions.pageCounts),

  features: z
    .array(z.enum(infotechQuoteOptions.features))
    .min(1)
    .max(infotechQuoteOptions.features.length),

  budget: z.enum(infotechQuoteOptions.budgets),

  timeline: z.enum(infotechQuoteOptions.timelines),

  domain: z.enum(infotechQuoteOptions.domainOptions),

  hosting: z.enum(infotechQuoteOptions.hostingOptions),

  content: z.enum(infotechQuoteOptions.contentOptions),

  design: z.enum(infotechQuoteOptions.designOptions),

  additional: z.string().trim().max(5000).default(""),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
