import React, { useState } from "react";
import { User } from "../(model)/conexion"; // Asegúrate de que la ruta sea correcta
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia";

interface TablaTemperaturasMinimasProps {
  users: User[];
}

const TablaTemperaturasMinimas: React.FC<TablaTemperaturasMinimasProps> = ({
  users,
}) => {
  // Estado para manejar el valor de filtro ingresado por el usuario, por defecto en 5
  const [valorFiltro, setValorFiltro] = useState(5);

  const filtrarYProcesarDatos = (valor: number) => {
    return users.reduce((acum, user) => {
      const ultimaTemperaturaMinima = obtenerUltimoValorPrecipitacion(
        user.t_min
      );
      if (
        ultimaTemperaturaMinima &&
        ultimaTemperaturaMinima.valor !== null &&
        ultimaTemperaturaMinima.valor < valor
      ) {
        const { DPTO, MUNICIPIO } = user;
        if (!acum[DPTO]) {
          acum[DPTO] = {};
        }
        if (!acum[DPTO][MUNICIPIO]) {
          acum[DPTO][MUNICIPIO] = [];
        }
        acum[DPTO][MUNICIPIO].push(ultimaTemperaturaMinima.valor);
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
        htmlFor="filtroTemperaturaMinima"
        className="block ml-6 mb-2 text-sm dark:text-gray-300 font-bold bg-cyan-400 w-fit text-white"
      >
        Filtro temperatura mínima inferiores a (°C):
        <input
          className="ml-2 p-1 w-24 text-sm border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
          type="number"
          id="filtroTemperaturaMinima"
          value={valorFiltro}
          onChange={(e) => setValorFiltro(Number(e.target.value))}
        />
      </label>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-w-4xl min-w-xs mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="caption-top mt-2 text-slate-800 font-semibold">
            Datos preliminares de temperatura mínima del último día
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

export default TablaTemperaturasMinimas;
