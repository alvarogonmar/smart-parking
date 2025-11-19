import React from "react";
import "../css/ParkingSlot.css";

function ParkingSlot({ spot }) {
  return (
    <div
      className={`parking-slot ${spot.isOccupied ? "occupied" : "available"}`}
    >
      <h2>{spot.id}</h2>
      <p>{spot.zoneId.replace("ZONE_", "")}</p>
