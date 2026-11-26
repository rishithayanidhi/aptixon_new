import Link from "next/link";
import { ArrowRight, Check, Code2 } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, responsive and secure websites for your business.",
    icon: Code2,
  },
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
          <aside className="infotech-service-highlight">
            <div>
              <span className="infotech-service-highlight-label">
                BUILT FOR YOUR BUSINESS
              </span>
              <h3>A stronger website starts here.</h3>
              <p>
                Thoughtful design and dependable technology, tailored to your
                goals.
              </p>
            </div>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Responsive on every screen
              </li>
              <li>
                <Check aria-hidden="true" />
                Fast, reliable performance
              </li>
              <li>
                <Check aria-hidden="true" />
                Secure and ready to grow
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
