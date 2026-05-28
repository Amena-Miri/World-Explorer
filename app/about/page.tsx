export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "4rem 2rem" }}>
      <div className="text-center" style={{ marginBottom: "3rem" }}>
        <h1 className="section-title">About World Explorer</h1>
        <p className="section-subtitle">
          A modern Next.js application that showcases countries from around the
          world.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3 className="feature-title">Next.js 14 App Router</h3>
          <p className="feature-description">
            File-based routing with app directory structure
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚛️</div>
          <h3 className="feature-title">Server Components</h3>
          <p className="feature-description">
            Async data fetching and server-side rendering
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3 className="feature-title">Client Components</h3>
          <p className="feature-description">
            Interactive search with useState hook
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📁</div>
          <h3 className="feature-title">Dynamic Routes</h3>
          <p className="feature-description">
            Dynamic [code] routes for country details
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💾</div>
          <h3 className="feature-title">Data Caching</h3>
          <p className="feature-description">
            force-cache and no-store strategies
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3 className="feature-title">Pure CSS</h3>
          <p className="feature-description">
            No Tailwind, custom professional styling
          </p>
        </div>
      </div>

      <div
        className="feature-card"
        style={{ marginTop: "2rem", textAlign: "center" }}
      >
        <h3 className="feature-title">API Credit</h3>
        <p className="feature-description">
          Data provided by{" "}
          <a
            href="https://restcountries.com"
            target="_blank"
            style={{ color: "var(--primary)" }}
          >
            REST Countries API
          </a>
        </p>
      </div>
    </div>
  );
}
