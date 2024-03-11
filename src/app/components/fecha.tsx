"use client";
import React, { useEffect, useState } from "react";

const ComponenteConFecha: React.FC = () => {
  const [fechaHora, setFechaHora] = useState("");

  useEffect(() => {
    // Actualizamos la fecha y hora solo en el lado del cliente
    const now = new Date();
    setFechaHora(now.toLocaleString("es-ES", { hour12: true }));

    // Opcional: actualizar la hora cada minuto si es necesario
    const intervalId = setInterval(() => {
      const newNow = new Date();
      setFechaHora(newNow.toLocaleString("es-ES", { hour12: true }));
    }, 60000); // Actualiza cada minuto

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className=" text-gray-400 mt-8 items-center flex justify-center">
        Fecha actual: {fechaHora}
      </p>
      {/* ... resto de tu componente */}
    </div>
  );
};

export default ComponenteConFecha;

//text-2xl text-gray-400 mt-8 items-center flex justify-center
