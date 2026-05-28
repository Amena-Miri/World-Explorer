"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/countries", label: "Countries" },
    { href: "/search", label: "Search" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <svg className="navbar-logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>World Explorer</span>
          </Link>

          <div className="navbar-menu">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;