import React, { useState } from "react";
import { User } from "../(model)/conexion";
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia";

interface TablaPrecipitacionesProps {
  users: User[];
}

const TablaPrecipitaciones: React.FC<TablaPrecipitacionesProps> = ({
  users,
}) => {
  const [valorFiltro, setValorFiltro] = useState(35);

  const filtrarYProcesarDatos = (valor: number) => {
    return users.reduce((acum, user) => {
      const ultimaPrecipitacion = obtenerUltimoValorPrecipitacion(
        user.precipitacion
      );
      if (
        ultimaPrecipitacion &&
        ultimaPrecipitacion.valor &&
        ultimaPrecipitacion.valor > valor
      ) {
        const { DPTO, MUNICIPIO } = user;
        if (!acum[DPTO]) {
          acum[DPTO] = {};
        }
        if (!acum[DPTO][MUNICIPIO]) {
          acum[DPTO][MUNICIPIO] = [];
        }
        // Asegurar formato decimal
        acum[DPTO][MUNICIPIO].push(ultimaPrecipitacion.valor.toFixed(1));
      }
      return acum;
    }, {} as Record<string, Record<string, string[]>>);
  };

  const datosFiltrados = filtrarYProcesarDatos(valorFiltro);

  // Ordenar alfabéticamente y asegurar formato decimal
  const datosParaMostrar = Object.entries(datosFiltrados)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([departamento, municipios]) => {
      const municipiosYValores = Object.entries(municipios)
        .map(([municipio, valores]) => {
          // Asegurar que todos los valores estén en formato decimal
          const valoresConDecimal = valores.map((valor) =>
            parseFloat(valor).toFixed(1)
          );
          return `${municipio} (${valoresConDecimal.join(", ")})`;
        })
        .join(", ");
      return {
        departamento,
        municipiosYValores,
      };
    });

  return (
    <div>
      <label
        htmlFor="filtroValor"
        className="block ml-6 mb-2 text-sm  text-gray-900 dark:text-gray-300 font-bold bg-cyan-100 w-fit"
      >
        Filtro precipitaciones superiores a (mm):
        <input
          className="ml-2 p-1 w-24 text-sm border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="number"
          id="filtroValor"
          value={valorFiltro}
          onChange={(e) => setValorFiltro(Number(e.target.value))}
        />
      </label>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-w-4xl min-w-xs mx-auto ml-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="caption-top mt-2 text-slate-800 font-semibold">
            Datos preliminares de precipitación del ultimo dia
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

export default TablaPrecipitaciones;
