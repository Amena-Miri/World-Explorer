"use client";

import { useState, useMemo } from "react";
import CountryCard from "@/components/CountryCard";
import { Country } from "@/types/country";

interface CountrySearchProps {
  countries: Country[];
}

const CountrySearch = ({ countries }: CountrySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filteredCountries = useMemo(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion && selectedRegion !== "All") {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    return filtered;
  }, [countries, searchTerm, selectedRegion]);

  return (
    <div>
      <div className="search-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search by country name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="region-filters">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region === "All" ? "" : region)}
              className={`region-btn ${
                (region === "All" && !selectedRegion) ||
                selectedRegion === region
                  ? "active"
                  : ""
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      <div className="results-count">
        Found <span>{filteredCountries.length}</span> countries
      </div>

      {filteredCountries.length > 0 ? (
        <div className="countries-grid">
          {filteredCountries.slice(0, 20).map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      ) : (
        <div className="text-center" style={{ padding: "4rem" }}>
          <p>No countries found matching your search.</p>

          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedRegion("");
            }}
            className="btn-primary"
            style={{ marginTop: "1rem" }}
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default CountrySearch;
