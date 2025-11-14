import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LogInPage.css";

function LoginPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1234") {
      alert("Login exitoso");
      navigate("/dashboard"); // vuelve a la página principal
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Ingrese contraseña</h2>

}

export default LoginPage;
