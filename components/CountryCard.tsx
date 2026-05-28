import Link from "next/link";
import { Country } from "@/types/country";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="card-image-container">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="card-flag"
        />
        <div className="card-overlay" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{country.name.common}</h3>
        <div className="card-details">
          <div className="card-detail-item">
            <svg
              className="card-detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>Capital: {country.capital?.[0] || "N/A"}</span>
          </div>
          <div className="card-detail-item">
            <svg
              className="card-detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            <span>Region: {country.region}</span>
          </div>
          <div className="card-detail-item">
            <svg
              className="card-detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>Population: {country.population.toLocaleString()}</span>
          </div>
        </div>
        <Link href={`/countries/${country.cca3}`} className="card-link">
          View Details
          <svg
            className="card-link-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
