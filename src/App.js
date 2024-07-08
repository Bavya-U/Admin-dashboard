import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./Component/Register/RegisterPage";
import Navbar from "./Pages/Navbar/Navbar";
import LoginForm from "./Component/Login/LoginPage";
import Sidebar from "./Pages/Sidebar/Sidebar";
import DataTable from "./Pages/Mui-datatable/DataTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/DashBoard" element={<Navbar />} />
        <Route path="/authlogin" element={<LoginForm />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/admin_Dashboard" element={<DataTable />} />
        {/* <Route path="/login"element={<Sidebar path="/sidenav_dashboard"><DataTable /></Sidebar>}/> */}
        <Route
          path="/sidenav_dashboard"
          element={
            <Sidebar>
              <DataTable />
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
