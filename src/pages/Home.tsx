import React, { useState } from "react";
import { Link } from "react-router-dom";
import { transitionPaths, upcoming, recentlyAdded, courses } from "../data/mockData";
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
        <div className="frame">
          <h2>Transition Paths</h2>
          <div className="transition-grid">
            {(transitionPaths as TransitionPathTile[]).map((p) => (
              <article key={p.id} className="transition-tile">
                

                <h4 className="transition-title">
                  <Link to={`/path/${p.id}`}>{p.title}</Link>
                </h4>
                <img src={`${import.meta.env.BASE_URL}${p.visual || "logo.jpeg"}`} alt={p.title} className="transition-image-placeholder" />
                <p className="transition-description">
                  {p.description || "Short description placeholder for this transition path."}
                </p>

                <p className="transition-meta">
                  {p.courses.length} {p.courses.length === 1 ? "course" : "courses"}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className= "frame">
        <h2>Upcoming</h2>
          <div className="upcoming-scroll">
              {courses
                .filter((course) => (course.upcomingDates?.length ?? 0) > 0)
                .map((course) => {
                  const upcomingDate = course.upcomingDates![0];
          
                  // Find a transition path that contains this course id
                  const path = transitionPaths.find((p) => p.courses.includes(course.id));
          
                  return (
                    <article key={course.id} className="upcoming-tile">
                      <h4 className="upcoming-title">
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                      </h4>
                      <p className="upcoming-path">
                        {path ? <Link to={`/path/${path.id}`}>{path.title}</Link> : "Transition path unavailable"}
                      </p>
                      <p className="upcoming-lecturer">{course.lecturer ?? "Lecturer to be announced"}</p>
                      <p className="upcoming-date">
                        {`${upcomingDate.date}${upcomingDate.location ? ` — ${upcomingDate.location}` : ""}`}
                      </p>
                    </article>
                  );
                })}
            </div>
        </div>
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
