import Link from "next/link";
import { ArrowRight, Code2, Music2, Trophy } from "lucide-react";

const businesses = [
  {
    name: "Aptixon Infotech",
    description:
      "Technology solutions, digital products and modern software for growing organizations.",
    href: "/businesses/infotech",
    icon: Code2,
    tone: "blue",
  },
  {
    name: "Aptixon Sports",
    description:
      "Sports leagues, tournaments and grassroots initiatives that move communities forward.",
    href: "/businesses/sports",
    icon: Trophy,
    tone: "green",
  },
  {
    name: "Aptixon EVENTRA",
    description:
      "Complete event experiences, from planning and registration to operations and technology.",
    href: "/businesses/eventra",
    icon: Music2,
    tone: "purple",
  },
];

export default function BusinessHomePage() {
  return (
    <main>
      <section className="business-overview-hero">
        <div className="container">
          <span className="eyebrow light">OUR BUSINESSES</span>
          <h1>Three ventures. One shared ambition.</h1>
          <p>Explore Aptixon across technology, sports and live experiences.</p>
        </div>
      </section>

      <section className="business-overview-section">
        <div className="container business-overview-grid">
          {businesses.map((business) => {
            const Icon = business.icon;

            return (
              <Link
                className="business-overview-card"
                href={business.href}
                key={business.name}
              >
                <div className={`business-overview-icon ${business.tone}`}>
                  <Icon size={32} />
                </div>
                <h2>{business.name}</h2>
                <p>{business.description}</p>
                <span className="business-overview-link">
                  Explore business
                  <ArrowRight size={17} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
