/**
 * All portfolio text lives here.
 * Contains personal details, education history, about narrative, projects, and contact channels.
 */

import projectPreviewWeb from "@/assets/project-preview-web.jpg";
import projectPreviewApp from "@/assets/project-preview-app.jpg";
import profilePhoto from "@/assets/profile.jpg";

export const profile = {
  name: "BEZAWADA SYAM PAVAN PRATAP",
  shortName: "Syam Pavan",
  initials: "BS",
  greeting: "Hello, I'm",
  title: "1st-Year B.Tech Student · CSE (AI) · NIAT Scholar",
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
    "n8n Automation",
    "Web Development",
    "Problem Solving",
  ],
};

export const about = {
  heading: "Curious by nature, developer by choice.",
  eyebrow: "About Me",
  bio: [
    "I am a first-year B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence at Joy University, concurrently advancing my technical and engineering competencies through the NIAT Upskilling Program. Passionate and highly motivated by emerging technologies, I thrive on exploring how deep computational logic, intelligent algorithms, and modern systems solve real-world problems.",
    "My learning journey spans core programming in Python, modern web development, and event-driven automation using n8n workflows. Through hands-on experimentation at Joy University and the NIAT Upskilling Program, I focus on building practical, scalable, and intelligent software that bridges human and machine capabilities.",
  ],
  cards: [
    {
      label: "Academic status",
      value: "1st-Year B.Tech in CSE (AI)",
      subtitle: "Joy University & NIAT Upskilling",
    },
    {
      label: "Interest in tech",
      value: "AI, Web & n8n Automation",
      subtitle: "Solving real-world challenges",
    },
    {
      label: "Learning journey",
      value: "Joy University & NIAT Program",
      subtitle: "Continuous practical skill growth",
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
      desc: "Discovered programming through Python and structured logic, mastering algorithmic thinking, data manipulation, and core computational problem solving.",
    },
    {
      step: "02",
      title: "Web Interfaces & Automation",
      period: "Practical Exploration",
      desc: "Explored HTML, CSS, JavaScript, Git/GitHub, and n8n workflow automation to create responsive interfaces and automated event-driven pipelines.",
    },
    {
      step: "03",
      title: "AI Specialization & NIAT Upskilling",
      period: "Current Focus · 1st Year",
      desc: "Specializing in AI at Joy University alongside intensive technical training with the NIAT Upskilling Program, building software that bridges human intuition and machine intelligence.",
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
    institution: "NIAT",
    course: "Professional Technical Upskilling Program",
    period: "2026 — Present",
    year: "Enrolled",
    details:
      "Undergoing rigorous, industry-aligned technical training covering modern software engineering, workflow automation, and practical system building to complement university academics.",
    grade: "In Progress",
    badge: "Upskilling Program",
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
      "Achieved a high academic distinction of 97.83%, fostering early intellectual discipline, curiosity for technology, and a solid foundation in mathematics and science.",
    grade: "97.83%",
    badge: "High School",
  },
];

export const skills = [
  {
    category: "Programming & Automation",
    items: ["Python", "JavaScript", "HTML", "CSS", "n8n Automation"],
  },
  {
    category: "Technical & Specialization Areas",
    items: [
      "Artificial Intelligence Fundamentals",
      "n8n Workflow Automation",
      "Front-End Web Development",
      "Algorithmic Problem Solving",
      "Responsive UI Design",
    ],
  },
  {
    category: "Developer Tools",
    items: ["Visual Studio Code", "n8n", "Git", "GitHub"],
  },
];

/**
 * Projects.
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
    githubUrl: "https://github.com/syampavan2009/My-Portfolio",
  },
  {
    title: "n8n Intelligent Automation Workflows",
    image: projectPreviewApp,
    imageIsSample: false,
    summary: "Automated event-driven workflow pipelines connecting webhooks, APIs, and AI tools for smart task execution.",
    highlights: ["Workflow Automation", "API Integration", "AI Tooling"],
    tech: ["n8n", "Webhooks", "REST APIs", "AI Automation"],
    liveUrl: "",
    githubUrl: "https://github.com/syampavan2009",
  },
];

export const achievements = [
  {
    type: "AI Workshop Certification",
    title: "BE-10X Workshop Certificate",
    detail: "AI Tools & ChatGPT Workshop · Issued September 13th, 2026",
    certificateUrl: "/be10x-certificate.pdf",
  },
  {
    type: "Technical Specialization",
    title: "Admitted to B.Tech CSE (AI Specialization)",
    detail: "Joy University (2026–2030 Batch)",
  },
  {
    type: "Industry Upskilling",
    title: "NIAT Professional Upskilling Program",
    detail: "Advanced hands-on technical software engineering training",
  },
  {
    type: "Technical Milestones",
    title: "Core Python & Workflow Automation",
    detail: "Building automated workflows & algorithmic logic",
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
