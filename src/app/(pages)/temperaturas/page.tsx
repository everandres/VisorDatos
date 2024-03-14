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
      <ComponenteConFecha />
      <div className="flex flex-col justify-between space-y-20 mt-8 mb-10 mr-3">
        <TablaTemperaturasMinimas users={users} />
        <TablaTemperaturasMaximas users={users} />
      </div>
    </div>
  );
};

export default ComponenteConTemperaturas;
