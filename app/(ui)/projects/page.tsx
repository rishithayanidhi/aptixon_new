import { ArrowRight, Code2, Trophy, CalendarDays } from "lucide-react";
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
    <main className="projects-page">
      <section className="page-hero projects-hero">
        <div className="container projects-hero-layout">
          <div className="projects-hero-copy">
            <span className="eyebrow">OUR PROJECTS</span>
            <h1>
              Ideas Turned into
              <br />
              <span>Experiences.</span>
            </h1>
            <p>
              A look at the areas where Aptixon applies technology, sporting
              expertise and event execution.
            </p>
            <div className="projects-hero-categories">
              {projects.map((project) => {
                const Icon = project.i;
                const label =
                  project.c === "Technology"
                    ? "Technology Solutions"
                    : project.c === "Sports"
                      ? "Sports Operations"
                      : "Event Experiences";
                return (
                  <div className="projects-hero-category" key={project.c}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="projects-hero-art" aria-hidden="true">
            {projects.map((project, index) => {
              const Icon = project.i;
              return (
                <div
                  className={`projects-hero-panel panel-${index + 1}`}
                  key={project.c}
                >
                  <img src={project.image} alt="" />
                  <span className="projects-hero-panel-icon">
                    <Icon />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="content-section project-showcase">
        <div className="container project-grid">
          {projects.map((p) => {
            const I = p.i;
            return (
              <article className="project-card" key={p.n}>
                <div className="project-art">
                  <img src={p.image} alt="" />
                  <span className="project-art-icon">
                    <I aria-hidden="true" />
                  </span>
                </div>
                <div className="project-info">
                  <span className="eyebrow">{p.c}</span>
                  <h3>{p.n}</h3>
                  <p>{p.d}</p>
                  <span className="project-note">
                    Portfolio Showcase <ArrowRight size={16} />
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
