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
      <div
        aria-label="User Login Button"
        tabindex="0"
        role="button"
        className="user-profile"
        onClick={handleLoginClick}
    >
        <div className="user-profile-inner">
            <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
