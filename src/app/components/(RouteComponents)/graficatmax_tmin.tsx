import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TemperaturaProps {
  t_max: Array<{ [key: string]: number }>;
  t_min: Array<{ [key: string]: number }>;
  T_MIN_HIST: number;
  T_MAX_HIST: number;
}

const GraficoTemperatura: React.FC<TemperaturaProps> = ({
  t_max,
  t_min,
  T_MIN_HIST,
  T_MAX_HIST,
}) => {
  // Asumiendo que t_max y t_min tienen la misma longitud y etiquetas de día
  const labels = t_max ? t_max.map((item, index) => `Día ${index + 1}`) : [];

  const dataMax = t_max ? t_max.map((item) => Object.values(item)[0]) : [];
  const dataMin = t_min ? t_min.map((item) => Object.values(item)[0]) : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Temperatura Máxima (°C)",
        data: dataMax,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Temperatura Mínima (°C)",
        data: dataMin,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      annotation:
        T_MAX_HIST !== null || T_MIN_HIST !== null
          ? {
              annotations: {
                line1: {
                  yMin: T_MIN_HIST,
                  yMax: T_MIN_HIST,
                  borderColor: "#085999",
                  borderWidth: 2,
                  borderDash: [2, 2],
                  label: {
                    content: `Min Histórica: ${T_MIN_HIST} °C`,
                    display: true,
                    position: "center",
                    backgroundColor: "#40B7FF", // Fondo semitransparente para la etiqueta
                    color: "#FFFFFF", // Color del text
                  },
                },
                line2: {
                  yMin: T_MAX_HIST,
                  yMax: T_MAX_HIST,
                  borderColor: "#F13C20",
                  borderWidth: 2,
                  borderDash: [2, 2],
                  label: {
                    content: `Max Histórica: ${T_MAX_HIST} °C`,
                    display: true,
                    position: "center",
                    backgroundColor: "#F13C20", // Fondo semitransparente para la etiqueta
                    color: "#FFFFFF", // Color del text
                  },
                },
              },
            }
          : {},
      legend: {
        position: "top" as const,
      },
      datalabels: {
        display: false,
      },
      title: {
        display: true,
        text: "Temperaturas Máximas y Mínimas",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GraficoTemperatura;
