export type Course = {
  id: string;
  title: string;
  description: string;
  capabilities: string[]; // tags
  roles: string[]; // who it's for
  externalLink?: string;
  lecturers?: string[];
  certificates?: string[];
  upcomingDates?: { date: string; location?: string }[];
  recentlyAdded?: boolean;
};

export type TransitionPath = {
  id: string;
  title: string;
  introVideo?: string;
  capabilities: string[]; // high level capabilities/subdomains
  courses: string[]; // course ids
  description: string;
};

export const courses: Course[] = [
  {
    id: "c1",
    title: "Industry 4.0 Foundations",
    description: "Intro to cyber-physical systems and data-driven manufacturing.",
    capabilities: ["digitalization", "data"],
    roles: ["R&D", "Management"],
    lecturers: ["Prof. J. Demo"],
    certificates: ["Participation"],
    upcomingDates: [{ date: "2026-10-10", location: "Leuven" }],
    recentlyAdded: false
  },
  {
    id: "c2",
    title: "Predictive Maintenance Workshop",
    description: "Hands-on workshop covering sensors, data pipelines and models.",
    capabilities: ["sensing", "data", "predictive-maintenance"],
    roles: ["Technician", "R&D"],
    externalLink: "https://example-course-provider.com/pdm",
    lecturers: ["Dr. A. Expert"],
    certificates: ["Badge: Predictive Maintenance"],
    upcomingDates: [{ date: "2026-09-20", location: "Gent" }],
    recentlyAdded: true
  },
  {
    id: "c3",
    title: "Leading Digital Transformation",
    description: "For management: strategy and capability building.",
    capabilities: ["strategy", "org-competence"],
    roles: ["Management"],
    lecturers: ["L. Manager"],
    certificates: ["Certificate: Strategy"],
    recentlyAdded: true
  },
  {
    id: "c4",
    title: "FEA through simulation",
    description: "Hands-on workshop on software tools for FEA analysis",
    capabilities: ["strategy", "org-competence"],
    roles: ["Management"],
    lecturers: ["L. Manager"],
    certificates: ["Certificate: Strategy"],
    recentlyAdded: false
  }
];

export const transitionPaths: TransitionPath[] = [
  {
    id: "tp-digitalization",
    title: "Digitalization & Data",
    introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    capabilities: ["data", "sensing", "predictive-maintenance", "strategy"],
    courses: ["c1", "c2", "c3"]
    description: "Learn how Digitization and Data will help to transform your production!"
  },
  {
    id: "tp-Mechatronics",
    title: "Mechatronics System Design",
    introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    capabilities: ["data", "sensing", "predictive-maintenance", "strategy"],
    courses: ["c4"]
    description: "Learn to design the smart machines of the future"
  }
];

export const upcoming = [
  { id: "e1", title: "Predictive Maintenance — 20 Sep 2026", path: "tp-digitalization" },
  { id: "e2", title: "Digitalization Foundations — 10 Oct 2026", path: "tp-digitalization" }
];

export const recentlyAdded = [
  { id: "r1", title: "New lecturer: Dr. A. Expert", path: "tp-digitalization" },
  { id: "r2", title: "New course: Predictive Maintenance Workshop", path: "tp-digitalization" }
];
