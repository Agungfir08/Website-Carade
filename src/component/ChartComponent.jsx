import React from "react";
import LineChart from "./LineChart";

export default function ChartComponent() {
  return (
    <div className="flex flex-col w-[900px] h-[500px] items-center p-4 rounded-2xl bg-white">
      <h1 className=" font-bold text-3xl">Graph of usage</h1>
      <LineChart />
    </div>
  );
}
