import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { CursorGlow, ScrollProgress } from "@/components/portfolio/Motion";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements, Interests } from "@/components/portfolio/Achievements";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bezawada Syam Pavan Pratap — Student & Aspiring Developer" },
      {
        name: "description",
        content:
          "Portfolio of Bezawada Syam Pavan Pratap: student and aspiring developer working with Python, HTML, CSS and JavaScript.",
      },
      { property: "og:title", content: "Bezawada Syam Pavan Pratap — Portfolio" },
      {
        property: "og:description",
        content: "Student and aspiring developer. Projects, skills, education and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
