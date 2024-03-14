import React, { useState } from "react";
import { User } from "../(model)/conexion"; // Asegúrate de que la ruta sea correcta
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia"; // Función que obtiene el último valor tanto de precipitaciones como de temperaturas

interface TablaTemperaturasMaximasProps {
  users: User[];
}

const TablaTemperaturasMaximas: React.FC<TablaTemperaturasMaximasProps> = ({
  users,
}) => {
  // Estado para el valor de filtro con un valor por defecto de 35 grados Celsius
  const [valorFiltro, setValorFiltro] = useState(35);

  const filtrarYProcesarDatos = (valor: number) => {
    return users.reduce((acum, user) => {
      const ultimaTemperaturaMaxima = obtenerUltimoValorPrecipitacion(
        user.t_max
      );
      if (
        ultimaTemperaturaMaxima &&
        ultimaTemperaturaMaxima.valor !== null &&
        ultimaTemperaturaMaxima.valor > valor
      ) {
        const { DPTO, MUNICIPIO } = user;
        if (!acum[DPTO]) {
          acum[DPTO] = {};
        }
        if (!acum[DPTO][MUNICIPIO]) {
          acum[DPTO][MUNICIPIO] = [];
        }
        acum[DPTO][MUNICIPIO].push(ultimaTemperaturaMaxima.valor);
      }
      return acum;
    }, {} as Record<string, Record<string, number[]>>);
  };

  const datosFiltrados = filtrarYProcesarDatos(valorFiltro);

  const datosParaMostrar = Object.entries(datosFiltrados).map(
    ([departamento, municipios]) => {
      const municipiosYValores = Object.entries(municipios)
        .map(([municipio, valores]) => {
          return `${municipio} (${valores.join(", ")})`;
        })
        .join(", ");
      return {
        departamento,
        municipiosYValores,
      };
    }
  );

  return (
    <div>
      <label
        htmlFor="filtroTemperaturaMaxima"
        className="block ml-6 mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold bg-orange-300 w-fit"
      >
        Valor de temperatura máxima para filtrar (°C):
        <input
          className="ml-2 p-1 w-24 text-sm border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="number"
          id="filtroTemperaturaMaxima"
          value={valorFiltro}
          onChange={(e) => setValorFiltro(Number(e.target.value))}
        />
      </label>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-w-4xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="caption-top mt-2 text-slate-800 font-semibold">
            Datos preliminares de temperatura máxima del último día
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                DEPARTAMENTO
              </th>
              <th scope="col" className="py-3 px-6">
                MUNICIPIO
              </th>
            </tr>
          </thead>
          <tbody>
            {datosParaMostrar.map((dato, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">{dato.departamento}</td>
                <td className="py-4 px-6">{dato.municipiosYValores}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaTemperaturasMaximas;
