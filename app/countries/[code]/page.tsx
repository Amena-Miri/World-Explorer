import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";

// This page fetches fresh data every time.
export default async function CountryDetailsPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    return notFound();
  }

  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c: any) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <div className="container" style={{ padding: "4rem 2rem" }}>
      <Link href="/countries" className="detail-back-link">
        <FaArrowLeft size={18} />
        Back to Countries
      </Link>

      <div className="detail-card">
        <div className="detail-grid">
          <div className="detail-flag-container">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="detail-flag"
            />
          </div>

          <div className="detail-content">
            <h1 className="detail-title">{country.name.common}</h1>

            <p className="detail-official">{country.name.official}</p>

            <div className="detail-info-grid">
              <div className="detail-info-item">
                <div>
                  <div className="detail-info-label">Capital</div>
                  <div className="detail-info-value">
                    {country.capital?.[0] || "N/A"}
                  </div>
                </div>
              </div>

              <div className="detail-info-item">
                <div>
                  <div className="detail-info-label">Region</div>
                  <div className="detail-info-value">
                    {country.region}{" "}
                    {country.subregion && `• ${country.subregion}`}
                  </div>
                </div>
              </div>

              <div className="detail-info-item">
                <div>
                  <div className="detail-info-label">Population</div>
                  <div className="detail-info-value">
                    {country.population.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="detail-info-item">
                <div>
                  <div className="detail-info-label">Languages</div>
                  <div className="detail-info-value">{languages}</div>
                </div>
              </div>

              <div className="detail-info-item">
                <div>
                  <div className="detail-info-label">Currencies</div>
                  <div className="detail-info-value">{currencies}</div>
                </div>
              </div>

              <div className="detail-info-item">
                <div>
                  <div className="detail-info-label">Time Zones</div>
                  <div className="detail-info-value">
                    {country.timezones?.join(", ") || "N/A"}
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-maps-link">
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaLocationDot size={18} />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}