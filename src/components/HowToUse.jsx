import { Filter, MousePointerClick, PlusCircle, Video } from "lucide-react";

const pasos = [
  {
    icon: <MousePointerClick size={20} aria-hidden="true" />,
    title: "Explorar",
    text: "Selecciona una tarjeta del catalogo y revisa todos los campos del registro en la vista de detalle."
  },
  {
    icon: <Filter size={20} aria-hidden="true" />,
    title: "Filtrar",
    text: "Busca por titulo, artista o marca y combina filtros por categoria, formato, genero, operacion y estado."
  },
  {
    icon: <PlusCircle size={20} aria-hidden="true" />,
    title: "Publicar",
    text: "Completa el formulario. La app asigna un idPublicacion unico y guarda la publicacion en localStorage."
  },
  {
    icon: <Video size={20} aria-hidden="true" />,
    title: "Demo",
    text: "Muestra el recorrido completo: catalogo, filtros, detalle y carga de una nueva publicacion."
  }
];

export default function HowToUse() {
  return (
    <section className="section-block how-to" aria-labelledby="how-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Guia para video demo</p>
          <h2 id="how-title">Como usar la app</h2>
        </div>
      </div>

      <div className="steps-grid">
        {pasos.map((paso) => (
          <article className="step-card" key={paso.title}>
            <div className="step-icon">{paso.icon}</div>
            <h3>{paso.title}</h3>
            <p>{paso.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
