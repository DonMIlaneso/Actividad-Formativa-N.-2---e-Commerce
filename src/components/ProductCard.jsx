import { BadgeDollarSign, Repeat2 } from "lucide-react";

const acentosPorCategoria = {
  Disco: "record-accent-red",
  Video: "record-accent-gold",
  "Equipo de audio": "record-accent-copper",
  "Objeto de recital": "record-accent-blue",
  "Libro musical": "record-accent-green",
  Instrumento: "record-accent-purple"
};

export default function ProductCard({ publicacion, activa, onSelect }) {
  const precio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(publicacion.precio);

  return (
    <article className={`product-card ${activa ? "is-active" : ""}`}>
      <button type="button" onClick={() => onSelect(publicacion)}>
        <div className={`product-art ${acentosPorCategoria[publicacion.categoria] ?? ""}`}>
          <div className="mini-record">
            <span>{publicacion.formato.slice(0, 2).toUpperCase()}</span>
          </div>
        </div>

        <div className="product-content">
          <div className="card-topline">
            <span>#{publicacion.idPublicacion}</span>
            <span>{publicacion.estadoConservacion}</span>
          </div>

          <h3>{publicacion.titulo}</h3>
          <p>{publicacion.artistaMarca}</p>

          <div className="tag-row">
            <span>{publicacion.categoria}</span>
            <span>{publicacion.formato}</span>
            <span>{publicacion.genero}</span>
          </div>

          <div className="price-row">
            <span>
              <BadgeDollarSign size={17} aria-hidden="true" />
              {precio}
            </span>
            {publicacion.aceptaPermuta ? (
              <span>
                <Repeat2 size={16} aria-hidden="true" />
                Permuta
              </span>
            ) : null}
          </div>
        </div>
      </button>
    </article>
  );
}
