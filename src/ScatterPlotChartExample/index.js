import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { x: 5, y: 10 },
  { x: 8, y: 15 },
  { x: 12, y: 7 },
  { x: 16, y: 20 },
];

const ScatterPlotChartExample = () => {
  return (
    <>
      <ScatterChart width={400} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Tooltip />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>
      <h2>ScatterPlotChart</h2>
    </>
  );
};

export default ScatterPlotChartExample;
