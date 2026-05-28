import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/" className="btn-primary" style={{ marginTop: "1rem", display: "inline-block" }}>
        Go Home
      </Link>
    </div>
  );
}