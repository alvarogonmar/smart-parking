import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

function Header() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="app-header">
      <h1 className="header-title">Smart Parking</h1>
