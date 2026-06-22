import { useState } from "react";
import { Save } from "lucide-react";
import {
  categorias,
  estadosConservacion,
  formatos,
  generos,
  tiposOperacion
} from "../data/publicaciones.js";
import { calcularSiguienteId } from "../utils/storage.js";

const hoy = new Date().toISOString().slice(0, 10);

const valoresIniciales = {
  idVendedor: 509,
  titulo: "",
  artistaMarca: "",
  categoria: "Disco",
  formato: "Vinilo",
  genero: "Rock nacional",
  anioEdicion: 1980,
  paisOrigen: "Argentina",
  estadoConservacion: "Bueno",
  descripcion: "",
  precio: 10000,
  aceptaPermuta: true,
  tipoOperacion: "Venta o permuta",
  ubicacion: "",
  fechaPublicacion: hoy,
  disponible: true
};

function CampoTexto({ label, name, value, onChange, type = "text", required = true }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </label>
  );
}

function CampoSelect({ label, name, value, options, onChange }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export default function ListingForm({ publicaciones, onCreate }) {
  const [form, setForm] = useState(valoresIniciales);
  const siguienteId = calcularSiguienteId(publicaciones);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((actual) => ({
      ...actual,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nuevaPublicacion = {
      ...form,
      idPublicacion: siguienteId,
      idVendedor: Number(form.idVendedor),
      anioEdicion: Number(form.anioEdicion),
      precio: Number(form.precio)
    };

    onCreate(nuevaPublicacion);
    setForm({
      ...valoresIniciales,
      idVendedor: Number(form.idVendedor) + 1,
      fechaPublicacion: new Date().toISOString().slice(0, 10)
    });
  }

  return (
    <section className="form-panel" aria-labelledby="form-title">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Nueva publicacion</p>
          <h2 id="form-title">Cargar PublicacionMusical</h2>
        </div>
        <span className="next-id">Proximo idPublicacion: {siguienteId}</span>
      </div>

      <form onSubmit={handleSubmit} className="listing-form">
        <CampoTexto
          label="idVendedor"
          name="idVendedor"
          value={form.idVendedor}
          onChange={handleChange}
          type="number"
        />
        <CampoTexto
          label="titulo"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
        />
        <CampoTexto
          label="artistaMarca"
          name="artistaMarca"
          value={form.artistaMarca}
          onChange={handleChange}
        />
        <CampoSelect
          label="categoria"
          name="categoria"
          value={form.categoria}
          options={categorias}
          onChange={handleChange}
        />
        <CampoSelect
          label="formato"
          name="formato"
          value={form.formato}
          options={formatos}
          onChange={handleChange}
        />
        <CampoSelect
          label="genero"
          name="genero"
          value={form.genero}
          options={generos}
          onChange={handleChange}
        />
        <CampoTexto
          label="anioEdicion"
          name="anioEdicion"
          value={form.anioEdicion}
          onChange={handleChange}
          type="number"
        />
        <CampoTexto
          label="paisOrigen"
          name="paisOrigen"
          value={form.paisOrigen}
          onChange={handleChange}
        />
        <CampoSelect
          label="estadoConservacion"
          name="estadoConservacion"
          value={form.estadoConservacion}
          options={estadosConservacion}
          onChange={handleChange}
        />
        <CampoTexto
          label="precio"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          type="number"
        />
        <CampoSelect
          label="tipoOperacion"
          name="tipoOperacion"
          value={form.tipoOperacion}
          options={tiposOperacion}
          onChange={handleChange}
        />
        <CampoTexto
          label="ubicacion"
          name="ubicacion"
          value={form.ubicacion}
          onChange={handleChange}
        />
        <CampoTexto
          label="fechaPublicacion"
          name="fechaPublicacion"
          value={form.fechaPublicacion}
          onChange={handleChange}
          type="date"
        />

        <label className="form-field full-width">
          <span>descripcion</span>
          <textarea
            name="descripcion"
            value={form.descripcion}
            required
            rows="4"
            onChange={handleChange}
          />
        </label>

        <div className="checkbox-row full-width">
          <label>
            <input
              type="checkbox"
              name="aceptaPermuta"
              checked={form.aceptaPermuta}
              onChange={handleChange}
            />
            aceptaPermuta
          </label>
          <label>
            <input
              type="checkbox"
              name="disponible"
              checked={form.disponible}
              onChange={handleChange}
            />
            disponible
          </label>
        </div>

        <button type="submit" className="submit-button full-width">
          <Save size={18} aria-hidden="true" />
          Guardar en localStorage
        </button>
      </form>
    </section>
  );
}
