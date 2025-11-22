import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PeakHoursChart({ logs }) {
  const hourUsage = Array(24).fill(0);

  logs.forEach(log => {
    const hour = new Date(log.timestamp).getHours();
    hourUsage[hour]++;
  });

  const data = hourUsage.map((count, hour) => ({
    hour: `${hour}:00`,
    uses: count
  }));

