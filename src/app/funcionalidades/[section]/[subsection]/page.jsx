import FunctionalitySpecifics from "@/components/funcionalidades/FunctionalitySpecifics";
import { funcionalidadesData } from "@/app/funcionalidades/funcionalidadesData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(funcionalidadesData).map((key) => {
    const [section, subsection] = key.split("/");
    return { section, subsection };
  });
}

const FuncionalidadesSubsectionPage = ({ params }) => {
  const { section, subsection } = params;
  const data = funcionalidadesData[`${section}/${subsection}`];

  if (!data) return notFound();

  return <FunctionalitySpecifics {...data} />;
};

export default FuncionalidadesSubsectionPage;
