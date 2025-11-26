import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend
} from "recharts";

function UsageByZoneChart({ data }) {
  const zoneUsage = {};

  data.forEach(slot => {
    const zone = slot.zoneId || "Sin zona";

