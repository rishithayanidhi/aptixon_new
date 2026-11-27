import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Trophy,
  Music2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
const businesses = [
  {
    name: "Aptixon Infotech",
    tag: "Technology That Moves Business Forward.",
    desc: "Digital products and technology services designed to help organizations move forward.",
    items: [
      "Software Development",
      "Web & Mobile Applications",
      "IT Consulting",
      "Automation Solutions",
      "Digital Transformation",
    ],
    tone: "blue",
    icon: Code2,
    href: "/businesses/infotech",
  },
  {
    name: "Aptixon Sports and Games Ventures",
    tag: "Building the Future of Sports.",
    desc: "Creating opportunities through sports, leagues and grassroots development.",
    items: [
      "Football League Management",
      "Sports Events",
      "Youth Development",
      "Sports Tournaments",
      "Sports Infrastructure & Partnerships",
    ],
    tone: "green",
    icon: Trophy,
    href: "/businesses/sports",
  },
  {
    name: "Aptixon EVENTRA",
    tag: "Every Event. One Experience.",
    desc: "End-to-end event experiences powered by thoughtful planning and technology.",
    items: [
      "Event Management",
      "Event Planning",
      "Event Registration",
      "Event Ticketing",
      "Event Technology",
    ],
    tone: "purple",
    icon: Music2,
    href: "/businesses/eventra",
  },
];
export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">
              APTIXON · INNOVATION IN MOTION
            </span>
            <h1>
              Building the Future
              <br />
              Through <em>Innovation.</em>
            </h1>
            <p>
              Aptixon is a diversified business group delivering technology
              solutions, developing sporting opportunities and creating
              innovative event experiences.
            </p>
            <div className="hero-actions">
              <Link
                className="btn btn-green"
                href="/businesses"
                prefetch={false}
              >
                Explore Our Businesses <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-outline" href="/about" prefetch={false}>
                About Aptixon
              </Link>
            </div>
          </div>
          <div
            className="hero-panels"
            aria-label="Technology, sports and live events"
          >
            <div className="panel panel-tech">
              <Code2 />
              <span>TECHNOLOGY</span>
            </div>
            <div className="panel panel-sport">
              <Trophy />
              <span>SPORTS & GAMES</span>
            </div>
            <div className="panel panel-event">
              <Music2 />
              <span>LIVE EXPERIENCES</span>
            </div>
          </div>
        </div>
      </section>
      <section className="business-section">
        <div className="container">
          <div className="section-heading">
            <span></span>
            <h2>
              A system built with smartness, precision, and advanced technology.
            </h2>
            <span></span>
          </div>
          <div className="business-grid">
            {businesses.map((b) => {
              const Icon = b.icon;
              return (
                <article className="business-card" key={b.name}>
                  <div className={`business-art ${b.tone}`}>
                    <Icon size={34} />
                    <h3>{b.name}</h3>
                  </div>
                  <div className="business-body">
                    <h4>{b.tag}</h4>
                    <p>{b.desc}</p>
                    <ul className="business-services-preview">
                      {b.items.slice(0, 3).map((i) => (
                        <li key={i}>
                          <CheckCircle2 size={17} />
                          {i}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className={`btn card-btn ${b.tone}`}
                      href={b.href}
                      prefetch={false}
                    >
                      Explore {b.name.split(" ")[1] || "More"}{" "}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">LET'S BUILD WHAT'S NEXT</span>
            <h2>Have an idea worth bringing to life?</h2>
            <p>Let's create something meaningful together.</p>
          </div>
          <Link className="btn btn-green" href="/contact" prefetch={false}>
            Start a Conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
