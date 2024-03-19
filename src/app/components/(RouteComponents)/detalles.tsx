import React from "react";
import useEstacion from "@/app/funciones/customhook";

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

  return <div>Información sobre la estación: {data.ESTACION}</div>;
}
