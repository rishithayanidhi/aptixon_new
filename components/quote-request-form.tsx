"use client";

import { useState, type FormEvent } from "react";
import { infotechQuoteOptions } from "@/lib/infotech-quote-options";

type Values = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  websiteType: string;
  pageCount: string;
  features: string[];
  budget: string;
  timeline: string;
  domain: string;
  hosting: string;
  content: string;
  design: string;
  additional: string;
};

type SelectField = Exclude<keyof Values, "features">;
type Props = {
  onSubmit?: (values: Values) => Promise<void> | void;
};

const initialValues: Values = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  websiteType: "",
  pageCount: "",
  features: [],
  budget: "",
  timeline: "",
  domain: "",
  hosting: "",
  content: "",
  design: "",
  additional: "",
};

export function QuoteRequestForm({ onSubmit }: Props) {
  const [values, setValues] = useState(initialValues);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  function setField<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function toggleFeature(feature: string) {
    setValues((current) => ({
      ...current,
      features: current.features.includes(feature)
        ? current.features.filter((item) => item !== feature)
        : [...current.features, feature],
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (values.features.length === 0) {
      setMessage("Please select at least one feature or functionality.");
      return;
    }

    if (!onSubmit) {
      setMessage(
        "Form is ready, but email/API submission is not connected yet. Connect the onSubmit callback to your backend.",
      );
      return;
    }

    try {
      setBusy(true);
      await onSubmit(values);
      setMessage("Your requirements have been submitted successfully.");
      setValues(initialValues);
    } catch {
      setMessage("Submission failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  function renderSelect(
    id: string,
    label: string,
    options: readonly string[],
    key: SelectField,
  ) {
    return (
      <div className="wq-field">
        <label htmlFor={id}>
          {label} <b>*</b>
        </label>
        <select
          id={id}
          required
          value={values[key]}
          onChange={(event) => setField(key, event.target.value)}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <section className="aptixon-website-quote">
      <style>{`
        .aptixon-website-quote {
          --navy: #102a56;
          box-sizing: border-box;
          min-height: 100vh;
          padding: 48px 16px;
          color: #27364f;
          background: linear-gradient(135deg, #eef5ff 0%, #f7faff 52%, #eaf8f4 100%);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }
        .wq-kicker {
          color: #14856b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .wq-card {
          max-width: 760px;
          margin: 0 auto;
          padding: 34px;
          background: #fff;
          border: 1px solid #dce6f2;
          border-radius: 24px;
          box-shadow: 0 22px 60px #102a5618;
        }
        .wq-head {
          margin-bottom: 24px;
          padding: 20px 22px;
          background: linear-gradient(115deg, #f0f7ff, #effaf6);
          border: 1px solid #dce9f4;
          border-left: 4px solid #1b9a7a;
          border-radius: 15px;
        }
        .wq-head h2 {
          margin: 8px 0;
          color: var(--navy);
          font-size: clamp(20px, 3vw, 25px);
          letter-spacing: -0.4px;
          line-height: 1.3;
        }
        .wq-head p,
        .wq-section > p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
        }
        .wq-section {
          margin-top: 25px;
          padding-top: 23px;
          border-top: 1px solid #e5ebf3;
        }
        .wq-section h3 {
          margin: 0 0 5px;
          color: var(--navy);
          font-size: 16px;
          letter-spacing: -0.15px;
        }
        .wq-section > p {
          margin-bottom: 16px;
        }
        .wq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .wq-field {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 8px;
        }
        .wq-field label,
        .wq-label {
          color: #354762;
          font-size: 12px;
          font-weight: 700;
        }
        .wq-field label b {
          color: #dc4d59;
        }
        .wq-field input,
        .wq-field select,
        .wq-field textarea {
          box-sizing: border-box;
          width: 100%;
          padding: 13px 14px;
          color: #1b2f4d;
          background: #fff;
          border: 1px solid #d3deeb;
          border-radius: 11px;
          font: inherit;
          font-size: 13px;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
        }
        .wq-field input::placeholder,
        .wq-field textarea::placeholder {
          color: #98a5b7;
        }
        .wq-field input:focus,
        .wq-field select:focus,
        .wq-field textarea:focus {
          border-color: #238cba;
          box-shadow: 0 0 0 3px #238cba20;
        }
        .wq-field textarea {
          min-height: 110px;
          resize: vertical;
        }
        .wq-full {
          grid-column: 1 / -1;
        }
        .wq-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 13px;
          margin-top: 12px;
        }
        .wq-check-option {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #40516b;
          font-size: 12px;
          line-height: 1.5;
          cursor: pointer;
        }
        .wq-check-option input {
          width: 16px;
          height: 16px;
          flex: none;
          margin: 1px 0 0;
          accent-color: #168b70;
        }
        .wq-message {
          margin: 18px 0;
          padding: 13px 15px;
          color: #187d5e;
          background: #effaf4;
          border: 1px solid #ccebdc;
          border-radius: 11px;
          font-size: 13px;
        }
        .wq-submit {
          margin-top: 20px;
          padding: 14px 23px;
          color: #fff;
          background: linear-gradient(100deg, #126c9a, #168b70);
          border: 0;
          border-radius: 12px;
          box-shadow: 0 8px 18px #126c9a2c;
          font-size: 14px;
          font-weight: 750;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .wq-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 11px 22px #126c9a3b;
        }
        .wq-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }
        @media (max-width: 760px) {
          .aptixon-website-quote {
            padding: 28px 16px;
          }
          .wq-card {
            padding: 21px 16px;
          }
          .wq-grid {
            grid-template-columns: 1fr;
          }
          .wq-full {
            grid-column: auto;
          }
        }
        @media (max-width: 420px) {
          .wq-checks {
            grid-template-columns: 1fr;
          }
          .wq-head h2 {
            font-size: 19px;
          }
        }
      `}</style>

      <form className="wq-card" onSubmit={handleSubmit}>
        <header className="wq-head">
          <span className="wq-kicker">Aptixon Infotech</span>
          <h2>Website Development Customer Requirement Form</h2>
          <p>
            Please share your requirements to help us prepare an accurate
            project estimation. Fields marked * are required.
          </p>
        </header>

        <section className="wq-section">
          <h3>Customer Information</h3>
          <p>Your contact details</p>
          <div className="wq-grid">
            <div className="wq-field">
              <label htmlFor="wq-name">
                Full Name <b>*</b>
              </label>
              <input
                id="wq-name"
                required
                autoComplete="name"
                placeholder="Your full name"
                value={values.fullName}
                onChange={(event) => setField("fullName", event.target.value)}
              />
            </div>
            <div className="wq-field">
              <label htmlFor="wq-company">Company / Business Name</label>
              <input
                id="wq-company"
                autoComplete="organization"
                placeholder="Your company or business"
                value={values.company}
                onChange={(event) => setField("company", event.target.value)}
              />
            </div>
            <div className="wq-field">
              <label htmlFor="wq-email">
                Email Address <b>*</b>
              </label>
              <input
                id="wq-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={values.email}
                onChange={(event) => setField("email", event.target.value)}
              />
            </div>
            <div className="wq-field">
              <label htmlFor="wq-phone">
                Contact Number <b>*</b>
              </label>
              <input
                id="wq-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Your contact number"
                value={values.phone}
                onChange={(event) => setField("phone", event.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="wq-section">
          <h3>Website Requirements</h3>
          <p>Tell us what you would like to build</p>
          <div className="wq-grid">
            <div className="wq-full">
              {renderSelect(
                "wq-type",
                "1. What type of website do you need?",
                infotechQuoteOptions.websiteTypes,
                "websiteType",
              )}
            </div>
            <div className="wq-full">
              {renderSelect(
                "wq-pages",
                "2. How many pages do you require?",
                infotechQuoteOptions.pageCounts,
                "pageCount",
              )}
            </div>
            <div className="wq-field wq-full">
              <span className="wq-label">
                3. What features and functionalities do you require? (Select all
                applicable features) <b>*</b>
              </span>
              <div className="wq-checks">
                {infotechQuoteOptions.features.map((feature) => (
                  <label className="wq-check-option" key={feature}>
                    <input
                      type="checkbox"
                      checked={values.features.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                    />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="wq-full">
              {renderSelect(
                "wq-budget",
                "4. What is your estimated budget?",
                infotechQuoteOptions.budgets,
                "budget",
              )}
            </div>
            <div className="wq-full">
              {renderSelect(
                "wq-timeline",
                "5. What is your expected delivery timeline?",
                infotechQuoteOptions.timelines,
                "timeline",
              )}
            </div>
            {renderSelect(
              "wq-domain",
              "6. Do you already have a domain name?",
              infotechQuoteOptions.domainOptions,
              "domain",
            )}
            {renderSelect(
              "wq-hosting",
              "7. Do you have website hosting?",
              infotechQuoteOptions.hostingOptions,
              "hosting",
            )}
            {renderSelect(
              "wq-content",
              "8. Is your website content ready?",
              infotechQuoteOptions.contentOptions,
              "content",
            )}
            {renderSelect(
              "wq-design",
              "9. Do you have a preferred design or reference website?",
              infotechQuoteOptions.designOptions,
              "design",
            )}
          </div>
        </section>

        <section className="wq-section">
          <h3>Additional Requirements</h3>
          <p>
            Optional — share any other details that may help us understand your
            project
          </p>
          <div className="wq-field">
            <label htmlFor="wq-additional">
              Any other requirements or specifications?
            </label>
            <textarea
              id="wq-additional"
              placeholder="Describe any additional features, ideas or reference websites..."
              value={values.additional}
              onChange={(event) => setField("additional", event.target.value)}
            />
          </div>
        </section>

        {message && (
          <div className="wq-message" role="status" aria-live="polite">
            {message}
          </div>
        )}
        <button className="wq-submit" type="submit" disabled={busy}>
          {busy ? "Submitting..." : "Submit requirements →"}
        </button>
      </form>
    </section>
  );
}
