import React from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../css/styles.css";
// Asegúrate de tener la importación correcta
// Asegúrate de importar la interfaz User desde su ubicación
import { User } from "../(model)/conexion";
import MarkerClusterGroup from "react-leaflet-cluster"; // Asegúrate de tener la importación correcta

interface EstacionesMapaProps {
  users: User[];
}

// Asegurándose de que la estructura de precipitaciones se adhiere a la interfaz esperada
interface Precipitacion {
  [key: string]: number;
}
// Ajustando la interfaz de User para reflejar la propiedad de precipitaciones correctamente
interface UserAdjusted extends Omit<User, "precipitacion"> {
  precipitacion: Precipitacion[];
}

const EstacionesMapa: React.FC<EstacionesMapaProps> = ({ users }) => {
  const defaultPosition: [number, number] = [4.60971, -74.08175]; // Ejemplo: Bogotá, Colombia. Ajusta según tus necesidades.

  const obtenerUltimoValorPrecipitacion = (
    precipitaciones: Precipitacion[]
  ): { dia: string; valor: number | null } | null => {
    if (precipitaciones.length === 0) return null;
    const ultimaPrecipitacion = precipitaciones[precipitaciones.length - 1];
    const dia = Object.keys(ultimaPrecipitacion)[0];
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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {users.map((user: UserAdjusted, index: number) => {
          const ultimaPrecipitacion = obtenerUltimoValorPrecipitacion(
            user.precipitacion
          );
          const ultimaTemperaturaMinima = obtenerUltimoValorPrecipitacion(
            user.t_min
          );

          let fillColor = "#1779ba"; // Azul por defecto para valores de 0 a 25

          if (ultimaPrecipitacion === null) {
            fillColor = "#808080"; // Gris si no hay datos de precipitación
          } else {
            // Verifica que 'valor' no sea 'undefined' antes de comparar
            const valor =
              ultimaPrecipitacion.valor !== undefined
                ? ultimaPrecipitacion.valor
                : null;
            // Determina el color basado en el rango de valor, considerando también si MAX_HIST es nulo
            if (valor !== null) {
              const superaMaxHist =
                user.MAX_HIST === null || valor > user.MAX_HIST;

              if (valor > 50 && !superaMaxHist) {
                fillColor = "#ff0000"; // Rojo si es mayor a 50 y no supera MAX_HIST o si MAX_HIST es nulo
              } else if (valor > 25) {
                fillColor = "#008000"; // Verde si es de 25 a 50
              } else if (valor <= 25) {
                fillColor = "#1779ba"; // Azul por defecto para valores de 0 a 25
              }

              // Aplica color morado si el valor supera MAX_HIST y MAX_HIST no es nulo
              if (superaMaxHist && user.MAX_HIST !== null) {
                fillColor = "#800080"; // Morado si supera el MAX_HIST y MAX_HIST no es nulo
              }
            } else {
              fillColor = "#808080"; // Gris si el último valor es nulo
            }
          }

          return (
            <CircleMarker
              key={index}
              center={[user.LAT, user.LON]}
              radius={10}
              fillOpacity={0.5}
              fillColor={fillColor}
              color={fillColor}
            >
              <Tooltip
                className="tooltipCustom"
                direction="top"
                offset={[0, -10]}
                opacity={1}
              >
                <strong>ESTACIÓN: </strong>
                {user.ESTACION}
                <br />
                <strong>DEPARTAMENTO:</strong> {user.DPTO}
                <br />
                <strong>MUNICIPIO:</strong> {user.MUNICIPIO}
                <br />
                <strong>ELEVACION: </strong>
                {user.ELEV ?? "Sin información"} m<br />
                <strong> MAX HIST:</strong>
                {user.MAX_HIST ?? "Sin información"} mm
                <br />
                <strong>ULTIMA PRECIPITACION: </strong>
                {ultimaPrecipitacion?.valor ?? "Sin información"} mm
                <br />
                <strong>PRECIPITACION TOTAL ACUMULADA: </strong>
                {user.PRECTOTAL ?? "Sin información"} mm
                <br />
                <strong>DIA DEL MES:</strong>{" "}
                {ultimaPrecipitacion?.dia ?? "Sin información"}
                <br /> <strong> TEMPERATURA MINIMA DEL MES:</strong>{" "}
                {user.T_MIN_MES ?? "Sin información"} °C
                <br />
                <strong>ULTIMA TEMPERATURA MINIMA: </strong>
                {ultimaTemperaturaMinima?.valor ?? "Sin información"} °C
                <br />
                <strong>DIA TEMPERATURA MINIMA: </strong>
                {ultimaTemperaturaMinima?.dia ?? "Sin información"}
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EstacionesMapa;
