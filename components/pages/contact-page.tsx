"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="contact-page">
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="eyebrow">CONTACT US</span>
          <h1>
            Let&apos;s make something <span>happen.</span>
          </h1>
          <p>
            Have a question, a project idea or a partnership opportunity?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>
      <section className="content-section contact-content">
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
                <span>administrator@aptixon.com</span>
              </div>
            </div>
            {/* <div className="contact-method">
              <Phone />
              <div>
                <b>Phone</b>
                <span>
                  Contact details can be configured by the site administrator.
                </span>
              </div>
            </div> */}
            <div className="contact-method">
              <MapPin />
              <div>
                <b>Location</b>
                <span>Banaswadi, Bengaluru, Karnataka, India</span>
              </div>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="Map showing Banaswadi, Bengaluru, Karnataka"
                src="https://maps.google.com/maps?q=13.0103761%2C77.6481944&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            {/* <a
              className="contact-map-link"
              href="https://maps.app.goo.gl/SUw2FTJeDYJtT1XN8"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a> */}
          </div>
          <form
            className="form-card contact-form"
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
                  Query to work on
                  <select>
                    <option>General enquiry</option>
                    <option>aptixon infotech</option>
                    <option>aptixon sports &amp; games</option>
                    <option>aptixon eventra</option>
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
