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
    zoneUsage[zone] = (zoneUsage[zone] || 0) + (slot.totalOccupiedSeconds || 0);
  });

  // Convertir a minutos
  const formattedData = Object.keys(zoneUsage).map(zone => ({
    name: zone.replace("ZONE_", ""),
    value: zoneUsage[zone]
  }));

  // Sumar todos los valores para detectar "todo 0"
  const totalValue = formattedData.reduce((sum, item) => sum + (item.value || 0), 0);

  const noData = totalValue === 0; // true si TODAS las zonas suman 0 minutos

  // Si no hay datos útiles, mostramos una dona "placeholder" gris
  const displayData = noData
    ? [{ name: "Sin datos", value: 1 }] // valor arbitrario para que la dona dibuje algo
    : formattedData;

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];
  const displayColors = noData ? ["#e5e7eb"] : COLORS;
