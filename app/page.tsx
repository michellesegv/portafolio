import Me from "@/components/Me";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Me />
        <About />
        <Skills />
        <Projects />
        <SoftSkills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
