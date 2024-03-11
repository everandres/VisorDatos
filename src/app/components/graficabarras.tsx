import { User } from "../(model)/conexion";
import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { ChartOptions } from "chart.js";

interface SumaPorDia {
  dia: string;
  suma: number;
  estaciones: number;
}

export function sumarPrecipitaciones(users: User[]): SumaPorDia[] {
  const resultadosPorDia: {
    [dia: string]: { suma: number; estaciones: number };
  } = {};

  users.forEach((user) => {
    user.precipitacion.forEach((precipitacion) => {
      const [dia, valor] = Object.entries(precipitacion)[0];
      if (valor !== null) {
        // Asegura que solo cuente estaciones con datos no nulos
        if (!resultadosPorDia[dia]) {
          resultadosPorDia[dia] = { suma: 0, estaciones: 0 };
        }
        resultadosPorDia[dia].suma += valor;
        resultadosPorDia[dia].estaciones += 1; // Contador de estaciones
      }
    });
  });

  return Object.entries(resultadosPorDia).map(
    ([dia, { suma, estaciones }]) => ({
      dia,
      suma,
      estaciones, // Incluye el conteo en el resultado
    })
  );
}
interface GraficaPrecipitacionProps {
  datos: SumaPorDia[];
}

ChartJS.defaults.font.family = "Arial Narrow";

const GraficaPrecipitacion: React.FC<GraficaPrecipitacionProps> = ({
  datos,
}) => {
  const opciones: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      y: {
        easing: "easeInOutElastic",
        from: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        bodyFont: {
          family: "Arial Narrow",
          size: 18,
        },
      },
      title: {
        display: true,
        text: "Precipitación Total Acumulada Diaria",
        font: {
          size: 24,
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Precipitación (mm)",
          color: "gray",
          font: {
            size: 20,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Día",
          color: "gray",
          font: {
            size: 20,
          },
        },
      },
    },
  };

  const data = {
    labels: datos.map((d) => d.dia),
    datasets: [
      {
        label: "Precipitación total acumulada (mm)",
        data: datos.map((d) => d.suma),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        hoverOffset: 4,
        hoverBackgroundColor: "#3678A4",
      },
      {
        label: "Número de estaciones que reportaron datos",
        data: datos.map((d) => d.estaciones),
        backgroundColor: "#6AE1AE", // Un color diferente para diferenciar
        hoverOffset: 4,
        hoverBackgroundColor: "#70F570",
      },
    ],
  };

  // Resto del componente sin cambios...
  return (
    <div className="w-[90%] h-[40vh] mt-10 mx-auto flex justify-bottom items-center">
      <Bar options={opciones} data={data} />
    </div>
  );
};
export default GraficaPrecipitacion;
