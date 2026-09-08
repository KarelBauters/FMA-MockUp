import React, { useState } from "react";
import { Link } from "react-router-dom";
import { transitionPaths, upcoming, recentlyAdded } from "../data/mockData";
import FeedbackModal from "../components/FeedbackModal";

export default function Home() {
  const [showFeedback, setShowFeedback] = useState(false);
  return (
    <div className="page home">
      <section className="hero">
        <h2>Flanders Make Academy — explore technology trends and build capabilities</h2>
        <p>Mock demo: view portfolios, personalize learning with the capability navigator and track company progress.</p>
      </section>

      <section className="section">
        <h3>Transition paths</h3>
        <ul>
          {transitionPaths.map((p) => (
            <li key={p.id}>
              <Link to={`/path/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h3>Upcoming</h3>
        <ul>{upcoming.map((e) => <li key={e.id}>{e.title}</li>)}</ul>
      </section>

      <section className="section">
        <h3>Recently added</h3>
        <ul>{recentlyAdded.map((r) => <li key={r.id}>{r.title}</li>)}</ul>
      </section>

      <button onClick={() => setShowFeedback(true)}>Give feedback</button>
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </div>
  );
}
