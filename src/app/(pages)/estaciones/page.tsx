// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext
"use client";

import { useUsers } from "@/app/context/usercontext";
import React from "react";
import GraficaPrecipitacion, {
  sumarPrecipitaciones,
} from "@/app/components/graficabarras";
import ComponenteConFecha from "@/app/components/fecha";
import EstacionMaximaPrecipitacion from "@/app/components/maxima";
import EstacionesSuperanMaxHist from "@/app/components/historica";
import TablaPrecipitaciones from "@/app/components/tablaprecipitacion";
import EstacionesSuperanMaxPrec from "@/app/components/precipitacionhistorica";

const ComponenteConGrafica: React.FC = () => {
  const { users } = useUsers();
  const datosTransformados = sumarPrecipitaciones(users);

  return (
    <div>
      <ComponenteConFecha />
      <GraficaPrecipitacion datos={datosTransformados} />
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex justify-center gap-20 mt-2 mb">
        <EstacionMaximaPrecipitacion users={users} />
        <EstacionesSuperanMaxHist users={users} />
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex justify-between align-items: center">
        <TablaPrecipitaciones users={users} />
        <EstacionesSuperanMaxPrec users={users} />
      </div>
    </div>
  );
};

export default ComponenteConGrafica;
