import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import dummyData from "../data";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function ChartComponent() {
  const data = {
    labels: dummyData.map((data) => data.time),
    datasets: [
      {
        data: dummyData.map((data) => data.kWh),
        backgroundColor: "rgba(92, 225, 230, 1)",
        borderColor: "rgba(92, 225, 230, 1)",
        borderWidth: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "kWh",
        },
        beginAtZero: true,
      },
    },
  };
  return <Line data={data} options={options}></Line>;
}
