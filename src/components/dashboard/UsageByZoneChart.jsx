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

  return (
    <div className="chart-container" style={{ position: "relative" }}>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={displayData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}    /* dona hueca */
            startAngle={90}
            endAngle={-270}
            label={!noData}
          >
            {displayData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={displayColors[index % displayColors.length]} />
            ))}
          </Pie>

          <Tooltip formatter={(value) => `${value.toFixed(2)} min`} />
          {!noData && <Legend />}
        </PieChart>
      </ResponsiveContainer>

      {noData && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            color: "#9ca3af",
            fontWeight: 600,
            fontSize: 16,
            textAlign: "center",
          }}
        >
