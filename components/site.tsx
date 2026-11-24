"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Businesses", "/businesses"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];
const businessLinks = [
  ["Aptixon Infotech", "/businesses/infotech"],
  ["Aptixon Sports", "/businesses/sports"],
  ["Aptixon EVENTRA", "/businesses/eventra"],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setOpen(false);
    setBusinessMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Aptixon home">
          <img
            src="/images/aptixon-logo.jpeg"
            alt="Aptixon - Together We Build Better World"
          />
        </Link>
        <div className="brand-divider" />
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([n, u]) =>
            n === "Our Businesses" ? (
              <div
                className={`nav-dropdown ${businessMenuOpen ? "open" : "closed"}`}
                key={u}
                onMouseEnter={() => setBusinessMenuOpen(true)}
                onMouseLeave={() => setBusinessMenuOpen(false)}
              >
                <button
                  type="button"
                  className={isActive("/businesses") ? "active" : undefined}
                  aria-expanded={businessMenuOpen}
                  onClick={() => {
                    setBusinessMenuOpen((current) => !current);
                  }}
                >
                  {n}
                  <ChevronDown size={14} />
                </button>
                <div className="nav-dropdown-menu">
                  {businessLinks.map(([businessName, businessHref]) => (
                    <Link
                      key={businessHref}
                      href={businessHref}
                      onClick={() => {
                        setBusinessMenuOpen(false);
                        setOpen(false);
                      }}
                    >
                      {businessName}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={u}
                href={u}
                className={isActive(u) ? "active" : undefined}
                aria-current={isActive(u) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {n}
              </Link>
            ),
          )}
        </nav>
        <Link className="btn btn-green nav-cta" href="/contact">
          <Mail size={17} /> Get in Touch
        </Link>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-brand">
            <img src="/images/aptixon-logo.jpeg" alt="Aptixon" />
          </Link>
          <p>Together We Build Better World.</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/businesses">Businesses</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Unified Portal</Link>
        </div>
        <small>© 2026 Aptixon. All rights reserved.</small>
      </div>
    </footer>
  );
}
export function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}
