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
  TooltipItem,
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

interface PrecipitacionProps {
  precipitacion: Array<{ [key: string]: number }>;
  MAX_HIST: number; // Asume que ahora también recibes MAX_HIST como prop
}

const GraficoBarraPrecipitacion: React.FC<PrecipitacionProps> = ({
  precipitacion,
  MAX_HIST,
}) => {
  // Generar las etiquetas (labels) y los valores de datos (dataValues) a partir del array de precipitacion
  const labels = precipitacion.map((item, index) => `${index + 1}`);
  const dataValues = precipitacion.map((item) => {
    const valor = Object.values(item)[0];
    // Asegura que cada valor tenga al menos un decimal
    return Math.round(valor * 10) / 10;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Precipitación diaria (mm)",
        data: dataValues,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        hoverBackgroundColor: "#3678A4",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      annotation:
        MAX_HIST !== null
          ? {
              annotations: {
                line1: {
                  yMin: MAX_HIST,
                  yMax: MAX_HIST,
                  borderColor: "#085999",
                  borderWidth: 2,
                  borderDash: [2, 2],
                  label: {
                    content: `Máx Histórica: ${MAX_HIST} mm`,
                    display: true,
                    position: "center",
                    backgroundColor: "#40B7FF", // Fondo semitransparente para la etiqueta
                    color: "#FFFFFF", // Color del text
                  },
                },
              },
            }
          : {},

      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Precipitación total diaria",
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"bar">) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("es-ES", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              }).format(context.parsed.y);
            }
            return label;
          },
        },
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
  return <Bar data={data} options={options} />;
};

export default GraficoBarraPrecipitacion;
