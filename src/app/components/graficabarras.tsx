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
}

export function sumarPrecipitaciones(users: User[]): SumaPorDia[] {
  const sumasPorDia: { [dia: string]: number } = {};

  users.forEach((user) => {
    user.precipitacion.forEach((precipitacion) => {
      const [dia, valor] = Object.entries(precipitacion)[0];
      sumasPorDia[dia] = (sumasPorDia[dia] || 0) + valor;
    });
  });

  return Object.entries(sumasPorDia).map(([dia, suma]) => ({
    dia,
    suma,
  }));
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
        text: "Precipitación Total Acumulada Diaria (mm)",
        font: {
          size: 32,
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
      },
    ],
  };

  return (
    <div className="w-[90%] h-[40vh] mt-10 mx-auto flex justify-bottom items-center">
      <Bar options={opciones} data={data} />
    </div>
  );
};

export default GraficaPrecipitacion;
