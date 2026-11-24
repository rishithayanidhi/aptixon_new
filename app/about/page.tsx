import { PageHero } from "@/components/site";
import { Target, Eye, HeartHandshake, Lightbulb } from "lucide-react";
export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="WHO WE ARE"
        title="Building better possibilities, together."
        desc="Aptixon brings technology, sports and live experiences together under one vision: creating meaningful opportunities through innovation."
      />
      <section className="content-section">
        <div className="container split">
          <div>
            <span className="eyebrow">ABOUT APTIXON</span>
            <h2>A diversified group with a shared purpose.</h2>
            <p className="lead">
              We work across technology solutions, sporting opportunities and
              event experiences—connecting ideas, people and execution.
            </p>
            <p>
              Our approach is grounded in collaboration, practical
              problem-solving and a commitment to delivering experiences and
              solutions that make a difference.
            </p>
          </div>
          <span className="about-visual">
              <img src="/images/about_us.jpeg" alt="Aptixon" />
          </span>
        </div>
      </section>
      <section className="content-section soft">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>Purpose in every direction.</h2>
          </div>
          <div className="values-grid">
            <article>
              <Target />
              <h3>Our Mission</h3>
              <p>
                Deliver thoughtful technology, sports and event solutions that
                create value and opportunity.
              </p>
            </article>
            <article>
              <Eye />
              <h3>Our Vision</h3>
              <p>
                Build a connected future where innovation and collaboration help
                people and businesses thrive.
              </p>
            </article>
            <article>
              <HeartHandshake />
              <h3>Our Values</h3>
              <p>
                Integrity, teamwork, ownership and a commitment to continuous
                improvement.
              </p>
            </article>
            <article>
              <Lightbulb />
              <h3>Our Approach</h3>
              <p>
                Bring smart ideas together with precise execution and a
                people-first mindset.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
