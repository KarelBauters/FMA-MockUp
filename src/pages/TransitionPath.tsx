import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { transitionPaths, courses as allCourses } from "../data/mockData";
import CapabilityNavigator from "../components/CapabilityNavigator";
import { useAuth } from "../auth";
import FeedbackModal from "../components/FeedbackModal";

export default function TransitionPath() {
  const { id } = useParams();
  const path = transitionPaths.find((p) => p.id === id)!;
  const { user } = useAuth();
  const [filtered, setFiltered] = useState<string[] | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const onResult = (result: Record<string, number>) => {
    // simple filter: recommend courses that touch capabilities below 4
    const lowCaps = Object.entries(result).filter(([, v]) => v < 4).map(([k]) => k);
    const recommended = allCourses
      .filter((c) => c.capabilities.some((cap) => lowCaps.includes(cap)))
      .map((c) => c.id);
    setFiltered(recommended);
  };

  const list = filtered ? allCourses.filter((c) => filtered.includes(c.id)) : allCourses.filter((c) => path.courses.includes(c.id));

  return (
    <div className="page path">
      <h2>{path.title}</h2>

      {!user ? (
        <div>
          <iframe width="560" height="315" src={path.introVideo} title="intro" />
          <h3>Overview of courses</h3>
        </div>
      ) : (
        <div>
          <h3>Capability navigator</h3>
          <CapabilityNavigator capabilities={path.capabilities} onResult={onResult} />
        </div>
      )}

      <h3>Courses</h3>
      <ul>
        {list.map((c) => (
          <li key={c.id}><Link to={`/course/${c.id}`}>{c.title}</Link> — capabilities: {c.capabilities.join(", ")}</li>
        ))}
      </ul>

      <section className="section">
        <h2>Meet our Experts!</h2>
        {list.map((c) => (
        <li key={c.id}> c.lecturer</li>
        ))}
      </section>
      
      <button onClick={() => setShowFeedback(true)}>Give feedback on this path</button>
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </div>
  );
}
