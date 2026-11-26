"use client";
import { useState } from "react";
import {
  CalendarDays,
  Code2,
  Gem,
  Mail,
  MessageCircle,
  Send,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
const roles = [
  {
    name: "Frontend Developer",
    category: "Technology",
    description: "Build responsive web experiences with modern frontend tools.",
    icon: Code2,
  },
  {
    name: "Sports Operations Associate",
    category: "Sports",
    description:
      "Support sporting events, league coordination and on-ground operations.",
    icon: Trophy,
  },
  {
    name: "Event Crew Associate",
    category: "Events",
    description: "Help deliver safe, organized and memorable live experiences.",
    icon: CalendarDays,
  },
];
export default function CareersPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="careers-page">
      <section className="page-hero careers-hero">
        <div className="careers-hero-image">
          <img
            src="/images/careers-office.png"
            alt="Aptixon team collaborating in a modern glass office"
          />
        </div>
        <div className="container careers-hero-layout">
          <div className="careers-hero-copy">
            <span className="eyebrow">CAREERS AT APTIXON</span>
            <h1>
              Bring your energy.
              <br />
              Build <span>what’s next.</span>
            </h1>
            <p>
              Join a team working across technology, sports and live
              experiences.
            </p>
            <div className="careers-benefits">
              <span>
                <Users aria-hidden="true" /> Collaborative Culture
              </span>
              <span>
                <TrendingUp aria-hidden="true" /> Growth Opportunities
              </span>
              <span>
                <Gem aria-hidden="true" /> Meaningful Impact
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section careers-content">
        <div className="container careers-layout">
          <div className="careers-opportunities">
            <span className="eyebrow">OPPORTUNITIES</span>
            <h2>Find your place on the team.</h2>
            <div className="careers-role-list">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <article className="role-card" key={role.name}>
                    <span className="career-role-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div className="career-role-copy">
                      <span className="role-type">{role.category}</span>
                      <h3>{role.name}</h3>
                      <p>{role.description}</p>
                    </div>
                    <button
                      type="button"
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
                );
              })}
            </div>
          </div>
          <form
            id="apply"
            className="form-card careers-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <span className="eyebrow">WORK WITH US</span>
            <h2>Share your interest</h2>
            {sent ? (
              <div className="success" role="status">
                Thanks! Your interest has been captured in this demo. The
                production version can connect this form to the recruitment API.
              </div>
            ) : (
              <>
                <label className="careers-field">
                  <Users aria-hidden="true" />
                  <span className="careers-sr-only">Your name</span>
                  <input required placeholder="Your name" autoComplete="name" />
                </label>
                <label className="careers-field">
                  <Mail aria-hidden="true" />
                  <span className="careers-sr-only">Email address</span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
                <label className="careers-field">
                  <Code2 aria-hidden="true" />
                  <span className="careers-sr-only">Area of interest</span>
                  <select defaultValue="Technology">
                    <option>Technology</option>
                    <option>Sports</option>
                    <option>Events</option>
                  </select>
                </label>
                <label className="careers-field careers-message-field">
                  <MessageCircle aria-hidden="true" />
                  <span className="careers-sr-only">Message</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about yourself"
                  />
                </label>
                <button className="btn btn-green" type="submit">
                  <Send aria-hidden="true" /> Submit Application
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
