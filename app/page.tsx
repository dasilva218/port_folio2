import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
// import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projets from "@/components/Projets";

export default function Home() {
  return (
    <main className="p-5 md:px-[10%] ">
      <header className="relative z-1" >
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
