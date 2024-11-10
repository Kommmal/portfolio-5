
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#171d32] h-auto w-full overflow-hidden">
    <div>
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Contact />
    
    </div>
 
  </main>
  );
}