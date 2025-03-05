
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import Image from "next/image";
import Title from './Title';

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Je suis un développeur frontend avec une bonne expérience.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];


export default function About() {
  return (
    <section className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      <p className="mt-4 font-normal text-md leading-7 rounded-xl text-neutral-300 shadow-2xl p-4 max-w-lg text-center mx-auto">
        En tant que développeur backend JavaScript expérimenté et formateur spécialisé en pédagogie active, mon parcours s'articule autour de deux axes complémentaires : l'architecture de systèmes robustes avec Node.js et la transmission de compétences techniques par des méthodes d'apprentissage collaboratives.
      </p>

      <div className="md:h-screen flex justify-center items-center ">
        <div className="hidden md:block">
          <Image width={300} height={300} src={'/assets/wil.jpg'} alt="" />
        </div>

        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">
                {section.icon}
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl  font-bold mb-1">
                  {section.title}
                </h2>
                <p className="text-sm">
                  {section.description}
                </p>
              </div>
            </div>
          ))

          }
        </div>

      </div>
    </section>
  );
}