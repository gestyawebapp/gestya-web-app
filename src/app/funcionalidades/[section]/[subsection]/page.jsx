import CargasDeCombustible from "@/components/funcionalidades/subsections/ahorro-de-combustible/CargasDeCombustible";
import Planificacion from "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Planificacion";
import HorasDeMarcha from "@/components/funcionalidades/subsections/control-y-mantenimiento/HorasDeMarcha";
import Logistica from "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Logistica";
import Alarmas from "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Alarmas";
import Gestion from "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Gestion";
import EcoDrive from "@/components/funcionalidades/subsections/ahorro-de-combustible/EcoDrive";
import Scoring from "@/components/funcionalidades/subsections/control-y-mantenimiento/Scoring";
import Wifi from "@/components/funcionalidades/subsections/control-y-mantenimiento/Wifi";
import { notFound } from "next/navigation";

const componentMap = {
  "seguimiento-de-vehiculos/gestion": Gestion,
  "seguimiento-de-vehiculos/logistica": Logistica,
  "seguimiento-de-vehiculos/planificacion": Planificacion,
  "seguimiento-de-vehiculos/alarmas": Alarmas,
  "ahorro-de-combustible/eco-drive": EcoDrive,
  "ahorro-de-combustible/cargas-de-combustible": CargasDeCombustible,
  "control-y-mantenimiento/horas-de-marcha": HorasDeMarcha,
  "control-y-mantenimiento/scoring": Scoring,
  "control-y-mantenimiento/wifi": Wifi,
};

const FuncionalidadesSubsectionPage = ({ params }) => {
  const { section, subsection } = params;
  const key = `${section}/${subsection}`;

  const Component = componentMap[key];

  if (!Component) return notFound();

  return <Component />;
};

export default FuncionalidadesSubsectionPage;
