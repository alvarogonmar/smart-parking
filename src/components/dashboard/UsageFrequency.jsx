import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function UsageFrequencyChart({ data }) {
  const formattedData = data.map(slot => ({
    name: slot.id,
    frequency: slot.usageFrequency || 0
  }));

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="frequency" fill="#3b82f6" />
        </BarChart>

