import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Process from "./sections/Process";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#karya"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Langsung ke karya
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
