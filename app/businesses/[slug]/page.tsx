import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Code2, Trophy, Music2 } from "lucide-react";

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
