import {
  CalendarDays,
  CheckCircle2,
  Hash,
  MapPin,
  PackageCheck,
  UserRound
} from "lucide-react";

function DetailItem({ icon, label, value }) {
  return (
    <div className="detail-item">
      {icon}
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default function ProductDetail({ publicacion }) {
  if (!publicacion) {
    return (
      <aside className="detail-panel">
        <h2>Selecciona una publicacion</h2>
        <p>La vista de detalle muestra la informacion completa de la publicacion.</p>
      </aside>
    );
  }

  const precio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(publicacion.precio);

  return (
    <aside className="detail-panel">
      <div className="detail-header">
        <p className="eyebrow">Vista de detalle</p>
        <h2>{publicacion.titulo}</h2>
        <p>{publicacion.descripcion}</p>
      </div>

      <div className="detail-price">{precio}</div>

      <div className="detail-list">
        <DetailItem
          icon={<Hash size={18} aria-hidden="true" />}
          label="idPublicacion"
          value={publicacion.idPublicacion}
        />
        <DetailItem
          icon={<UserRound size={18} aria-hidden="true" />}
          label="idVendedor"
          value={publicacion.idVendedor}
        />
        <DetailItem
          icon={<PackageCheck size={18} aria-hidden="true" />}
          label="Categoria y formato"
          value={`${publicacion.categoria} / ${publicacion.formato}`}
        />
        <DetailItem
          icon={<CheckCircle2 size={18} aria-hidden="true" />}
          label="Disponible"
          value={publicacion.disponible ? "Si" : "No"}
        />
        <DetailItem
          icon={<CalendarDays size={18} aria-hidden="true" />}
          label="Fecha de publicacion"
          value={publicacion.fechaPublicacion}
        />
        <DetailItem
          icon={<MapPin size={18} aria-hidden="true" />}
          label="Ubicacion"
          value={publicacion.ubicacion}
        />
      </div>

      <dl className="record-preview">
        <div>
          <dt>artistaMarca</dt>
          <dd>{publicacion.artistaMarca}</dd>
        </div>
        <div>
          <dt>genero</dt>
          <dd>{publicacion.genero}</dd>
        </div>
        <div>
          <dt>anioEdicion</dt>
          <dd>{publicacion.anioEdicion}</dd>
        </div>
        <div>
          <dt>paisOrigen</dt>
          <dd>{publicacion.paisOrigen}</dd>
        </div>
        <div>
          <dt>estadoConservacion</dt>
          <dd>{publicacion.estadoConservacion}</dd>
        </div>
        <div>
          <dt>tipoOperacion</dt>
          <dd>{publicacion.tipoOperacion}</dd>
        </div>
        <div>
          <dt>aceptaPermuta</dt>
          <dd>{publicacion.aceptaPermuta ? "verdadero" : "falso"}</dd>
        </div>
      </dl>
    </aside>
  );
}
