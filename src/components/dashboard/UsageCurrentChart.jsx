import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function UsageCurrentChart({ data }) {
  if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

  const occupiedCount = data.filter((s) => s.isOccupied).length;
  const freeCount = data.filter((s) => !s.isOccupied).length;

  const chartData = [
    { name: "Ocupados", value: occupiedCount },
    { name: "Libres", value: freeCount },
  ];

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
