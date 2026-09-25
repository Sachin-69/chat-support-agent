import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import BuiltWithAI from "@/components/BuiltWithAI";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Projects />
      <BuiltWithAI />
      <About />
      <Publications />
      <Contact />
      <ChatWidget />
    </main>
  );
}
