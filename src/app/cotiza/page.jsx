import { redirect } from "next/navigation";

export default function CotizaPage({ searchParams }) {
  const params = new URLSearchParams(searchParams).toString();
  // Redirect permite redirigir desde el lado del servidor
  redirect(`/cotiza/paso-1${params ? `?${params}` : ""}`);
  // Conservo los searchParams por si se accedió a /cotiza con UTMs en los params
}
