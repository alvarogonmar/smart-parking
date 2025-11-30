import React from "react";
import UsageCurrentChart from "./UsageCurrentChart";

function UsageCurrentSection({ slots }) {
  const occupiedCount = slots.filter(s => s.isOccupied).length;
