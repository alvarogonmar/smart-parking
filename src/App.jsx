import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import ParkingSlot from "./components/ParkingSlot";
import "./App.css";
import "./components/ParkingSlot.css";

function App() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const spotsCollection = collection(db, "parking-slots");

    const unsubscribe = onSnapshot(spotsCollection, (snapshot) => {
