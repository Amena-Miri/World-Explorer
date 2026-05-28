interface CountryCardProps {
  name: string
  code: string
  region?: string
}

export default function CountryCard({ name, code, region }: CountryCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Code: {code}</p>
      {region ? <p>Region: {region}</p> : null}
    </article>
  )
}
