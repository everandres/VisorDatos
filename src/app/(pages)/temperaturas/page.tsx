// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext
"use client";

import { useUsers } from "@/app/context/usercontext";
import React from "react";
import ComponenteConFecha from "@/app/components/fecha";
import TablaTemperaturasMinimas from "@/app/components/tablatemperaturaminima";
import TablaTemperaturasMaximas from "@/app/components/tablatemperaturamaxima";

const ComponenteConTemperaturas: React.FC = () => {
  const { users } = useUsers();

  return (
    <div>
      <h1 className="text-1xl font-bold flex justify-center text-gray-500 mt-2">
        Información de Temperaturas Máximas y Minínimas Nacionales
      </h1>
      <ComponenteConFecha />
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex  justify-between gap-20 mt-8 mb-10 mr-3">
        <div className="w-4/5 mx-auto">
          <TablaTemperaturasMinimas users={users} />
        </div>
        <div className="w-4/5 mx-auto">
          <TablaTemperaturasMaximas users={users} />
        </div>
      </div>
    </div>
  );
};

export default ComponenteConTemperaturas;
