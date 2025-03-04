'use client'
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
// import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projets from "@/components/Projets";
import { useEffect, useState } from "react";

export default function Home() {

    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (
    <main className="p-5 md:px-[10%] ">
      <header className={` ${isSticky ? 'bg-black shadow-xl' : ''} sticky top-0 z-10 transition-all duration-300`} >
        <Navbar />
      </header>
      {/* <Hero /> */}
      <Hero2 />
      <About />
      <Experiences />
      <Projets />
      <Footer />
    </main>
  );
}
