-- CreateTable
CREATE TABLE "WebsiteRequirement" (
    "id" UUID NOT NULL,
    "referenceNumber" VARCHAR(30) NOT NULL,
    "fullName" VARCHAR(150) NOT NULL,
    "companyName" VARCHAR(150),
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "websiteType" VARCHAR(100) NOT NULL,
    "pageCount" VARCHAR(50) NOT NULL,
    "features" TEXT[],
    "budget" VARCHAR(100) NOT NULL,
    "timeline" VARCHAR(100) NOT NULL,
    "domainStatus" VARCHAR(100) NOT NULL,
    "hostingStatus" VARCHAR(100) NOT NULL,
    "contentStatus" VARCHAR(100) NOT NULL,
    "designPreference" VARCHAR(100) NOT NULL,
    "additionalRequirements" TEXT,
    "status" VARCHAR(30) NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebsiteRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" UUID NOT NULL,
    "fullName" VARCHAR(150) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(30),
    "subject" VARCHAR(200),
    "message" TEXT NOT NULL,
    "status" VARCHAR(30) NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebsiteRequirement_referenceNumber_key" ON "WebsiteRequirement"("referenceNumber");

-- CreateIndex
CREATE INDEX "WebsiteRequirement_email_idx" ON "WebsiteRequirement"("email");

-- CreateIndex
CREATE INDEX "WebsiteRequirement_status_idx" ON "WebsiteRequirement"("status");

-- CreateIndex
CREATE INDEX "WebsiteRequirement_createdAt_idx" ON "WebsiteRequirement"("createdAt");

-- CreateIndex
CREATE INDEX "ContactSubmission_email_idx" ON "ContactSubmission"("email");

-- CreateIndex
CREATE INDEX "ContactSubmission_status_idx" ON "ContactSubmission"("status");

-- CreateIndex
CREATE INDEX "ContactSubmission_createdAt_idx" ON "ContactSubmission"("createdAt");
