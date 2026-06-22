import { RotateCcw, Search } from "lucide-react";
import {
  categorias,
  estadosConservacion,
  formatos,
  generos,
  tiposOperacion
} from "../data/publicaciones.js";

function SelectField({ label, value, options, onChange, allLabel }) {
  return (
    <label className="filter-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option>{allLabel}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export default function SearchFilters({ filtros, onChange, onClear }) {
  function updateField(field, value) {
    onChange({ ...filtros, [field]: value });
  }

  return (
    <div className="filters-panel">
      <label className="search-field">
        <span>Buscar por titulo, artista o marca</span>
        <div>
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={filtros.busqueda}
            placeholder="Ej: Charly Garcia, Technics, Jazz..."
            onChange={(event) => updateField("busqueda", event.target.value)}
          />
        </div>
      </label>

      <div className="filters-grid">
        <SelectField
          label="Categoria"
          value={filtros.categoria}
          options={categorias}
          allLabel="Todas"
          onChange={(value) => updateField("categoria", value)}
        />
        <SelectField
          label="Formato"
          value={filtros.formato}
          options={formatos}
          allLabel="Todos"
          onChange={(value) => updateField("formato", value)}
        />
        <SelectField
          label="Genero"
          value={filtros.genero}
          options={generos}
          allLabel="Todos"
          onChange={(value) => updateField("genero", value)}
        />
        <SelectField
          label="Operacion"
          value={filtros.tipoOperacion}
          options={tiposOperacion}
          allLabel="Todos"
          onChange={(value) => updateField("tipoOperacion", value)}
        />
        <SelectField
          label="Estado"
          value={filtros.estadoConservacion}
          options={estadosConservacion}
          allLabel="Todos"
          onChange={(value) => updateField("estadoConservacion", value)}
        />

        <button type="button" className="icon-button reset-button" onClick={onClear}>
          <RotateCcw size={18} aria-hidden="true" />
          Limpiar
        </button>
      </div>
    </div>
  );
}
