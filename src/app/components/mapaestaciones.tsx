import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
// Asegúrate de importar la interfaz User desde su ubicación
import { User } from "../(model)/conexion";

interface EstacionesMapaProps {
  users: User[];
}

const EstacionesMapa: React.FC<EstacionesMapaProps> = ({ users }) => {
  const defaultPosition: [number, number] = [4.60971, -74.08175]; // Ejemplo: Bogotá, Colombia. Ajusta según tus necesidades.

  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {users.map((user, index) => (
        <Marker
          key={index}
          position={[user.LAT, user.LON]}
          icon={L.icon({
            iconUrl: markerIconPng.toString(),
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            Estación: {user.ESTACION}
            <br />
            Departamento: {user.DPTO}
            <br />
            Municipio: {user.MUNICIPIO}
            <br />
            Max Hist: {user.MAX_HIST ?? "N/A"} mm
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EstacionesMapa;
