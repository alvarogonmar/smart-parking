import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LogInPage.css";

function LoginPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

