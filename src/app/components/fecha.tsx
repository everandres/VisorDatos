import React from "react";
// ... tus otros imports

const ComponenteConFecha: React.FC = () => {
  const now = new Date();
  const fechaHora = now.toLocaleString("es-ES", { hour12: true });

  return (
    <div>
      <p className="text-2xl text-gray-400 mt-8 items-center flex justify-center">
        {fechaHora}
      </p>
    </div>
  );
};

export default ComponenteConFecha;
