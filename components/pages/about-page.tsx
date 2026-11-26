import { Target, Eye, HeartHandshake, Lightbulb } from "lucide-react";
export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="container">
          <span className="eyebrow">WHO WE ARE</span>
          <h1>
            Building better possibilities,
            <br />
            <span>together.</span>
          </h1>
          <p>
            Aptixon brings technology, sports and live experiences together
            under one vision: creating meaningful opportunities through
            innovation.
          </p>
        </div>
      </section>
      <section className="content-section about-story">
        <div className="container split">
          <div className="about-copy">
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
            <img
              src="/images/about_us.jpeg"
              alt="Aptixon team members forming the company logo"
            />
          </span>
        </div>
      </section>
      <section className="content-section soft about-guides">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>Purpose in every direction.</h2>
          </div>
          <div className="values-grid">
            <article className="about-value-card">
              <div className="about-value-heading">
                <span className="about-value-icon">
                  <Target />
                </span>
                <h3>Our Mission</h3>
              </div>
              <p>
                Deliver thoughtful technology, sports and event solutions that
                create value and opportunity.
              </p>
            </article>
            <article className="about-value-card">
              <div className="about-value-heading">
                <span className="about-value-icon">
                  <Eye />
                </span>
                <h3>Our Vision</h3>
              </div>
              <p>
                Build a connected future where innovation and collaboration help
                people and businesses thrive.
              </p>
            </article>
            <article className="about-value-card">
              <div className="about-value-heading">
                <span className="about-value-icon">
                  <HeartHandshake />
                </span>
                <h3>Our Values</h3>
              </div>
              <p>
                Integrity, teamwork, ownership and a commitment to continuous
                improvement.
              </p>
            </article>
            <article className="about-value-card">
              <div className="about-value-heading">
                <span className="about-value-icon">
                  <Lightbulb />
                </span>
                <h3>Our Approach</h3>
              </div>
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
