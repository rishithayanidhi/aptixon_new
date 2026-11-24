"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Layers3,
  PenTool,
  Settings,
  Smartphone,
} from "lucide-react";

const locations = [
  {
    country: "United States",
    code: "US",
    flag: "🇺🇸",
    currency: "USD",
    locale: "en-US",
    usdRate: 1,
  },
  {
    country: "India",
    code: "IN",
    flag: "🇮🇳",
    currency: "INR",
    locale: "en-IN",
    usdRate: 83.5,
  },
  {
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    currency: "GBP",
    locale: "en-GB",
    usdRate: 0.79,
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    currency: "CAD",
    locale: "en-CA",
    usdRate: 1.37,
  },
  {
    country: "Australia",
    code: "AU",
    flag: "🇦🇺",
    currency: "AUD",
    locale: "en-AU",
    usdRate: 1.53,
  },
  {
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    currency: "EUR",
    locale: "de-DE",
    usdRate: 0.92,
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, responsive and secure websites for your business.",
    icon: Code2,
    priceUsd: 12,
  },
  {
    title: "Mobile App Development",
    description: "Create high-performance Android & iOS applications.",
    icon: Smartphone,
    priceUsd: 60,
  },
  {
    title: "Software Development",
    description:
      "Custom software and business applications for your unique needs.",
    icon: Layers3,
    priceUsd: 120,
  },
  {
    title: "UI/UX Design",
    description: "User-centered, modern and intuitive digital experiences.",
    icon: PenTool,
    priceUsd: 30,
  },
  {
    title: "IT Consulting",
    description: "Expert technology advice to solve your business challenges.",
    icon: BriefcaseBusiness,
    priceUsd: 36,
  },
  {
    title: "Automation Solutions",
    description: "Automate workflows and improve team efficiency.",
    icon: Settings,
    priceUsd: 90,
  },
];

export function InfotechServices() {
  const [selectedCode, setSelectedCode] = useState("US");
  const selectedLocation =
    locations.find((location) => location.code === selectedCode) ??
    locations[0];
  const formatter = new Intl.NumberFormat(selectedLocation.locale, {
    style: "currency",
    currency: selectedLocation.currency,
    maximumFractionDigits: 0,
  });

  return (
    <section className="infotech-services-section">
      <div className="container">
        <div className="infotech-section-heading">
          <div>
            <span className="infotech-heading-line" />
            <h2>Our IT Services</h2>
            <p>
              Choose from a wide range of technology services tailored to your
              needs.
            </p>
          </div>
          <div className="infotech-location">
            <label>
              <span>Your Location</span>
              <span className="location-select-wrap">
                <span className="location-flag" aria-hidden="true">
                  {selectedLocation.flag}
                </span>
                <select
                  aria-label="Your location"
                  value={selectedCode}
                  onChange={(event) => setSelectedCode(event.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location.code} value={location.code}>
                      {location.country}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} aria-hidden="true" />
              </span>
            </label>
            <div>
              <span>Currency</span>
              <output
                className="currency-display"
                aria-live="polite"
                aria-label={`Currency: ${selectedLocation.currency}`}
              >
                {selectedLocation.currency}
              </output>
            </div>
          </div>
        </div>

        <div className="infotech-services-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            const price = formatter.format(
              service.priceUsd * selectedLocation.usdRate,
            );

            return (
              <Link
                className="infotech-service-card"
                href="/contact"
                key={service.title}
              >
                <div className="infotech-service-top">
                  <ServiceIcon />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="infotech-service-footer">
                  <span>
                    Starting at <strong>&nbsp;{price}</strong>
                  </span>
                  <span className="infotech-service-arrow">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <p className="infotech-currency-note">
          Prices are indicative conversions from USD and may vary.
        </p>
      </div>
    </section>
  );
}
