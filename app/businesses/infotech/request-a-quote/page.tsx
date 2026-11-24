import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
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
          <span className="eyebrow light">APTIXON INFOTECH</span>
          <h1>Website Development Quote</h1>
          <p>
            Share your website requirements and help us prepare an accurate
            project estimate.
          </p>
        </div>
      </section>

      <section className="quote-request-content">
        <div className="container quote-request-layout">
          <aside className="quote-request-aside">
            <span className="eyebrow">YOUR PROJECT, OUR EXPERTISE</span>
            <h2>Start with a conversation.</h2>
            <p>
              Share your goals and we’ll follow up to understand your
              requirements, timeline and next steps.
            </p>
            <ul>
              <li>
                <CheckCircle2 />A solution tailored to your needs
              </li>
              <li>
                <Zap />
                Clear scope and practical next steps
              </li>
              <li>
                <ShieldCheck />
                Details used to prepare your estimate
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
