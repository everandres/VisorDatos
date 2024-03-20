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
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

interface PromMultPrecTotalProps {
  PROM_MULT: number;
  PRECTOTAL: number;
}

const GraficoPromMultPrecTotal: React.FC<PromMultPrecTotalProps> = ({
  PROM_MULT,
  PRECTOTAL,
}) => {
  // Configuración de los datos
  const data = {
    labels: ["Precipitación Total Acumulada", "Promedio Mensual Multianual"],
    datasets: [
      {
        label: "Precipitación (mm)",
        data: [PRECTOTAL, PROM_MULT],
        backgroundColor: ["#6991F5", "#F36E50"],
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Puedes decidir mostrar o no la leyenda
      },
      title: {
        display: true,
        text: "Comparación de Precipitación Total y Promedio Multianual",
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        title: {
          display: true,
          text: "Precipitación (mm)",
          color: "gray",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GraficoPromMultPrecTotal;
