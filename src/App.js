import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./Component/Register/RegisterPage";
import Navbar from "./Pages/Navbar/Navbar";
import LoginForm from "./Component/Login/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/DashBoard" element={<Navbar />} />
        <Route path="/authlogin" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
