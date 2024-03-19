/*
async function getEstacion(id: string) {
  const response = await fetch(`http://localhost:3000/api/precipitacion/${id}`);
  const data = await response.json();
  return data;
}

export default async function ComponenteInfo({
  params,
}: {
  params: { id: string };
}) {
  const data = await getEstacion(params.id);
  return <div>Información sobre la estación {data.ESTACION}</div>;
}
*/

// Asegúrate de ajustar la ruta al importar useUsers para que apunte a la ubicación correcta de tu UserContext
"use client";

import ComponenteInfo from "@/app/components/(RouteComponents)/detalles";
import { useParams } from "next/navigation";

const ComponenteEstacionInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <ComponenteInfo params={{ id }} />
    </div>
  );
};
export default ComponenteEstacionInfo;
