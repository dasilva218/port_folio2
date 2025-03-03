import { Container } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center md:justify-between">
      <div className="">
        <Link href={"/"} className="flex items-center font-bold text-3xl md:text-xl gap-2" >
          <Container />
          da <span className="text-accent" >silva</span>
        </Link>
      </div>
      <ul className="hidden space-x-4 md:flex">
        <li className="btn btn-ghost btn-sm" ><Link href="/">Accueil</Link></li>
        <li className="btn btn-ghost btn-sm" ><Link href="/">A propos</Link></li>
        <li className="btn btn-ghost btn-sm" ><Link href="/">Mes expériences</Link></li>
        <li className="btn btn-ghost btn-sm" ><Link href="/">Mes projets</Link></li>
      </ul>
    </nav>
  );
}