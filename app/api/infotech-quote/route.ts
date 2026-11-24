import { NextResponse } from "next/server";
import {
  infotechQuoteOptions,
  type InfotechQuoteSubmission,
} from "@/lib/infotech-quote-options";

export const dynamic = "force-dynamic";

type GoogleFormTokens = {
  fbzx: string;
  partialResponse: string;
  pageHistory: string;
  fvv: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length > 0 && text.length <= maxLength ? text : null;
}

function readOptionalText(value: unknown, maxLength: number): string | null {
  if (value === undefined) return "";
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length <= maxLength ? text : null;
}

function isOption<T extends readonly string[]>(
  value: unknown,
  options: T,
): value is T[number] {
  return typeof value === "string" && options.includes(value);
}

function parseSubmission(value: unknown): InfotechQuoteSubmission | null {
  if (!isRecord(value)) return null;

  const fullName = readText(value.fullName, 200);
  const companyName = readOptionalText(value.companyName, 200);
  const emailAddress = readText(value.emailAddress, 320);
  const contactNumber = readText(value.contactNumber, 60);
  const websiteType = value.websiteType;
  const pageCount = value.pageCount;
  const budget = value.budget;
  const timeline = value.timeline;
  const domainStatus = value.domainStatus;
  const hostingStatus = value.hostingStatus;
  const contentStatus = value.contentStatus;
  const designPreference = value.designPreference;
  const additionalRequirements = readOptionalText(
    value.additionalRequirements,
    5000,
  );

  if (
    !fullName ||
    companyName === null ||
    !emailAddress ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) ||
    !contactNumber ||
    additionalRequirements === null ||
    !isOption(websiteType, infotechQuoteOptions.websiteTypes) ||
    !isOption(pageCount, infotechQuoteOptions.pageCounts) ||
    !isOption(budget, infotechQuoteOptions.budgets) ||
    !isOption(timeline, infotechQuoteOptions.timelines) ||
    !isOption(domainStatus, infotechQuoteOptions.domainOptions) ||
    !isOption(hostingStatus, infotechQuoteOptions.hostingOptions) ||
    !isOption(contentStatus, infotechQuoteOptions.contentOptions) ||
    !isOption(designPreference, infotechQuoteOptions.designOptions) ||
    !Array.isArray(value.features) ||
    value.features.length === 0
  ) {
    return null;
  }

  const features = value.features.filter((feature): feature is string =>
    isOption(feature, infotechQuoteOptions.features),
  );
  if (features.length !== value.features.length) return null;

  return {
    fullName,
    companyName,
    emailAddress,
    contactNumber,
    websiteType,
    pageCount,
    features,
    budget,
    timeline,
    domainStatus,
    hostingStatus,
    contentStatus,
    designPreference,
    additionalRequirements,
  };
}

function getHiddenInputValue(html: string, name: string): string | null {
  const inputs = html.match(/<input\b[^>]*>/gi) ?? [];

  for (const input of inputs) {
    const inputName = input.match(/\bname=["']([^"']+)["']/i)?.[1];
    if (inputName !== name) continue;

    const value = input.match(/\bvalue=["']([^"']*)["']/i)?.[1];
    if (value === undefined) return null;

    return value
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&#x27;/gi, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  return null;
}

async function loadGoogleFormTokens(viewFormUrl: string) {
  const response = await fetch(viewFormUrl, {
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "text/html",
    },
  });

  if (!response.ok) return null;

  const html = await response.text();
  const fbzx = getHiddenInputValue(html, "fbzx");
  const partialResponse = getHiddenInputValue(html, "partialResponse");
  const pageHistory = getHiddenInputValue(html, "pageHistory");
  const fvv = getHiddenInputValue(html, "fvv");

  if (!fbzx || !partialResponse || !pageHistory || !fvv) return null;
  return { fbzx, partialResponse, pageHistory, fvv } satisfies GoogleFormTokens;
}

function createGoogleFormPayload(
  submission: InfotechQuoteSubmission,
  tokens: GoogleFormTokens,
) {
  const params = new URLSearchParams();
  params.set("entry.53807555", submission.fullName);
  params.set("entry.1672214698", submission.companyName);
  params.set("entry.466175216", submission.emailAddress);
  params.set("entry.493934982", submission.contactNumber);
  params.set("entry.962597741", submission.websiteType);
  params.set("entry.234746216", submission.pageCount);
  submission.features.forEach((feature) =>
    params.append("entry.1729085897", feature),
  );
  params.set("entry.1445211485", submission.budget);
  params.set("entry.303856225", submission.timeline);
  params.set("entry.1728023544", submission.domainStatus);
  params.set("entry.1554864238", submission.hostingStatus);
  params.set("entry.2063013469", submission.contentStatus);
  params.set("entry.2036019432", submission.designPreference);
  params.set("entry.1260296901", submission.additionalRequirements);
  params.set("fvv", tokens.fvv);
  params.set("pageHistory", tokens.pageHistory);
  params.set("fbzx", tokens.fbzx);
  params.set("partialResponse", tokens.partialResponse);
  params.set("submissionTimestamp", "-1");
  return params;
}

export async function POST(request: Request) {
  let requestBody: unknown;
  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid form submission." },
      { status: 400 },
    );
  }

  const submission = parseSubmission(requestBody);
  if (!submission) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const formId = process.env.INFOTECH_QUOTE_FORM_ID?.trim();
  if (!formId || !/^[A-Za-z0-9_-]+$/.test(formId)) {
    console.error("INFOTECH_QUOTE_FORM_ID is missing or invalid.");
    return NextResponse.json(
      { ok: false, message: "The quote form is not configured." },
      { status: 503 },
    );
  }

  const formBaseUrl = `https://docs.google.com/forms/d/e/${formId}`;
  
  let tokens: GoogleFormTokens | null;
  try {
    tokens = await loadGoogleFormTokens(
      `${formBaseUrl}/viewform?usp=send_form`,
    );
  } catch (error) {
    console.error("Google Forms form-page request failed.", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to reach the quote form. Please try again.",
      },
      { status: 502 },
    );
  }

  if (!tokens) {
    return NextResponse.json(
      { ok: false, message: "Unable to prepare the quote form submission." },
      { status: 502 },
    );
  }

  let googleResponse: Response;
  try {
    googleResponse = await fetch(`${formBaseUrl}/formResponse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      body: createGoogleFormPayload(submission, tokens).toString(),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    console.error("Google Forms submission request failed.", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit your request. Please try again.",
      },
      { status: 502 },
    );
  }

  if (!googleResponse.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "The quote form could not accept your submission.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Your quote request has been submitted.",
  });
}
