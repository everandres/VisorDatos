import React from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// Asegúrate de tener la importación correcta
// Asegúrate de importar la interfaz User desde su ubicación
import { User } from "../(model)/conexion";
import MarkerClusterGroup from "react-leaflet-cluster"; // Asegúrate de tener la importación correcta

interface EstacionesMapaProps {
  users: User[];
}

const EstacionesMapa: React.FC<EstacionesMapaProps> = ({ users }) => {
  const defaultPosition: [number, number] = [4.60971, -74.08175]; // Ejemplo: Bogotá, Colombia. Ajusta según tus necesidades.
  // Función ajustada para retornar tanto la clave como el valor
  const obtenerUltimoValorPrecipitacion = (
    precipitaciones: { [key: string]: number }[]
  ): { dia: string; valor: number | null } | null => {
    if (precipitaciones.length === 0) return null;
    const ultimaPrecipitacion = precipitaciones[precipitaciones.length - 1];
    const dia = Object.keys(ultimaPrecipitacion)[0];
    // Asegura que valores como 0 o null se manejen explícitamente
    const valor =
      ultimaPrecipitacion[dia] !== undefined ? ultimaPrecipitacion[dia] : null;
    return { dia, valor };
  };
  return (
    <MapContainer
      center={defaultPosition}
      zoom={8}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {users.map((user, index) => (
          <CircleMarker
            key={index}
            center={[user.LAT, user.LON]}
            radius={10} // Puedes ajustar el tamaño del círculo aquí
            fillOpacity={0.5}
            fillColor="#1779ba"
            color="#1779ba"
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              Estación: {user.ESTACION}
              <br />
              Departamento: {user.DPTO}
              <br />
              Municipio: {user.MUNICIPIO}
              <br />
              Elevación: {user.ELEV ?? "Sin información"} (m)
              <br />
              Max Hist: {user.MAX_HIST ?? "Sin información"} (mm)
              <br />
              Última Precipitación:{" "}
              {obtenerUltimoValorPrecipitacion(user.precipitacion)?.valor ??
                "Sin información"}{" "}
              mm
              <br />
              Dia del mes:{" "}
              {obtenerUltimoValorPrecipitacion(user.precipitacion)?.dia ??
                "Sin información"}
            </Tooltip>
          </CircleMarker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EstacionesMapa;
