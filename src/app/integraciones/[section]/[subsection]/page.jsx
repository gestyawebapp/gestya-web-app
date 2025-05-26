import CalibradorDeNeumaticos from "@/components/integraciones/subsections/vigia/CalibradorDeNeumaticos";
import ProtectorDeMotor from "@/components/integraciones/subsections/vigia/ProtectorDeMotor";
import MonitorDePresion from "@/components/integraciones/subsections/vitran/MonitorDePresion";
import { notFound } from "next/navigation";

const componentMap = {
  "vigia/protector-de-motor": ProtectorDeMotor,
  "vigia/calibrador-de-neumaticos": CalibradorDeNeumaticos,
  "vitran/monitor-de-presion": MonitorDePresion,
};

const IntegracionesSubsectionPage = ({ params }) => {
  const { section, subsection } = params;
  const key = `${section}/${subsection}`;

  const Component = componentMap[key];

  if (!Component) return notFound();

  return <Component />;
};

export default IntegracionesSubsectionPage;
