import { Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse justify-center items-center my-10 md:my-32 md:flex-row " >
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour , <br /> je suis {" "}
          <span className="text-accent">Da Silva</span>
        </h1>

        <p className="my-4 text-md text-center md:text-left">
          Je suis un développeur fullstack <br />
          avec 5 ans d'expérience, utilisant React <br /> et Node.js. Contactez-moi si vous avez besoin
          de mes services.
        </p>
        <a href="" className=" btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="relative md:ml-60">
        <Image priority src={"/assets/wil.jpg"} alt="" width={500} height={500}  className="w-70 h-76 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 83%"
          }}
        />
      </div>
    </section>
  );
}