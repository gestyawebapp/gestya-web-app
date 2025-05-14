import IntegrationSpecifics from "@/components/integraciones/IntegrationSpecifics";
import { integracionesData } from "@/app/integraciones/integracionesData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(integracionesData).map((key) => {
    const [section, subsection] = key.split("/");
    return { section, subsection };
  });
}

const IntegracionesSubsectionPage = ({ params }) => {
  const { section, subsection } = params;
  const data = integracionesData[`${section}/${subsection}`];

  if (!data) return notFound();

  return <IntegrationSpecifics {...data} />;
};

export default IntegracionesSubsectionPage;
