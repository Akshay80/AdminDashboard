import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "./dummyData";

export default function Chart(): JSX.Element {
  console.log("Data: ", data);
  


  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer className="chartContainer" aspect={4 / 1}>
        <LineChart data={data} >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            animationDuration={24000}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" animationDuration={24000} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
