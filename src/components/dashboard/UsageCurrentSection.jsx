import React from "react";
import UsageCurrentChart from "./UsageCurrentChart";

function UsageCurrentSection({ slots }) {
  const occupiedCount = slots.filter(s => s.isOccupied).length;
  const freeCount = slots.filter(s => !s.isOccupied).length;
  const occupancy =
    slots.length > 0 ? ((occupiedCount / slots.length) * 100).toFixed(1) : 0;

  return (
    <div className="chart-card">
      <h2>Estado Actual (Tiempo Real)</h2>
      <div className="status-section">
        <div className="status-info">
          <h3>Lugares ocupados: {occupiedCount}</h3>
