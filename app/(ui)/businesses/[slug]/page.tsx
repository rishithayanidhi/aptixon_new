import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Code2,
  Trophy,
  Music2,
  Zap,
  ShieldCheck,
  Users,
  Headphones,
  Layers3,
  SearchCheck,
  Rocket,
  Monitor,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { InfotechServices } from "@/components/infotech-services";

const businesses = [
  {
    slug: "infotech",
    name: "Aptixon Infotech",
    eyebrow: "TECHNOLOGY",
    tagline: "Technology that moves business forward.",
    description:
      "Dependable digital products and technology capabilities built around real business needs.",
    services: [
      "Software Development",
      "Web & Mobile Applications",
      "IT Consulting",
      "Automation Solutions",
      "Digital Transformation",
    ],
    icon: Code2,
    tone: "blue",
  },
  {
    slug: "sports",
    name: "Aptixon Sports",
    eyebrow: "SPORTS & GAMES",
    tagline: "Building the future of sports.",
    description:
      "Sporting ecosystems, leagues and grassroots initiatives that connect players, teams and communities.",
    services: [
      "Football League Management",
      "Sports Events & Tournaments",
      "Youth Development",
      "Sports Infrastructure",
      "Partnerships",
    ],
    icon: Trophy,
    tone: "green",
  },
  {
    slug: "eventra",
    name: "Aptixon EVENTRA",
    eyebrow: "LIVE EXPERIENCES",
    tagline: "Every event. One experience.",
    description:
      "End-to-end event planning, operations, registration and technology for seamless experiences.",
    services: [
      "Event Management",
      "Event Planning",
      "Event Registration",
      "Event Ticketing",
      "Event Technology",
    ],
    icon: Music2,
    tone: "purple",
  },
];

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const business = businesses.find((item) => item.slug === slug);

  if (!business) {
    notFound();
  }

  const Icon = business.icon;

  if (slug === "infotech") {
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

  return (
    <main>
      <section className={`business-page-hero ${business.tone}`}>
        <div className="container business-page-hero-inner">
          <Link className="back-link" href="/businesses">
            <ArrowLeft size={17} />
            All Businesses
          </Link>
          <div className="business-page-heading">
            <span className="eyebrow light">{business.eyebrow}</span>
            <h1>{business.name}</h1>
            <p>{business.tagline}</p>
          </div>
          <div className="business-page-icon">
            <Icon size={54} />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container business-service-layout">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Purpose-built services for meaningful outcomes.</h2>
            <p className="lead">{business.description}</p>
          </div>
          <div className="business-service-list">
            {business.services.map((service, index) => (
              <Link className="business-service" href="/contact" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service}</strong>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Talk to the Aptixon team about your requirements.</p>
          </div>
          <Link className="btn btn-green" href="/contact">
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
