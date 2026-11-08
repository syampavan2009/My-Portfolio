/**
 * All portfolio text lives here. Replace any text in [square brackets]
 * with your real details. Leave a link as "" to show it as "coming soon".
 */

import projectPreviewWeb from "@/assets/project-preview-web.jpg";
import projectPreviewPython from "@/assets/project-preview-python.jpg";
import projectPreviewApp from "@/assets/project-preview-app.jpg";

export const profile = {
  name: "BEZAWADA SYAM PAVAN PRATAP",
  shortName: "Syam Pavan",
  initials: "BS",
  greeting: "Hello, I'm",
  title: "Student & Aspiring Developer",
  intro:
    "I am an engineer building the foundational logic that combines human intelligence with machine capabilities.",
  tagline: "Building thoughtful things for the web, one line at a time.",
  /** Path or URL to your photo. Leave "" to show the placeholder. */
  photo: "",
  location: "[Vijayawada, India]",
  status: "Open to internships & collaborations",
  /** Words that cycle in the hero after "I work with". */
  rotatingWords: ["Python", "JavaScript", "HTML & CSS", "Web Design", "Problem Solving"],
};

export const about = {
  heading: "Curious by nature, developer by choice.",
  bio: [
    "[Your introduction — a short paragraph about who you are, where you study, and what you care about.]",
    "[Your learning journey — how you discovered programming, what you have explored so far, and what keeps you going.]",
  ],
  cards: [
    { label: "Academic status", value: "[e.g. 2nd-year B.Tech student]" },
    { label: "Interest in tech", value: "[e.g. Web development & UI design]" },
    { label: "Learning journey", value: "[e.g. Self-taught since 2023]" },
    { label: "Career ambition", value: "[e.g. Become a full-stack engineer]" },
  ],
};

export const education = [
  {
    institution: "[Your College / University name]",
    course: "[Degree — e.g. B.Tech in Computer Science]",
    period: "[20XX — Present]",
    year: "[Current year — e.g. 2nd Year]",
    details: "[Relevant details — CGPA, focus subjects, clubs or coursework.]",
  },
  {
    institution: "[Your Intermediate / Higher Secondary school]",
    course: "[Course — e.g. MPC]",
    period: "[20XX — 20XX]",
    year: "[Completed]",
    details: "[Relevant details — percentage, subjects or highlights.]",
  },
  {
    institution: "[Your School name]",
    course: "[Secondary School Certificate]",
    period: "[20XX]",
    year: "[Completed]",
    details: "[Relevant details — grade or highlights.]",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Technical Skills",
    items: ["Front-End Development", "Web Design", "Problem Solving", "Basic Programming"],
  },
  {
    category: "Tools",
    items: ["Visual Studio Code", "Git", "GitHub"],
  },
];

/**
 * Projects. `image` is the preview picture — the current ones are sample
 * illustrations; swap in a screenshot of your real project.
 * Keep `summary` to one short sentence and `highlights` to 2–3 words each.
 */
export const projects = [
  {
    title: "[Project title 01]",
    image: projectPreviewWeb,
    imageIsSample: true,
    summary: "[One sentence: what it is and who it helps.]",
    highlights: ["[Key feature]", "[Key feature]", "[What you learned]"],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://electric-arc-portfolio.lovable.app",
    githubUrl: "https://github.com/syampavan2009/electric-arc-portfolio",
  },
];

export const achievements = [
  { type: "Certifications", title: "[Certificate name]", detail: "[Issuer · Year]" },
  { type: "Academic", title: "[Academic achievement]", detail: "[Institution · Year]" },
  { type: "Workshops", title: "[Workshop attended]", detail: "[Organiser · Year]" },
  { type: "Competitions", title: "[Competition / hackathon]", detail: "[Result · Year]" },
  { type: "Milestones", title: "[Personal milestone]", detail: "[Short note]" },
];

export const interests = [
  {
    kind: "Technology interests",
    title: "[e.g. Web & UI engineering]",
    text: "[One line on why this area excites you.]",
  },
  {
    kind: "Programming interests",
    title: "[e.g. Clean, readable code]",
    text: "[One line on the kind of code you enjoy writing.]",
  },
  {
    kind: "Current learning goals",
    title: "[e.g. React & TypeScript]",
    text: "[One line on what you are learning right now.]",
  },
  {
    kind: "Career aspirations",
    title: "[e.g. Software engineer]",
    text: "[One line on where you want to be in a few years.]",
  },
];

/** Leave a value as "" until you add the real one — it will show as "Add your …". */
export const contact = {
  heading: "Let's build something meaningful together.",
  text: "I'm always open to learning opportunities, internships and interesting collaborations. Reach out — I usually reply within a day or two.",
  email: "",
  linkedin: "",
  github: "https://github.com/syampavan2009",
  form: {
    heading: "Send me a message",
    note: "Recruiters and collaborators — drop a note and I'll get back to you.",
    submit: "Send message",
    successTitle: "Message sent!",
    successText: "Thanks for reaching out. I'll reply to the email you gave me.",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
