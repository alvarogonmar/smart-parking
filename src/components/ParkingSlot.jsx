import React from "react";
import "../css/ParkingSlot.css";

function ParkingSlot({ spot }) {
  return (
    <div
      className={`parking-slot ${spot.isOccupied ? "occupied" : "available"}`}
