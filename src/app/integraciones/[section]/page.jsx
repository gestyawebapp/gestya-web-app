import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

const defaultRedirects = {
  vigia: "protector-de-motor",
  vitran: "eco-drive",
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
