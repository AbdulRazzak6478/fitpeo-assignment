import React from "react";
import { Bar } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const option = {
  responsive: true,
  plugins: {
    //   legend: { position: "chartArea" },
    title: {
      display: false,
      text: "Modular Bar Chart",
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Earnings",
      data: [40, 27, 70, 45, 55, 20, 55, 70, 65, 50, 47, 52],
      backgroundColor: [
        "lightgrey",
        "lightgrey",
        "lightgrey",
        "lightgrey",
        "lightgrey",
        "lightgrey",
        "lightgrey",
        "darkblue",
        "lightgrey",
        "lightgrey",
        "lightgrey",
        "lightgrey",
      ],
      borderWidth: 0.9,
    },
  ],
};
const Barchart = () => {
  return (
    <>
      <div className="">
        <Bar className="chart" options={option} data={data} />
      </div>
    </>
  );
};

export default Barchart;
