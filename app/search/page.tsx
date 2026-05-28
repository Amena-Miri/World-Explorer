import CountrySearch from "@/components/CountrySearch";
import { Country } from "@/types/country";

// This page can be statically rendered and cached.
export default async function SearchPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,region,population",
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries: Country[] = await res.json();

  return (
    <div className="container" style={{ padding: "4rem 2rem" }}>
      <div className="text-center" style={{ marginBottom: "2rem" }}>
        <h1 className="section-title">Search Countries</h1>
        <p className="section-subtitle">
          Find countries by name or filter by region.
        </p>
      </div>

      <CountrySearch countries={countries} />
    </div>
  );
}