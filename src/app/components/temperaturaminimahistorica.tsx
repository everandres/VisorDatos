import React from "react";
import { User } from "../(model)/conexion"; // Ajusta la ruta según la ubicación de tu modelo
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia"; // Función para obtener el último valor de precipitación y temperatura

interface EstacionesSuperanMinTempProps {
  users: User[];
}

const EstacionesSuperanMinTemp: React.FC<EstacionesSuperanMinTempProps> = ({
  users,
}) => {
  const estacionesQueSuperan = users
    .filter((user) => {
      const ultimoValorTemperaturaMin = obtenerUltimoValorPrecipitacion(
        user.t_min
      );
      return (
        ultimoValorTemperaturaMin !== null &&
        ultimoValorTemperaturaMin.valor !== null &&
        user.T_MIN_HIST !== null &&
        ultimoValorTemperaturaMin.valor < user.T_MIN_HIST
      );
    })
    .map((user) => {
      const ultimoValorTemperaturaMin = obtenerUltimoValorPrecipitacion(
        user.t_min
      );
      // Asegurando valores por defecto antes de las operaciones
      const ultimoValor = ultimoValorTemperaturaMin?.valor ?? 0;
      const minHist = user.T_MIN_HIST ?? 0; // Aseguramos un valor por defecto para T_MIN_HIST también
      const diferencia = minHist - ultimoValor; // Ajustamos el cálculo de la diferencia
      return {
        DEPARTAMENTO: user.DPTO,
        MUNICIPIO: user.MUNICIPIO,
        ESTACION: user.ESTACION,
        // Formateando los valores para mostrar un decimal
        ULTIMO_VALOR: ultimoValor.toFixed(1),
        T_MIN_HIST: minHist.toFixed(1),
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
          mínima.
        </p>
      </div>
    );
  }
  return (
    <div>
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mr-3">
        <caption className="caption-top mt-2 text-slate-800 font-semibold">
          Valores de temperatura mínima que fueron inferiores al mínimo
          histórico el día de hoy
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
              T_MIN_HIST (°C)
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
              <td className="py-4 px-6">{estacion.T_MIN_HIST}</td>
              <td className="py-4 px-6">{estacion.DIFERENCIA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstacionesSuperanMinTemp;
