import Link from "next/link";
import { FaUsers, FaCity, FaGlobeAmericas, FaGlobe } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="hero-title">World Explorer</h1>
          <p className="hero-subtitle">
            Discover countries around the world. Learn about their flags, capitals,
            populations, currencies, and languages.
          </p>
          <div className="hero-buttons">
            <Link href="/countries" className="btn-primary">Start Exploring</Link>
            <Link href="/search" className="btn-secondary">Search Countries</Link>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <FaGlobeAmericas size={40} />
            </div>
            <div className="stat-value">250+</div>
            <div className="stat-label">Countries</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaUsers size={40} />
            </div>
            <div className="stat-value">8B+</div>
            <div className="stat-label">Population</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaCity size={40} />
            </div>
            <div className="stat-value">195+</div>
            <div className="stat-label">Capitals</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaGlobe size={40} />
            </div>
            <div className="stat-value">7</div>
            <div className="stat-label">Continents</div>
          </div>
        </div>
      </div>

      <section className="cta-section">
        <div className="container text-center">
          <h3 className="cta-title">Ready to Explore?</h3>
          <p className="cta-description">
            Discover fascinating facts about countries from all around the world.
          </p>
          <Link href="/countries" className="btn-primary">Browse All Countries</Link>
        </div>
      </section>
    </>
  );
}