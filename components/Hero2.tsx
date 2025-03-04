import { Mail, MessageSquare } from "lucide-react";
// import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero2() {
  return (
    <section className=" h-screen flex items-center justify-center">
      <div className="absolute bg-black inset-0 z-0 ">
        <Image
          src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=2070"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto z-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-zinc-50 bg-gradient-to-r to-blue-900/90">
            Développeur JavaScript  <br /> & <br /> Formateur en Pédagogie Active
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Spécialisé <span className="text-blue-900 font-bold">Backend</span> 
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
              Login with Email
            </button>
            {/* <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              En savoir plus
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}