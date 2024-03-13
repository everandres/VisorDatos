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
      autoCompleteDelay: 100,
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

const EstacionesMapa: React.FC<EstacionesMapaProps> = ({ users }) => {
  const defaultPosition: [number, number] = [4.60971, -74.08175]; // Ejemplo: Bogotá, Colombia. Ajusta según tus necesidades.

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
      <SearchControl />
      <MarkerClusterGroup>
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

          let fillColor = "#F3FF40"; // Azul por defecto para valores de 0 a 25

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

              if (valor > 40 && !superaMaxHist) {
                fillColor = "#ff0000"; // Rojo si es mayor a 50 y no supera MAX_HIST o si MAX_HIST es nulo
              } else if (valor > 20 && valor <= 40) {
                fillColor = "#59B6F3"; // Verde si es de 25 a 50
              } else if (valor <= 20 && valor > 0) {
                fillColor = "#F3FF40"; // Azul por defecto para valores de 0 a 25
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
              fillOpacity={0.7}
              fillColor={fillColor}
              color={fillColor}
              eventHandlers={{
                mouseover: (e) => {
                  const marker = e.target;
                  marker.setRadius(20); // Aumenta el radio del marcador
                },
                mouseout: (e) => {
                  const marker = e.target;
                  marker.setRadius(10); // Restablece el tamaño original del marcador
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
                {user.ELEV ?? "Sin información"} m<br />
                <strong className="text-orange-200">
                  PRECIPITACIÓN MÁXIMA HISTÓRICA:
                </strong>{" "}
                {user.MAX_HIST ?? "Sin información"} mm
                <br />
                <strong className="text-orange-200">
                  TEMPERATURA MÍNIMA HISTÓRICA:
                </strong>{" "}
                {user.T_MIN_HIST ?? "Sin información"} °C
                <br />
                <strong className="text-orange-200">
                  TEMPERATURA MAXIMA HISTÓRICA:
                </strong>{" "}
                {user.T_MAX_HIST ?? "Sin información"} °C
                <br />
                <strong>DIA DEL MES:</strong>{" "}
                {ultimaPrecipitacion?.dia ?? "Sin información"}
                <br />
                <strong className="text-green-200">PRECIPITACIÓN: </strong>
                {ultimaPrecipitacion?.valor ?? "Sin información"} mm
                <br />
                <strong className="text-green-200">TEMPERATURA MÍNIMA: </strong>
                {ultimaTemperaturaMinima?.valor ?? "Sin información"} °C
                <br />
                <strong className="text-green-200">TEMPERATURA MÁXIMA: </strong>
                {ultimaTemperaturaMaxima?.valor ?? "Sin información"} °C
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EstacionesMapa;
