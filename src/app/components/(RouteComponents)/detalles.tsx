import React from "react";
import useEstacion from "@/app/funciones/customhook";
import ComponenteConFecha from "../fecha";
import GraficoBarraPrecipitacion from "./graficobarrasprec";
import GraficoPromMultPrecTotal from "./graficoprecmultianual";
import GraficoTemperatura from "./graficatmax_tmin";

export default function ComponenteInfo({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useEstacion(params.id);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error al cargar la información: {error.message}</div>;
  }

  if (!data) {
    return <div>No se encontraron datos para la estación</div>;
  }
  return (
    <div className="flex-col items-center">
      <div>
        <ComponenteConFecha />
      </div>
      <div className="flex justify-center mt-3">
        <p className="ms-2 font-semibold text-gray-500 dark:text-gray-400 justify-center">
          {" "}
          <strong>
            {" "}
            {data.ESTACION} - ({data.MUNICIPIO} - {data.DPTO})
          </strong>
          <br />
          <strong className=" flex justify-center items-center">
            {" "}
            CÓDIGO: {data.CODIGO}{" "}
          </strong>
        </p>
      </div>
      <div className="w-[90%] h-[40vh] mt-10 mx-auto flex justify-between items-center">
        {data.precipitacion && (
          <GraficoBarraPrecipitacion
            precipitacion={data.precipitacion}
            MAX_HIST={data.MAX_HIST}
          />
        )}
        {data.precipitacion && (
          <GraficoPromMultPrecTotal
            PROM_MULT={data.PROM_MULT}
            PRECTOTAL={data.PRECTOTAL}
          />
        )}
      </div>
      <div className="w-full h-[40vh] flex justify-center ">
        <GraficoTemperatura
          t_max={data.t_max}
          t_min={data.t_min}
          T_MAX_HIST={data.T_MAX_HIST}
          T_MIN_HIST={data.T_MIN_HIST}
        />
      </div>
    </div>
  );
}
