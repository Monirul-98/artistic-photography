import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 34500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 167010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 140405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 150900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 161000,
    },
  ];
  return (
    <div className="md:flex justify-evenly">
      <div>
        <h2 className="text-3xl text-violet-900 font-semibold mb-6">
          Month wise Sell
        </h2>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="month" stroke="#8884d8" />
          <Line type="monotone" dataKey="sell" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip></Tooltip>
          <Legend></Legend>
        </LineChart>
      </div>
      <div>
        <h2 className="text-3xl text-violet-900 font-semibold mb-6">
          Investment vs Revenue
        </h2>
        <AreaChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#721B4F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#721B4F" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B4F72 " stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1B4F72 " stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend></Legend>
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#721B4F"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#1B4F72 "
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
