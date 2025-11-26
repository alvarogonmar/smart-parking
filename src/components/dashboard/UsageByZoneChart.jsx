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

