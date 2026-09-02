import React from "react";
import { upcoming, recentlyAdded, transitionPaths } from "../data/mockData";
import { useAuth } from "../auth";

export default function AdminDashboard() {
  const { user } = useAuth();
  if (!user || user.role !== "admin") return <div>Please sign in as admin to view this page.</div>;

  return (
    <div className="page admin">
      <h2>Flanders Make Academy — Coordinator dashboard</h2>
      <section>
        <h3>KPIs (demo)</h3>
        <ul>
          <li>Company interest (last 30d): 18 companies</li>
          <li>Registrations (upcoming): {upcoming.length}</li>
          <li>Questions from companies: 7 open</li>
        </ul>
      </section>

      <section>
        <h3>Portfolio overview</h3>
        <ul>{transitionPaths.map((p) => <li key={p.id}>{p.title} — {p.courses.length} courses</li>)}</ul>
      </section>

      <section>
        <h3>Recently added</h3>
        <ul>{recentlyAdded.map((r) => <li key={r.id}>{r.title}</li>)}</ul>
      </section>
    </div>
  );
}
