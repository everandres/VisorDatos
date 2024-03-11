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
    </div>
  );
};

export default ComponenteConGrafica;

/*

export default function UserComponent() {
  const { users } = useUsers(); // Usamos el hook para acceder a los datos de los usuarios

  // Renderiza una lista de usuarios mostrando detalles específicos de cada uno
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.CODIGO}>
            <h3>
              {user.ESTACION} - {user.DPTO}
            </h3>
            <p>
              <strong>Código:</strong> {user.CODIGO}
            </p>
            <p>
              <strong>Ubicación:</strong> {user.LAT}, {user.LON} (Lat, Lon)
            </p>
            <p>
              <strong>Elevación:</strong> {user.ELEV} metros
            </p>
            <p>
              <strong>Área Hidrográfica:</strong> {user.AREA_HIDROGRAFICA}
            </p>
            <p>
              <strong>Zona Hidrográfica:</strong> {user.ZONA_HIDROGRAFICA}
            </p>
            <p>
              <strong>Subzona Hidrográfica:</strong> {user.SUBZONA_HIDROGRAFICA}
            </p>
            <p>
              <strong>Precipitación Máxima Histórica:</strong> {user.MAX_HIST}{" "}
              mm
            </p>
            {/* Aquí podrías agregar más campos según sea necesario }
          </li>
        ))}
      </ul>
    </div>
  );
}

*/
