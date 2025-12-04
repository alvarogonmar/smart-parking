import React, { useEffect, useState } from "react";
import { trainParkingModel, predictSlot } from "../ai/trainModel";

function PredictionGrid({ slots }) {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    async function runModel() {
      if (slots.length === 0) return;

      const trainedModel = await trainParkingModel(slots);
      setModel(trainedModel);

      const results = slots.map(slot => {
        const p = predictSlot(trainedModel, slot);
        return { id: slot.id, prediction: p };
      });

      setPredictions(results);
    }

    runModel();
  }, [slots]);

  return (
    <div className="chart-card">
      <h2>Predicción IA por Cajón (Próxima hora)</h2>

      {predictions.length === 0 && <p>Cargando IA...</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {predictions.map(pred => (
          <div 
            key={pred.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>{pred.id}</h3>
            {pred.prediction > 0.5 ? (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Alta probabilidad de ocuparse ({(pred.prediction * 100).toFixed(1)}%)
              </p>
            ) : (
              <p style={{ color: "green", fontWeight: "bold" }}>
                Baja probabilidad ({(pred.prediction * 100).toFixed(1)}%)
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PredictionGrid;
