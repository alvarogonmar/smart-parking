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

