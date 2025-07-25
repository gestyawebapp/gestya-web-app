import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

/* Utilizo dynamic imports de Next Js para importar los componentes solo cuando sean requeridos por el usuario (y no todos desde un principio) */

const componentMap = {
  "seguimiento-de-vehiculos/gestion": dynamic(
    () =>
      import(
        "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Gestion"
      ),
    {
      loading: () => <p>Cargando...</p>,
    }
  ),
  "seguimiento-de-vehiculos/logistica": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Logistica"
    )
  ),
  "seguimiento-de-vehiculos/planificacion": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Planificacion"
    )
  ),
  "seguimiento-de-vehiculos/alarmas": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/seguimiento-de-vehiculos/Alarmas"
    )
  ),
  "ahorro-de-combustible/eco-drive": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/ahorro-de-combustible/EcoDrive"
    )
  ),
  "ahorro-de-combustible/cargas-de-combustible": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/ahorro-de-combustible/CargasDeCombustible"
    )
  ),
  "control-y-mantenimiento/horas-de-marcha": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/control-y-mantenimiento/HorasDeMarcha"
    )
  ),
  "control-y-mantenimiento/scoring": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/control-y-mantenimiento/Scoring"
    )
  ),
  "control-y-mantenimiento/wifi": dynamic(() =>
    import(
      "@/components/funcionalidades/subsections/control-y-mantenimiento/Wifi"
    )
  ),
};

const FuncionalidadesSubsectionPage = ({ params }) => {
  const { section, subsection } = params;
  const key = `${section}/${subsection}`;

  const Component = componentMap[key];

  if (!Component) return notFound();

  return <Component />;
};

export default FuncionalidadesSubsectionPage;
