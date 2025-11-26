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

function UsageBySlotChart({ data }) {
  const formattedData = data.map(slot => ({
    name: slot.id,
    secondsUsed: slot.totalOccupiedSeconds
  }));

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="secondsUsed" fill="#4f46e5" />
