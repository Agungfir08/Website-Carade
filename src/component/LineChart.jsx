import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";
import dummyData from "../data";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler);

export default function LineChart() {
  const data = {
    labels: dummyData.map((data) => data.time),
    datasets: [
      {
        data: dummyData.map((data) => data.kWh),
        backgroundColor: "rgba(92, 225, 230, 0.2)",
        borderColor: "rgba(92, 225, 230, 1)",
        borderWidth: 4,
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            size: 16,
            weight: "bold",
            color: "#000",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "kWh",
          font: {
            size: 16,
            weight: "bold",
            color: "#000",
          },
        },
        beginAtZero: true,
      },
    },
  };
  return <Line data={data} options={options}></Line>;
}
