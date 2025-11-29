import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function UsageCurrentChart({ data }) {
  if (!data || data.length === 0) return <p>No hay datos disponibles</p>;
