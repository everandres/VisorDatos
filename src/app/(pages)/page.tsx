"use client";

import Link from "next/link";
import BotonBienvenida from "../components/boton";
import EstacionesMapa from "../components/mapaestaciones";
import { useUsers } from "../context/usercontext";
import LeyendaPrecipitacion from "../components/leyenda";

const ComponentePaginaPrincipal: React.FC = () => {
  const { users } = useUsers();
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-900 relative">
      <div>
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
          <BotonBienvenida />
        </div>
        <div className="absolute bottom-0 left-0 z-10 flex justify-start">
          <LeyendaPrecipitacion />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <EstacionesMapa users={users} />
      </div>
    </div>
  );
};

export default ComponentePaginaPrincipal;
