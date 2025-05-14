import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

const defaultRedirects = {
  "seguimiento-de-vehiculos": "gestion",
  "ahorro-de-combustible": "eco-drive",
  "control-y-mantenimiento": "horas-de-marcha",
};

const FuncionalidadesSectionPage = ({ params }) => {
  const { section } = params;
  const subsection = defaultRedirects[section];

  if (!subsection) {
    return notFound();
  }

  redirect(`/funcionalidades/${section}/${subsection}`);
};

export default FuncionalidadesSectionPage;
