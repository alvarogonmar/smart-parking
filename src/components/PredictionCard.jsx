import React, { useEffect, useState } from "react";
import { trainParkingModel, predictSlot } from "../ai/trainModel";

function PredictionCard({ slots }) {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
