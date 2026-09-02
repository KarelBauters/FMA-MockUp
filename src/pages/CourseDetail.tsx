import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/mockData";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id)!;
  if (!course) return <div>Course not found</div>;
  return (
    <div className="page course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p><strong>Capabilities:</strong> {course.capabilities.join(", ")}</p>
      <p><strong>Roles:</strong> {course.roles.join(", ")}</p>
      <p><strong>Lecturers:</strong> {course.lecturers?.join(", ")}</p>
      <p><strong>Certificates:</strong> {course.certificates?.join(", ")}</p>
      {course.externalLink ? <p><a href={course.externalLink} target="_blank">External course link</a></p> : <button>Enroll (demo)</button>}
    </div>
  );
}
