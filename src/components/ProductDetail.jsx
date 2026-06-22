import { useEffect, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Hash,
  MapPin,
  MessageCircle,
  PackageCheck,
  Send,
  Trash2,
  X,
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

export default function ProductDetail({ publicacion, onDelete }) {
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajeChat, setMensajeChat] = useState("");
  const [mensajesChat, setMensajesChat] = useState([]);

  useEffect(() => {
    setChatAbierto(false);
    setMensajeChat("");
    setMensajesChat([]);
  }, [publicacion?.idPublicacion]);

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

  const vendedorEnLinea = publicacion.idVendedor % 2 === 0;

  function mostrarInteres() {
    const mensajeInicial = `Hola, estoy interesado en ${publicacion.titulo}. Sigue disponible?`;
    setChatAbierto(true);
    setMensajesChat([
      {
        autor: "usuario",
        texto: mensajeInicial
      },
      {
        autor: "vendedor",
        texto: vendedorEnLinea
          ? "Hola! Si, sigue disponible. Puedo coordinar venta o permuta."
          : "Mensaje recibido. El vendedor respondera cuando vuelva a conectarse."
      }
    ]);
  }

  function enviarMensaje(event) {
    event.preventDefault();

    if (!mensajeChat.trim()) {
      return;
    }

    setMensajesChat((actuales) => [
      ...actuales,
      {
        autor: "usuario",
        texto: mensajeChat.trim()
      },
      {
        autor: "vendedor",
        texto: vendedorEnLinea
          ? "Gracias por el mensaje. Te respondo por aca para coordinar."
          : "El vendedor no esta en linea ahora, pero tu mensaje quedo enviado."
      }
    ]);
    setMensajeChat("");
  }

  function confirmarBorrado() {
    if (!publicacion.publicadoPorUsuario) {
      return;
    }

    const borrar = window.confirm(
      `Queres borrar la publicacion "${publicacion.titulo}" del catalogo?`
    );

    if (borrar) {
      onDelete(publicacion.idPublicacion);
    }
  }

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
          label="ID de publicacion"
          value={publicacion.idPublicacion}
        />
        <DetailItem
          icon={<UserRound size={18} aria-hidden="true" />}
          label="ID del vendedor"
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

      {chatAbierto ? (
        <div className="chat-window" role="dialog" aria-modal="true" aria-label="Chat con vendedor">
          <div className="chat-header">
            <div>
              <strong>Chat con vendedor #{publicacion.idVendedor}</strong>
              <span className={`online-status ${vendedorEnLinea ? "is-online" : ""}`}>
                <Circle size={10} fill="currentColor" aria-hidden="true" />
                {vendedorEnLinea ? "En linea" : "Sin conexion"}
              </span>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setChatAbierto(false)}
              aria-label="Cerrar chat"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="chat-body">
            {mensajesChat.map((mensaje, index) => (
              <p className={`chat-bubble ${mensaje.autor}`} key={`${mensaje.autor}-${index}`}>
                {mensaje.texto}
              </p>
            ))}
          </div>

          <form className="chat-form" onSubmit={enviarMensaje}>
            <input
              type="text"
              value={mensajeChat}
              placeholder="Escribi un mensaje..."
              onChange={(event) => setMensajeChat(event.target.value)}
            />
            <button type="submit" aria-label="Enviar mensaje">
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}

      <dl className="record-preview">
        <div>
          <dt>Artista o marca</dt>
          <dd>{publicacion.artistaMarca}</dd>
        </div>
        <div>
          <dt>Genero</dt>
          <dd>{publicacion.genero}</dd>
        </div>
        <div>
          <dt>Anio de edicion</dt>
          <dd>{publicacion.anioEdicion}</dd>
        </div>
        <div>
          <dt>Pais de origen</dt>
          <dd>{publicacion.paisOrigen}</dd>
        </div>
        <div>
          <dt>Estado de conservacion</dt>
          <dd>{publicacion.estadoConservacion}</dd>
        </div>
        <div>
          <dt>Tipo de operacion</dt>
          <dd>{publicacion.tipoOperacion}</dd>
        </div>
        <div>
          <dt>Acepta permuta</dt>
          <dd>{publicacion.aceptaPermuta ? "Si" : "No"}</dd>
        </div>
      </dl>

      <div className="detail-actions">
        <button type="button" className="interest-button" onClick={mostrarInteres}>
          <MessageCircle size={18} aria-hidden="true" />
          Estoy interesado
        </button>
        {publicacion.publicadoPorUsuario ? (
          <button type="button" className="danger-button" onClick={confirmarBorrado}>
            <Trash2 size={18} aria-hidden="true" />
            Borrar articulo
          </button>
        ) : null}
      </div>
    </aside>
  );
}
