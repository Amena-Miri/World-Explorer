interface CountryPageProps {
  params: {
    code: string
  }
}

export default function CountryDetailPage({ params }: CountryPageProps) {
  return (
    <main>
      <h1>Country: {params.code.toUpperCase()}</h1>
      <p>Details for country code: {params.code}</p>
    </main>
  )
}
