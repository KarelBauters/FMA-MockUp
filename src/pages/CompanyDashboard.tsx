import React from "react";
import { useAuth } from "../auth";
import { courses } from "../data/mockData";
import { Link } from "react-router-dom";

export default function CompanyDashboard() {
  const { user } = useAuth();
  if (!user || user.role !== "company") return <div>Please sign in as a company owner to view this page.</div>;

  return (
    <div className="page company">
      <h2>Company dashboard — {user.name}</h2>
      <section>
        <h3>Financial overview (mock)</h3>
        <p>Budget spent on training: €12,500</p>
        <p>Upcoming registrations: 5</p>
      </section>

      <section>
        <h3>Employees & their progress</h3>
        <ul>
          <li>Sofie — Technician — enrolled: Predictive Maintenance Workshop</li>
          <li>Tom — R&D — enrolled: Industry 4.0 Foundations</li>
        </ul>
      </section>

      <section>
        <h3>Certificates & credentials</h3>
        <ul>
          {courses.map((c) => <li key={c.id}>{c.title} — Certificates: {c.certificates?.join(", ")}</li>)}
        </ul>
      </section>
    </div>
  );
}
