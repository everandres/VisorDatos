import React from "react";
import { User } from "../(model)/conexion";
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia";

interface EstacionesSuperanMaxProps {
  users: User[];
}

const EstacionesSuperanMaxPrec: React.FC<EstacionesSuperanMaxProps> = ({
  users,
}) => {
  const estacionesQueSuperan = users
    .filter((user) => {
      const ultimoValorPrecipitacion = obtenerUltimoValorPrecipitacion(
        user.precipitacion
      );
      return (
        ultimoValorPrecipitacion !== null &&
        ultimoValorPrecipitacion.valor !== null &&
        user.MAX_HIST !== null &&
        user.MAX_HIST !== undefined &&
        ultimoValorPrecipitacion.valor > user.MAX_HIST
      );
    })
    .map((user) => {
      const ultimoValorPrecipitacion = obtenerUltimoValorPrecipitacion(
        user.precipitacion
      );
      // Proporcionar un valor por defecto antes de realizar operaciones
      const ultimoValor = ultimoValorPrecipitacion?.valor ?? 0;
      const maxHist = user.MAX_HIST ?? 0; // Asegurar un valor por defecto para MAX_HIST también
      return {
        DEPARTAMENTO: user.DPTO,
        MUNICIPIO: user.MUNICIPIO,
        ESTACION: user.ESTACION,
        // Asegurar formato decimal y proporcionar un valor por defecto
        ULTIMO_VALOR: ultimoValor.toFixed(1),
        MAX_HIST: maxHist.toFixed(1),
        DIFERENCIA: (ultimoValor - maxHist).toFixed(1),
      };
    });

  if (estacionesQueSuperan.length === 0) {
    return (
      <div
        className="flex items-center md:mr-20 md:mt-40 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 md:p-4 bg-white border border-blue-800 dark:border-blue-700 rounded-lg shadow dark:bg-yellow-300"
        style={{ maxHeight: "100px" }}
      >
        <p className="text-gray-500 dark:text-gray-400">
          El día de hoy no se superaron registros históricos.
        </p>
      </div>
    );
  }

  return (
    <div>
      <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mr-3">
        <caption className="caption-top mt-2 text-slate-500 mb-4 ">
          Valores de precipitación que superaron el máximo histórico el día de
          hoy
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
              ÚLTIMO VALOR (mm)
            </th>
            <th scope="col" className="py-3 px-6">
              MAX_HIST (mm)
            </th>
            <th scope="col" className="py-3 px-6">
              DIFERENCIA (mm)
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
              <td className="py-4 px-6">{estacion.MAX_HIST}</td>
              <td className="py-4 px-6">{estacion.DIFERENCIA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstacionesSuperanMaxPrec;
