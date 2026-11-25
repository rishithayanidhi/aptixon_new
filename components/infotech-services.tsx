import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, responsive and secure websites for your business.",
    icon: Code2,
  },
  /*
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
  */
];

export function InfotechServices() {
  return (
    <section className="infotech-services-section">
      <div className="container">
        <div className="infotech-section-heading">
          <div>
            <span className="infotech-heading-line" />
            <h2>Our IT Services</h2>
            <p>
              Explore our web development service and request a tailored quote.
            </p>
          </div>
        </div>

        <div className="infotech-services-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article
                className="infotech-service-card"
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
                  <Link
                    className="infotech-primary infotech-service-quote"
                    href="/businesses/infotech/request-a-quote"
                  >
                    Request a Quote
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
