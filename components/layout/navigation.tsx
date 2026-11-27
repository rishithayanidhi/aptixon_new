
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { INFOTECH_LOGIN_HREF } from "@/lib/auth";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Businesses", "/businesses"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];

const businessLinks = [
  ["Aptixon Infotech", INFOTECH_LOGIN_HREF],
  ["Aptixon Sports", "/businesses/sports"],
  ["Aptixon EVENTRA", "/businesses/eventra"],
];

export function Navigation() {
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
        <Link
          href="/"
          prefetch={false}
          className="brand"
          aria-label="Aptixon home"
        >
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
          {links.map(([name, href]) =>
            name === "Our Businesses" ? (
              <div
                className={`nav-dropdown ${businessMenuOpen ? "open" : "closed"}`}
                key={href}
                onMouseEnter={() => setBusinessMenuOpen(true)}
                onMouseLeave={() => setBusinessMenuOpen(false)}
              >
                <button
                  type="button"
                  className={isActive("/businesses") ? "active" : undefined}
                  aria-expanded={businessMenuOpen}
                  onClick={() => setBusinessMenuOpen((current) => !current)}
                >
                  {name}
                  <ChevronDown size={14} />
                </button>

                <div className="nav-dropdown-menu">
                  {businessLinks.map(([businessName, businessHref]) => (
                    <Link
                      key={businessHref}
                      href={businessHref}
                      prefetch={false}
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
                key={href}
                href={href}
                prefetch={false}
                className={isActive(href) ? "active" : undefined}
                aria-current={isActive(href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ),
          )}
        </nav>

        <Link
          className="btn btn-green nav-cta"
          href="/contact"
          prefetch={false}
        >
          <Mail size={17} /> Get in Touch
        </Link>
      </div>
    </header>
  );
}
