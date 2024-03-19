"use client";
import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../css/styles.css";
// Asegúrate de tener la importación correcta
// Asegúrate de importar la interfaz User desde su ubicación
import { User } from "../(model)/conexion";
import MarkerClusterGroup from "react-leaflet-cluster"; // Asegúrate de tener la importación correcta
import obtenerUltimoValorPrecipitacion from "../funciones/ultimodia";
import { useRouter } from "next/navigation";

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

// Componente para añadir el control de búsqueda al mapa
const SearchControl: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    // Importación dinámica de GeoSearchControl y OpenStreetMapProvider
    const {
      GeoSearchControl,
      OpenStreetMapProvider,
    } = require("leaflet-geosearch");

    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      searchLabel: "Buscar estación",
      style: "button",
      animateZoom: true,
      autoComplete: true,
      autoCompleteDelay: 50,
      showMarker: false,
      autoClose: true,
    });

    map.addControl(searchControl);

    // Limpieza al desmontar
    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  return null;
};

if (typeof window !== "undefined") {
}
const EstacionesMapa: React.FC<EstacionesMapaProps> = ({ users }) => {
  const defaultPosition: [number, number] = [4.60971, -74.08175]; // Ejemplo: Bogotá, Colombia. Ajusta según tus necesidades.

  const router = useRouter();
  return (
    <MapContainer
      center={defaultPosition}
      zoom={8}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <SearchControl />
      <MarkerClusterGroup maxClusterRadius={25}>
        {users.map((user: UserAdjusted, index: number) => {
          const ultimaPrecipitacion = obtenerUltimoValorPrecipitacion(
            user.precipitacion
          );
          const ultimaTemperaturaMinima = obtenerUltimoValorPrecipitacion(
            user.t_min
          );
          const ultimaTemperaturaMaxima = obtenerUltimoValorPrecipitacion(
            user.t_max
          );

          let fillColor = "#F3FF40"; // Corregido para reflejar el color inicial correcto según el uso pretendido en el código

          if (ultimaPrecipitacion === null) {
            fillColor = "#808080"; // Gris si no hay datos de precipitación
          } else {
            const valor =
              ultimaPrecipitacion.valor !== undefined
                ? ultimaPrecipitacion.valor
                : null;

            if (valor !== null) {
              const superaMaxHist =
                user.MAX_HIST === null || valor > user.MAX_HIST;

              if (valor > 40) {
                fillColor = "#FF0000"; // Rojo para valores mayores a 40, pendiente de revisión contra MAX_HIST
              } else if (valor > 20 && valor <= 40) {
                fillColor = "#0000FF"; // Azul para valores de 21 a 40
              } else if (valor > 0 && valor <= 20) {
                fillColor = "#FFFFFF"; // Blanco para valores de 1 a 20
              } else if (valor === 0) {
                fillColor = "#F3FF40"; // Verde para valor 0
              }

              // Verificación mantenida para aplicar color morado si supera MAX_HIST y MAX_HIST no es nulo
              if (superaMaxHist && user.MAX_HIST !== null) {
                fillColor = "#800080"; // Morado para valores que superan MAX_HIST, con MAX_HIST no nulo
              }
            } else {
              fillColor = "#808080"; // Gris si el valor es nulo
            }
          }

          return (
            <CircleMarker
              key={index}
              center={[user.LAT, user.LON]}
              radius={6}
              fillOpacity={0.9}
              fillColor={fillColor}
              color="black"
              weight={1.5}
              eventHandlers={{
                mouseover: (e) => {
                  const marker = e.target;
                  marker.setRadius(20); // Aumenta el radio del marcador
                },
                mouseout: (e) => {
                  const marker = e.target;
                  marker.setRadius(6); // Restablece el tamaño original del marcador
                },
                click: (e) => {
                  // Cambiar el cursor a 'progress' o cualquier otro para indicar acción
                  e.target._path.style.cursor = "progress";

                  // Usando useRouter para navegar
                  router.push(`/info/${user.CODIGO}`);

                  // Opcional: revertir el cursor después de un breve retraso
                  setTimeout(() => {
                    e.target._path.style.cursor = "";
                  }, 1000); // Revertir después de 1 segundo
                },
              }}
            >
              <Tooltip
                className="tooltipCustom"
                direction="top"
                offset={[0, -10]}
                opacity={1}
              >
                <strong className="text-gray-300">CÓDIGO: </strong>
                {user.CODIGO}
                <br />
                <strong className="text-gray-300">ESTACIÓN: </strong>
                {user.ESTACION}
                <br />
                <strong className="text-gray-300">DEPARTAMENTO:</strong>{" "}
                {user.DPTO}
                <br />
                <strong className="text-gray-300">MUNICIPIO:</strong>{" "}
                {user.MUNICIPIO}
                <br />
                <strong className="text-gray-300">ELEVACION: </strong>
                {user.ELEV ?? "Sin dato"} m.s.n.m
                <br />
                <strong className="text-orange-200">
                  PRECIPITACIÓN MÁXIMA HISTÓRICA:
                </strong>{" "}
                {user.MAX_HIST !== null && user.MAX_HIST !== undefined
                  ? user.MAX_HIST.toFixed(1)
                  : "Sin dato"}{" "}
                mm
                <br />
                <strong className="text-orange-200">
                  TEMPERATURA MÍNIMA HISTÓRICA:
                </strong>{" "}
                {user.T_MIN_HIST !== null && user.T_MIN_HIST !== undefined
                  ? user.T_MIN_HIST.toFixed(1)
                  : "Sin dato"}{" "}
                °C
                <br />
                <strong className="text-orange-200">
                  TEMPERATURA MAXIMA HISTÓRICA:
                </strong>{" "}
                {user.T_MAX_HIST !== null && user.T_MAX_HIST !== undefined
                  ? user.T_MAX_HIST.toFixed(1)
                  : "Sin dato"}{" "}
                °C
                <br />
                <strong className="text-cyan-900">DIA DEL MES:</strong>{" "}
                {ultimaPrecipitacion?.dia ?? "Sin dato"}
                <br />
                <strong className="text-green-200">PRECIPITACIÓN: </strong>
                {ultimaPrecipitacion?.valor !== null &&
                ultimaPrecipitacion?.valor !== undefined
                  ? ultimaPrecipitacion?.valor.toFixed(1)
                  : "Sin dato"}{" "}
                mm
                <br />
                <strong className="text-green-200">TEMPERATURA MÍNIMA: </strong>
                {ultimaTemperaturaMinima?.valor !== null &&
                ultimaTemperaturaMinima?.valor !== undefined
                  ? ultimaTemperaturaMinima?.valor.toFixed(1)
                  : "Sin dato"}{" "}
                °C
                <br />
                <strong className="text-green-200">TEMPERATURA MÁXIMA: </strong>
                {ultimaTemperaturaMaxima?.valor !== null &&
                ultimaTemperaturaMaxima?.valor !== undefined
                  ? ultimaTemperaturaMaxima?.valor.toFixed(1)
                  : "Sin dato"}{" "}
                °C
                <br />
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EstacionesMapa;
