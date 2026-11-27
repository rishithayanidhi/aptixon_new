
import { randomBytes } from "node:crypto";
import prisma from "../../config/database";
import type { QuoteInput } from "./quote.schema";

function createReferenceNumber() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = randomBytes(4).toString("hex").toUpperCase();

  return `APT-${date}-${suffix}`;
}

export async function createQuote(data: QuoteInput) {
  return prisma.websiteRequirement.create({
    data: {
      referenceNumber: createReferenceNumber(),

      fullName: data.fullName,
      companyName: data.company || null,
      email: data.email.toLowerCase(),
      phone: data.phone,

      websiteType: data.websiteType,
      pageCount: data.pageCount,
      features: data.features,

      budget: data.budget,
      timeline: data.timeline,
      domainStatus: data.domain,
      hostingStatus: data.hosting,
      contentStatus: data.content,
      designPreference: data.design,

      additionalRequirements: data.additional || null,
    },
    select: {
      id: true,
      referenceNumber: true,
      status: true,
      createdAt: true,
    },
  });
}
