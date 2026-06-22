import { Disc3, PlusCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <Disc3 size={30} aria-hidden="true" />
        <span>VinylSwap</span>
      </a>

      <nav className="nav-links" aria-label="Navegacion principal">
        <a href="#catalogo">Catalogo</a>
        <a href="#nuevo">
          <PlusCircle size={16} aria-hidden="true" />
          Nueva publicacion
        </a>
      </nav>
    </header>
  );
}
