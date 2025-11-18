import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import UsageBySlotChart from "../components/dashboard/UsageBySlotChart";
import UsageByZoneChart from "../components/dashboard/UsageByZoneChart";
import UsageFrequencyChart from "../components/dashboard/UsageFrequency";
import UsageCurrentSection from "../components/dashboard/UsageCurrentSection";
import "../css/Dashboard.css";

function Dashboard() {
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "parking-slots"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSlots(data);
    });

    return () => unsubscribe(); // Limpia el listener al desmontar
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard de Smart Parking</h1>
        <button className="back-button" onClick={() => navigate("/")}>
          ⬅ Regresar a Smart Parking
        </button>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h2>Uso por Cajón (segundos)</h2>
          <UsageBySlotChart data={slots} />
        </div>

        <div className="chart-card">
          <h2>Uso por Zona (segundos)</h2>
          <UsageByZoneChart data={slots} />
        </div>

        <div className="chart-card">
          <h2>Frecuencia de Uso por Cajón</h2>
          <UsageFrequencyChart data={slots} />
        </div>
            <UsageCurrentSection slots={slots} />
      </div>
    </div>
  );
}
