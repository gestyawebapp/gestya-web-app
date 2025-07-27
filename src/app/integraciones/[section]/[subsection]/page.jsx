import OvalSpinner from "@/components/layout/OvalSpinner";
import { notFound } from "next/navigation";

/* Utilizo dynamic imports de Next Js para importar los componentes solo cuando sean requeridos por el usuario (y no todos desde un principio) */

const componentMap = {
  "vigia/protector-de-motor": dynamic(
    () =>
      import("@/components/integraciones/subsections/vigia/ProtectorDeMotor"),
    { loading: () => <OvalSpinner /> }
  ),
  "vigia/calibrador-de-neumaticos": dynamic(
    () =>
      import(
        "@/components/integraciones/subsections/vigia/CalibradorDeNeumaticos"
      ),
    { loading: () => <OvalSpinner /> }
  ),
  "vitran/monitor-de-presion": dynamic(
    () =>
      import("@/components/integraciones/subsections/vitran/MonitorDePresion"),
    { loading: () => <OvalSpinner /> }
  ),
};

const IntegracionesSubsectionPage = ({ params }) => {
  const { section, subsection } = params;
  const key = `${section}/${subsection}`;

  const Component = componentMap[key];

  if (!Component) return notFound();

  return <Component />;
};

export default IntegracionesSubsectionPage;
