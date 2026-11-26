import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Headphones,
  Layers3,
  Monitor,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { InfotechServices } from "@/components/pages/businesses/infotech-services";

export default function InfotechPage() {
  return (
    <main className="infotech-page">
      <section className="infotech-hero">
        <div className="container infotech-hero-grid">
          <div className="infotech-hero-copy">
            <h1>Aptixon Infotech</h1>
            <p className="infotech-hero-subtitle">
              End-to-End Digital Solutions for Modern Businesses
            </p>
            <p>
              We design, develop and deliver reliable, scalable and
              cost-effective technology solutions to help your business grow
              in the digital world.
            </p>
            <div className="infotech-actions">
              <Link className="infotech-secondary" href="/projects">
                <span>Play</span>
                Our Work
              </Link>
            </div>
          </div>

          <div className="infotech-visual">
            <Image
              className="infotech-hero-image"
              src="/images/aptixon-infotech-hero.png"
              alt="Neon blue laptop displaying code, with digital technology icons"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="infotech-benefits">
        <div className="container infotech-benefit-grid">
          <div>
            <Zap />
            <p>
              <strong>Fast Delivery</strong>
              <span>(On-time &amp; Reliable)</span>
            </p>
          </div>
          <div>
            <ShieldCheck />
            <p>
              <strong>Secure &amp; Scalable</strong>
              <span>(Enterprise Grade)</span>
            </p>
          </div>
          <div>
            <Users />
            <p>
              <strong>Expert Team</strong>
              <span>(Industry Professionals)</span>
            </p>
          </div>
          <div>
            <Headphones />
            <p>
              <strong>Ongoing Support</strong>
              <span>(Continuous Assistance)</span>
            </p>
          </div>
        </div>
      </section>

      <InfotechServices />

      <section
        className="infotech-process-section"
        aria-labelledby="infotech-process-heading"
      >
        <div className="container">
          <div className="infotech-process-title">
            <span className="infotech-heading-line" />
            <h2 id="infotech-process-heading">How We Work</h2>
            <p>
              A clear, collaborative process takes your idea from first
              conversation to launch.
            </p>
          </div>
          <div className="infotech-process-grid">
            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand your goals and requirements.",
                icon: SearchCheck,
              },
              {
                number: "02",
                title: "Plan & Design",
                text: "Create the right solution and design.",
                icon: Layers3,
              },
              {
                number: "03",
                title: "Develop",
                text: "Build, test and ensure high-quality delivery.",
                icon: Code2,
              },
              {
                number: "04",
                title: "Launch",
                text: "Go live and provide ongoing support.",
                icon: Rocket,
              },
            ].map((step, index) => {
              const StepIcon = step.icon;

              return (
                <article className="infotech-process-step" key={step.title}>
                  <div className="infotech-process-icon">
                    <StepIcon />
                  </div>
                  <div className="infotech-process-copy">
                    <span className="infotech-process-number">
                      STEP {step.number}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  {index < 3 && (
                    <ChevronRight
                      className="infotech-process-arrow"
                      aria-hidden="true"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="infotech-project-band">
        <div className="container">
          <div className="infotech-project-card">
            <div className="infotech-project-icon">
              <Monitor />
            </div>
            <div>
              <h2>Have a Project in Mind?</h2>
              <p>Let's turn your idea into a powerful digital solution.</p>
            </div>
            <Link
              className="infotech-project-quote"
              href="/businesses/infotech/request-a-quote"
            >
              Request a Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
