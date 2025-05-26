import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

const defaultRedirects = {
  vigia: "calibrador-de-neumaticos",
  vitran: "monitor-de-presion",
};

const IntegracionesSectionPage = ({ params }) => {
  const { section } = params;
  const subsection = defaultRedirects[section];

  if (!subsection) {
    return notFound();
  }

  redirect(`/integraciones/${section}/${subsection}`);
};

export default IntegracionesSectionPage;
