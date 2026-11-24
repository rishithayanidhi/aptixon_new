"use client";
import { PageHero } from "@/components/site";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's make something happen."
        desc="Have a question, a project idea or a partnership opportunity? We'd love to hear from you."
      />
      <section className="content-section">
        <div className="container contact-layout">
          <div>
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Start a conversation.</h2>
            <p className="lead">
              Connect with Aptixon and tell us how we can help.
            </p>
            <div className="contact-method">
              <Mail />
              <div>
                <b>Email</b>
                <span>Use the enquiry form to reach our team.</span>
              </div>
            </div>
            <div className="contact-method">
              <Phone />
              <div>
                <b>Phone</b>
                <span>
                  Contact details can be configured by the site administrator.
                </span>
              </div>
            </div>
            <div className="contact-method">
              <MapPin />
              <div>
                <b>Location</b>
                <span>India</span>
              </div>
            </div>
          </div>
          <form
            className="form-card"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2>Send an enquiry</h2>
            {sent ? (
              <div className="success">
                Thank you. Your enquiry has been recorded in this frontend demo.
              </div>
            ) : (
              <>
                <label>
                  Name
                  <input required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input required type="email" placeholder="Email address" />
                </label>
                <label>
                  I'm interested in
                  <select>
                    <option>General enquiry</option>
                    <option>Technology services</option>
                    <option>Sports & games</option>
                    <option>Eventra</option>
                    <option>Partnership</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea required rows={5} placeholder="How can we help?" />
                </label>
                <button className="btn btn-green">Send message</button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
