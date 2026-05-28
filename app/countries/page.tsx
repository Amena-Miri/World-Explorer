import CountryCard from "@/components/CountryCard";
import { Country } from "@/types/country";

// This page can be statically rendered and cached.
export default async function CountriesPage() {
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
      <div className="text-center" style={{ marginBottom: "3rem" }}>
        <h1 className="section-title">Explore Countries</h1>
        <p className="section-subtitle">
          Discover detailed information about countries from around the world.
          Click on any country to learn more.
        </p>
      </div>

      <div className="countries-grid">
        {countries.slice(0, 20).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}