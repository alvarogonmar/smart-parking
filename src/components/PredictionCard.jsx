import React, { useEffect, useState } from "react";
import { trainParkingModel, predictSlot } from "../ai/trainModel";

function PredictionCard({ slots }) {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function runModel() {
      const trainedModel = await trainParkingModel(slots);
      setModel(trainedModel);

      const firstSlot = slots[0];
      const predValue = predictSlot(trainedModel, firstSlot);

      setPrediction(predValue);
    }

    if (slots.length > 0) runModel();
  }, [slots]);

  return (
    <div className="chart-card">
      <h2>Predicción IA (Próxima hora)</h2>

      {!prediction && <p>Cargando IA...</p>}

      {prediction && (
        <>
          {prediction > 0.5 ? (
            <p style={{ color: "red", fontWeight: "bold" }}>
              🚗 Alta probabilidad de que se ocupe pronto ({(prediction*100).toFixed(1)}%)
            </p>
          ) : (
            <p style={{ color: "green", fontWeight: "bold" }}>
              🟢 Baja probabilidad de ocupación ({(prediction*100).toFixed(1)}%)
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default PredictionCard;
