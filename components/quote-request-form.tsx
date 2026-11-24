"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { infotechQuoteOptions } from "@/lib/infotech-quote-options";

function ChoiceGroup({
  name,
  legend,
  options,
}: {
  name: string;
  legend: string;
  options: readonly string[];
}) {
  return (
    <fieldset className="quote-choice-fieldset">
      <legend>{legend} *</legend>
      <div className="quote-choice-grid">
        {options.map((option, index) => (
          <label className="quote-option-card" key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              required={index === 0}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function QuoteRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [featureError, setFeatureError] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (formData.getAll("features").length === 0) {
      setFeatureError(true);
      return;
    }

    setFeatureError(false);
    setSubmitError("");
    setSubmitting(true);

    const readField = (name: string) => String(formData.get(name) ?? "");
    const payload = {
      fullName: readField("fullName"),
      companyName: readField("companyName"),
      emailAddress: readField("emailAddress"),
      contactNumber: readField("contactNumber"),
      websiteType: readField("websiteType"),
      pageCount: readField("pageCount"),
      features: formData.getAll("features").map(String),
      budget: readField("budget"),
      timeline: readField("timeline"),
      domainStatus: readField("domainStatus"),
      hostingStatus: readField("hostingStatus"),
      contentStatus: readField("contentStatus"),
      designPreference: readField("designPreference"),
      additionalRequirements: readField("additionalRequirements"),
    };

    try {
      const response = await fetch("/api/infotech-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result: unknown = await response.json();
        const message =
          isMessageResponse(result) && result.message
            ? result.message
            : "Unable to submit your request. Please try again.";
        setSubmitError(message);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section
        className="quote-form-card quote-form-confirmation"
        role="status"
      >
        <span className="quote-confirmation-icon">
          <CheckCircle2 />
        </span>
        <h2>Thanks for sharing your requirements.</h2>
        <p>Your website requirements have been submitted successfully.</p>
        <button
          type="button"
          className="quote-submit-button"
          onClick={() => {
            setSubmitted(false);
            setFeatureError(false);
            setSubmitError("");
          }}
        >
          Submit another response
        </button>
      </section>
    );
  }

  return (
    <form
      className="quote-form-card quote-requirements-form"
      onSubmit={handleSubmit}
    >
      <div className="quote-form-heading">
        <span className="eyebrow">APTIXON INFOTECH</span>
        <h2>Website Development Customer Requirement Form</h2>
        <p>
          Please share your requirements to help us prepare an accurate project
          estimation. Fields marked with * are required.
        </p>
      </div>

      <section className="quote-form-section">
        <h3>Customer Information</h3>
        <p className="quote-section-description">Your contact details</p>
        <div className="quote-form-grid">
          <label className="quote-field">
            Full Name *
            <input
              name="fullName"
              autoComplete="name"
              required
              placeholder="Your full name"
            />
          </label>
          <label className="quote-field">
            Company / Business Name
            <input
              name="companyName"
              autoComplete="organization"
              placeholder="Your company or business"
            />
          </label>
          <label className="quote-field">
            Email Address *
            <input
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </label>
          <label className="quote-field">
            Contact Number *
            <input
              name="contactNumber"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Your contact number"
            />
          </label>
        </div>
      </section>

      <section className="quote-form-section">
        <h3>Website Requirements</h3>
        <ChoiceGroup
          name="websiteType"
          legend="1. What type of website do you need?"
          options={infotechQuoteOptions.websiteTypes}
        />
        <ChoiceGroup
          name="pageCount"
          legend="2. How many pages do you require?"
          options={infotechQuoteOptions.pageCounts}
        />

        <fieldset className="quote-choice-fieldset">
          <legend>
            3. What features and functionalities do you require? (Select all
            applicable features) *
          </legend>
          <div className="quote-feature-grid">
            {infotechQuoteOptions.features.map((feature) => (
              <label className="quote-feature-option" key={feature}>
                <input
                  type="checkbox"
                  name="features"
                  value={feature}
                  onChange={() => setFeatureError(false)}
                />
                <span>{feature}</span>
              </label>
            ))}
          </div>
          {featureError && (
            <p className="quote-form-error" role="alert">
              Select at least one feature to continue.
            </p>
          )}
        </fieldset>

        <ChoiceGroup
          name="budget"
          legend="4. What is your estimated budget?"
          options={infotechQuoteOptions.budgets}
        />
        <ChoiceGroup
          name="timeline"
          legend="5. What is your expected delivery timeline?"
          options={infotechQuoteOptions.timelines}
        />
        <ChoiceGroup
          name="domainStatus"
          legend="6. Do you already have a domain name?"
          options={infotechQuoteOptions.domainOptions}
        />
        <ChoiceGroup
          name="hostingStatus"
          legend="7. Do you have website hosting?"
          options={infotechQuoteOptions.hostingOptions}
        />
        <ChoiceGroup
          name="contentStatus"
          legend="8. Is your website content ready?"
          options={infotechQuoteOptions.contentOptions}
        />
        <ChoiceGroup
          name="designPreference"
          legend="9. Do you have a preferred design or reference website?"
          options={infotechQuoteOptions.designOptions}
        />
      </section>

      <section className="quote-form-section quote-additional-section">
        <h3>Additional Requirements</h3>
        <label className="quote-field">
          Any other requirements or specifications?
          <textarea
            name="additionalRequirements"
            rows={5}
            placeholder="Describe any additional features, ideas or reference websites..."
          />
        </label>
      </section>

      <div className="quote-form-submit-row">
        <p>Your request is submitted to Aptixon through Google Forms.</p>
        {submitError && (
          <p className="quote-form-error" role="alert">
            {submitError}
          </p>
        )}
        <button
          className="quote-submit-button"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Submit"}
          {!submitting && <ArrowRight size={17} />}
        </button>
      </div>
    </form>
  );
}

function isMessageResponse(value: unknown): value is { message?: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    (typeof value.message === "string" || value.message === undefined)
  );
}
