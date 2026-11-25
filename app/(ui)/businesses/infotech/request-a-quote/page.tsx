import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Headphones,
  Layers3,
  Monitor,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { QuoteRequestForm } from "@/components/quote-request-form";

export default function InfotechQuotePage() {
  return (
    <main className="quote-request-page">
      <section className="quote-request-hero">
        <div className="container">
          <Link className="quote-back-link" href="/businesses/infotech">
            <ArrowLeft size={16} />
            Aptixon Infotech
          </Link>
          <h1>
            Website Development <span>Quote</span>
          </h1>
          <p>
            Share your website requirements and help us prepare an accurate
            project estimate.
          </p>
          <div className="quote-hero-highlights">
            <span>
              <Zap aria-hidden="true" />
              Quick Response
            </span>
            <span>
              <ShieldCheck aria-hidden="true" />
              Detailed Estimate
            </span>
            <span>
              <Headphones aria-hidden="true" />
              Expert Support
            </span>
          </div>
        </div>
      </section>

      <section className="quote-request-content">
        <div className="container quote-request-layout">
          <aside className="quote-request-aside">
            <span className="eyebrow">APTIXON INFOTECH</span>
            <h2>
              Start with a conversation<span className="quote-heading-period">.</span>
            </h2>
            <p>
              Share your goals and we’ll follow up to understand your
              requirements, timeline and next steps.
            </p>
            <ul>
              <li>
                <Monitor aria-hidden="true" />
                A solution tailored to your needs
              </li>
              <li>
                <Layers3 aria-hidden="true" />
                Clear scope and practical next steps
              </li>
              <li>
                <CalendarDays aria-hidden="true" />
                Realistic timeline and cost estimate
              </li>
            </ul>
            <div className="quote-aside-note">
              <strong>Not sure what you need yet?</strong>
              <span>
                Tell us about the challenge and we’ll help you explore it.
              </span>
            </div>
          </aside>

          <QuoteRequestForm />
        </div>
      </section>
    </main>
  );
}
