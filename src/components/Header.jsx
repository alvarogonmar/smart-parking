import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

function Header() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/login");
  };

