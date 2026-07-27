import About from "@/components/about";
import Articles from "@/components/articles";
import Awards from "@/components/awards";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Work from "@/components/work";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-16 sm:gap-32">
      <Intro />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Education />
      <Projects />
      <Awards />
      <Articles />
      {/* <Contact /> */}
    </main>
  );
}
