import React from "react";
import { courses } from "../data/mockData";
import { useAuth } from "../auth";
import { Link } from "react-router-dom";

export default function EmployeeDashboard() {
  const { user } = useAuth();
  if (!user || user.role !== "employee") return <div>Please sign in as an employee to view this page.</div>;

  return (
    <div className="page employee">
      <h2>Capability Navigator & Personalized Trajectory</h2>
      <p>Profile: {user.name}</p>
      <p>Role example: R&D</p>

      <h3>Your personalized course list (mock)</h3>
      <ul>
        {courses.map((c) => (
          <li key={c.id}><Link to={`/course/${c.id}`}>{c.title}</Link> — <button>Add to my learning plan (demo)</button></li>
        ))}
      </ul>
    </div>
  );
}
