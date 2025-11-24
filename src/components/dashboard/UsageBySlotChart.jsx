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

