"use client";
import { PageHero } from "@/components/site";
import { useState } from "react";
const roles = [
  [
    "Frontend Developer",
    "Technology",
    "Build responsive web experiences with modern frontend tools.",
  ],
  [
    "Sports Operations Associate",
    "Sports",
    "Support sporting events, league coordination and on-ground operations.",
  ],
  [
    "Event Crew Associate",
    "Events",
    "Help deliver safe, organized and memorable live experiences.",
  ],
];
export default function Careers() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <PageHero
        eyebrow="CAREERS AT APTIXON"
        title="Bring your energy. Build what's next."
        desc="Join a team working across technology, sports and live experiences."
      />
      <section className="content-section">
        <div className="container careers-layout">
          <div>
            <span className="eyebrow">OPPORTUNITIES</span>
            <h2>Find your place on the team.</h2>
            {roles.map((r) => (
              <article className="role-card" key={r[0]}>
                <span className="role-type">{r[1]}</span>
                <h3>{r[0]}</h3>
                <p>{r[2]}</p>
                <button
                  className="text-action"
                  onClick={() =>
                    document
                      .getElementById("apply")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Apply now →
                </button>
              </article>
            ))}
          </div>
          <form
            id="apply"
            className="form-card"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <span className="eyebrow">WORK WITH US</span>
            <h2>Share your interest</h2>
            {sent ? (
              <div className="success">
                Thanks! Your interest has been captured in this demo. The
                production version can connect this form to the recruitment API.
              </div>
            ) : (
              <>
                <label>
                  Full name
                  <input required placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input type="email" required placeholder="you@example.com" />
                </label>
                <label>
                  Area of interest
                  <select>
                    <option>Technology</option>
                    <option>Sports</option>
                    <option>Events</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about yourself"
                  />
                </label>
                <button className="btn btn-green" type="submit">
                  Submit application
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
