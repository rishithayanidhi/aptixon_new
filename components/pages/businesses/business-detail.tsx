import Link from "next/link";
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";

type BusinessDetailProps = {
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  services: string[];
  icon: LucideIcon;
  tone: string;
};

export default function BusinessDetail({
  name,
  eyebrow,
  tagline,
  description,
  services,
  icon: Icon,
  tone,
}: BusinessDetailProps) {
  return (
    <main>
      <section className={`business-page-hero ${tone}`}>
        <div className="container business-page-hero-inner">
          <Link className="back-link" href="/businesses">
            <ArrowLeft size={17} />
            All Businesses
          </Link>
          <div className="business-page-heading">
            <span className="eyebrow light">{eyebrow}</span>
            <h1>{name}</h1>
            <p>{tagline}</p>
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
            <p className="lead">{description}</p>
          </div>
          <div className="business-service-list">
            {services.map((service, index) => (
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
