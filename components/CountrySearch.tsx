export default function CountrySearch() {
  return (
    <form>
      <label htmlFor="country-search">Search countries</label>
      <input id="country-search" name="query" type="search" placeholder="Enter a country name" />
    </form>
  )
}
