import React from "react";
import { User } from "../(model)/conexion"; // Ajusta la ruta según la ubicación de tu modelo
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia"; // Misma función para precipitaciones y temperaturas

interface EstacionesSuperanMaxTempProps {
  users: User[];
}

const EstacionesSuperanMaxTemp: React.FC<EstacionesSuperanMaxTempProps> = ({
  users,
}) => {
  const estacionesQueSuperan = users
    .filter((user) => {
      const ultimoValorTemperaturaMax = obtenerUltimoValorPrecipitacion(
        user.t_max
      );
      return (
        ultimoValorTemperaturaMax !== null &&
        ultimoValorTemperaturaMax.valor !== null &&
        user.T_MAX_HIST !== null &&
        ultimoValorTemperaturaMax.valor > user.T_MAX_HIST
      );
    })
    .map((user) => {
      const ultimoValorTemperaturaMax = obtenerUltimoValorPrecipitacion(
        user.t_max
      );
      const diferencia =
        (ultimoValorTemperaturaMax?.valor ?? 0) - user.T_MAX_HIST;
      return {
        DEPARTAMENTO: user.DPTO,
        MUNICIPIO: user.MUNICIPIO,
        ESTACION: user.ESTACION,
        ULTIMO_VALOR: ultimoValorTemperaturaMax?.valor ?? "N/A", // Asumiendo que no será nulo por el filtro previo
        T_MAX_HIST: user.T_MAX_HIST,
        DIFERENCIA: diferencia.toFixed(1),
      };
    });

  if (estacionesQueSuperan.length === 0) {
    return (
      <div
        className="flex items-center justify-center md:mr-20 md:mt-40 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 md:p-4 bg-white border border-blue-800 dark:border-blue-700 rounded-lg shadow dark:bg-yellow-300"
        style={{ maxHeight: "100px" }}
      >
        <p className="text-gray-500 dark:text-gray-400">
          El día de hoy no se superaron registros históricos de temperatura
          máxima.
        </p>
      </div>
    );
  }

  return (
    <div>
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mr-3">
        <caption className="caption-top mt-2 text-slate-800 font-semibold">
          Valores de temperatura máxima que superaron el máximo histórico el día
          de hoy
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              DEPARTAMENTO
            </th>
            <th scope="col" className="py-3 px-6">
              MUNICIPIO
            </th>
            <th scope="col" className="py-3 px-6">
              ESTACIÓN
            </th>
            <th scope="col" className="py-3 px-6">
              ÚLTIMO VALOR (°C)
            </th>
            <th scope="col" className="py-3 px-6">
              T_MAX_HIST (°C)
            </th>
            <th scope="col" className="py-3 px-6">
              DIFERENCIA (°C)
            </th>
          </tr>
        </thead>
        <tbody>
          {estacionesQueSuperan.map((estacion, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="py-4 px-6">{estacion.DEPARTAMENTO}</td>
              <td className="py-4 px-6">{estacion.MUNICIPIO}</td>
              <td className="py-4 px-6">{estacion.ESTACION}</td>
              <td className="py-4 px-6">{estacion.ULTIMO_VALOR}</td>
              <td className="py-4 px-6">{estacion.T_MAX_HIST}</td>
              <td className="py-4 px-6">{estacion.DIFERENCIA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstacionesSuperanMaxTemp;
