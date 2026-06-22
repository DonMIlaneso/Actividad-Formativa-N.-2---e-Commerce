import { useState } from "react";
import { Mail } from "lucide-react";

export default function NotificationSection() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  function registrarNotificacion(event) {
    event.preventDefault();

    if (!correo.trim()) {
      return;
    }

    setMensaje(
      `Listo. Te avisaremos en ${correo.trim()} cuando haya novedades del catalogo.`
    );
    setCorreo("");
  }

  return (
    <section className="section-block notification-section" aria-labelledby="notifications-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Notificaciones</p>
          <h2 id="notifications-title">Recibir novedades por correo</h2>
        </div>
      </div>

      <form className="notification-form" onSubmit={registrarNotificacion}>
        <label>
          <span>Correo electronico</span>
          <div>
            <Mail size={18} aria-hidden="true" />
            <input
              type="email"
              value={correo}
              placeholder="tu-correo@ejemplo.com"
              onChange={(event) => setCorreo(event.target.value)}
              required
            />
          </div>
        </label>
        <button type="submit">Activar notificaciones</button>
        {mensaje ? <p>{mensaje}</p> : null}
      </form>
    </section>
  );
}
