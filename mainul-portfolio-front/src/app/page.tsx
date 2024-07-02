import About from "@/components/UI/HomePage/About";
import Blog from "@/components/UI/HomePage/Blog";
import Contact from "@/components/UI/HomePage/Contact";
import Experience from "@/components/UI/HomePage/Experience";
import Hero from "@/components/UI/HomePage/Hero/Hero";
import Projects from "@/components/UI/HomePage/Projects";
import Skills from "@/components/UI/HomePage/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </>
    </main>
  );
}
