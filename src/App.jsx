import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import ParkingSlot from "./components/ParkingSlot";
import Header from "./components/Header";
import LogInPage from "./pages/LogInPage";
import Dashboard from "./pages/Dashboard";
import "../src/css/App.css"
import "../src/css/ParkingSlot.css";
function App() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const spotsCollection = collection(db, "parking-slots");

    const unsubscribe = onSnapshot(spotsCollection, (snapshot) => {
      const spotsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSpots(spotsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <Header />
            {spots.length === 0 && <p className="loading-text">Cargando datos...</p>}
            <div className="parking-container">
              {spots.map((spot) => (
                <ParkingSlot key={spot.id} spot={spot} />
              ))}
            </div>
          </div>
        } />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

