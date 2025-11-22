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
