import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TransitionPath from "./pages/TransitionPath";
import CompanyDashboard from "./pages/CompanyDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CourseDetail from "./pages/CourseDetail";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/path/:id" element={<TransitionPath />} />
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy Flanders Make <br> 2026</p>
      </footer>
    </div>
  );
}
