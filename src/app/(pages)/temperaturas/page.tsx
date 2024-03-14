// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext
"use client";

import { useUsers } from "@/app/context/usercontext";
import React from "react";
import ComponenteConFecha from "@/app/components/fecha";
import TablaTemperaturasMinimas from "@/app/components/tablatemperaturaminima";
import TablaTemperaturasMaximas from "@/app/components/tablatemperaturamaxima";
import EstacionesSuperanMaxTemp from "@/app/components/temperaturamaximahistorica";
import EstacionesSuperanMinTemp from "@/app/components/temperaturaminimahistorica";

const ComponenteConTemperaturas: React.FC = () => {
  const { users } = useUsers();

  return (
    <div>
      <h1 className="text-1xl font-bold flex justify-center text-gray-500 mt-2">
        Información de Temperaturas Máximas y Minínimas Nacionales
      </h1>
      <ComponenteConFecha />
      <br />
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h4 className="text-1xl font-semibold flex justify-center text-gray-400 mt-2">
        Filtro de informacion de Temperaturas Máximas y Minínimas
      </h4>
      <br />
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex  justify-between gap-20 mt-8 mb-10 mr-3">
        <div className="w-4/5 mx-auto">
          <TablaTemperaturasMinimas users={users} />
        </div>
        <div className="w-4/5 mx-auto">
          <TablaTemperaturasMaximas users={users} />
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h4 className="text-1xl font-semibold flex justify-center text-gray-400 mt-2">
        Información de Temperaturas Máximas y Minínimas Nacionales que superan
        el registro histórico
      </h4>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex  justify-between gap-20 mt-8 mb-10 mr-3 ml-20">
        <div className="w-4/5 mx-auto">
          <EstacionesSuperanMaxTemp users={users} />
        </div>
        <div className="w-4/5 mx-auto">
          <EstacionesSuperanMinTemp users={users} />
        </div>
      </div>
    </div>
  );
};

export default ComponenteConTemperaturas;
