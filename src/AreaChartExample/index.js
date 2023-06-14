import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 15 },
  { name: "C", value: 8 },
  { name: "D", value: 20 },
];

const AreaChartExample = () => {
  return (
    <>
      <AreaChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <h2>Area Chart</h2>
    </>
  );
};

export default AreaChartExample;
