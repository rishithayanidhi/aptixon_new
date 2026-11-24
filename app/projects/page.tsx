import { PageHero } from "@/components/site";
import { ArrowUpRight, Code2, Trophy, CalendarDays } from "lucide-react";
const projects = [
  {
    n: "Digital Platforms",
    c: "Technology",
    d: "Web and mobile experiences designed around real business workflows.",
    i: Code2,
    image: "/images/aptixon-infotech.png",
  },
  {
    n: "Sports & League Operations",
    c: "Sports",
    d: "Event operations and sporting initiatives that connect players, teams and communities.",
    i: Trophy,
    image: "/images/aptixon-sports.png",
  },
  {
    n: "Live Event Experiences",
    c: "Events",
    d: "Registration, ticketing and event coordination experiences from planning to delivery.",
    i: CalendarDays,
    image: "/images/aptixon-events.png",
  },
];
export default function Projects() {
  return (
    <main>
      <PageHero
        eyebrow="OUR WORK"
        title="Ideas turned into experiences."
        desc="A look at the areas where Aptixon applies technology, sporting expertise and event execution."
      />
      <section className="content-section">
        <div className="container project-grid">
          {projects.map((p) => {
            const I = p.i;
            return (
              <article className="project-card" key={p.n}>
                <div
                  className="project-art"
                  style={{
                    backgroundImage: `linear-gradient(135deg,#062454b8,#087ec4b0),url('${p.image}')`,
                  }}
                >
                  <I size={48} />
                  <span>{p.c}</span>
                </div>
                <div className="project-info">
                  <span className="eyebrow">{p.c}</span>
                  <h3>{p.n}</h3>
                  <p>{p.d}</p>
                  <span className="project-note">
                    Portfolio showcase <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
