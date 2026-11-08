/**
 * All portfolio text lives here.
 * Contains personal details, education history, about narrative, projects, and contact channels.
 */

import projectPreviewWeb from "@/assets/project-preview-web.jpg";
import projectPreviewPython from "@/assets/project-preview-python.jpg";
import projectPreviewApp from "@/assets/project-preview-app.jpg";
import profilePhoto from "@/assets/profile.jpg";

export const profile = {
  name: "BEZAWADA SYAM PAVAN PRATAP",
  shortName: "Syam Pavan",
  initials: "BS",
  greeting: "Hello, I'm",
  title: "1st-Year B.Tech Student · CSE (AI)",
  intro:
    "I am an engineer building the foundational logic that combines human intelligence with machine capabilities.",
  tagline: "Building thoughtful, impactful solutions for the future of technology.",
  /** Path to your portrait photo */
  photo: profilePhoto,
  location: "Vijayawada, India",
  status: "1st Year B.Tech · Open to internships & collaborations",
  /** Words that cycle in the hero after "I work with". */
  rotatingWords: [
    "Artificial Intelligence",
    "Python",
    "Web Development",
    "Machine Capabilities",
    "Problem Solving",
  ],
};

export const about = {
  heading: "Curious by nature, developer by choice.",
  eyebrow: "About Me",
  bio: [
    "I am a first-year B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence at Joy University. Passionate and highly motivated by emerging technologies, I thrive on exploring how deep computational logic and modern engineering solve real-world problems.",
    "My journey began with core programming in Python and web technologies, steadily evolving into an active pursuit of Artificial Intelligence and intelligent systems. I believe in hands-on experimentation, building clean, scalable code, and learning continuously to turn complex ideas into practical digital solutions.",
  ],
  cards: [
    {
      label: "Academic status",
      value: "1st-Year B.Tech in CSE (AI)",
      subtitle: "Joy University · 2026–2030",
    },
    {
      label: "Interest in tech",
      value: "AI & Modern Web Development",
      subtitle: "Solving real-world challenges",
    },
    {
      label: "Learning journey",
      value: "Programming Basics to AI",
      subtitle: "Continuous experimentation & skill growth",
    },
    {
      label: "Career ambition",
      value: "Impactful Software Developer",
      subtitle: "Building innovative, meaningful products",
    },
  ],
  journey: [
    {
      step: "01",
      title: "Programming Foundations",
      period: "Early Steps",
      desc: "Discovered programming through Python and structured logic, mastering algorithmic thinking, data manipulation, and core programming principles.",
    },
    {
      step: "02",
      title: "Web Technologies & Interfaces",
      period: "Practical Exploration",
      desc: "Explored HTML, CSS, JavaScript, Git, and GitHub to create responsive, intuitive interfaces and understand modern full-stack web architectures.",
    },
    {
      step: "03",
      title: "AI & Machine Capabilities",
      period: "Current Focus · 1st Year",
      desc: "Specializing in AI at Joy University, studying foundational machine intelligence, intelligent algorithms, and building software that bridges human and artificial capabilities.",
    },
  ],
};

export const education = [
  {
    institution: "Joy University",
    course: "B.Tech — Computer Science & Engineering (Specialization in AI)",
    period: "2026 — 2030",
    year: "1st Year",
    details:
      "Pursuing undergraduate studies with a specialized focus on Artificial Intelligence and core computer science fundamentals. Engaging in hands-on coding, algorithm design, and modern technological concepts.",
    grade: "1st Year · In Progress",
    badge: "Undergraduate",
  },
  {
    institution: "Sri Srinivasa Gravity Junior College",
    course: "Higher Secondary — MPC (Mathematics, Physics, Chemistry)",
    period: "2 Years",
    year: "Completed",
    details:
      "Graduated with an outstanding academic achievement of 98.2%. Built strong analytical thinking, advanced mathematical reasoning, and a rigorous scientific foundation.",
    grade: "98.2%",
    badge: "Junior College",
  },
  {
    institution: "Viswa Bharathi E.M High School, Gudivada",
    course: "Secondary School Certificate (SSC)",
    period: "Completed",
    year: "Completed",
    details:
      "Achieved a high academic distinction of 97.83%, fostering a strong discipline for academic excellence, curiosity for technology, and early passion for science.",
    grade: "97.83%",
    badge: "High School",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Technical & Specialization Areas",
    items: [
      "Artificial Intelligence Fundamentals",
      "Front-End Web Development",
      "Algorithmic Problem Solving",
      "Responsive UI Design",
    ],
  },
  {
    category: "Developer Tools",
    items: ["Visual Studio Code", "Git", "GitHub"],
  },
];

/**
 * Projects. Keep summary to one short sentence and highlights to 2–3 words each.
 */
export const projects = [
  {
    title: "Electric Arc Portfolio",
    image: projectPreviewWeb,
    imageIsSample: false,
    summary: "Personal developer portfolio built with TanStack Start, React 19, and Tailwind CSS.",
    highlights: ["Interactive UI", "Cyber Aesthetic", "Responsive Design"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://electric-arc-portfolio.lovable.app",
    githubUrl: "https://github.com/syampavan2009/portfolio",
  },
  {
    title: "AI Logic & Problem Solving",
    image: projectPreviewPython,
    imageIsSample: true,
    summary: "Exploratory algorithms and computational problem-solving scripts in Python.",
    highlights: ["Data Structures", "Python Core", "Clean Logic"],
    tech: ["Python", "Algorithms", "Git"],
    liveUrl: "",
    githubUrl: "https://github.com/syampavan2009",
  },
  {
    title: "Interactive Web Systems",
    image: projectPreviewApp,
    imageIsSample: true,
    summary: "Responsive client-side web components with modular JavaScript architecture.",
    highlights: ["Modern DOM", "Modular UI", "Git Workflow"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "",
    githubUrl: "https://github.com/syampavan2009",
  },
];

export const achievements = [
  {
    type: "Academic Excellence",
    title: "98.2% in Intermediate (MPC)",
    detail: "Sri Srinivasa Gravity Junior College",
  },
  {
    type: "Academic Excellence",
    title: "97.83% in Secondary School (SSC)",
    detail: "Viswa Bharathi E.M High School, Gudivada",
  },
  {
    type: "Specialization",
    title: "Admitted to B.Tech CSE (AI Specialization)",
    detail: "Joy University (2026–2030 Batch)",
  },
  {
    type: "Technical Milestones",
    title: "Core Python & Web Logic Mastery",
    detail: "Independent development & continuous learning",
  },
];

export const interests = [
  {
    kind: "Technology interests",
    title: "Artificial Intelligence & Intelligent Systems",
    text: "Fascinated by combining human intuition with machine capabilities to solve real-world problems.",
  },
  {
    kind: "Programming interests",
    title: "Clean, Scalable & Readable Code",
    text: "Dedicated to writing robust, well-structured logic with strong algorithmic foundations.",
  },
  {
    kind: "Current learning goals",
    title: "Advanced AI Architectures & Modern Web",
    text: "Deepening knowledge in computational learning models, React, and full-stack systems.",
  },
  {
    kind: "Career aspirations",
    title: "High-Impact Software & AI Engineer",
    text: "Aspiring to build innovative products and engineering breakthroughs that impact society.",
  },
];

export const contact = {
  heading: "Let's build something meaningful together.",
  text: "I'm always open to learning opportunities, technical conversations, internships, and student collaborations. Reach out — I usually reply within a day or two.",
  email: "syampavanbezawada03@gmail.com",
  linkedin: "https://www.linkedin.com/in/syam-pavan-pratap-bezawada",
  linkedinDisplay: "Syam Pavan Pratap Bezawada",
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
