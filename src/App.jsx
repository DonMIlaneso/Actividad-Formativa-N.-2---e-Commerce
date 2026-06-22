import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import SearchFilters from "./components/SearchFilters.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ListingForm from "./components/ListingForm.jsx";
import NotificationSection from "./components/NotificationSection.jsx";
import { cargarPublicaciones, guardarPublicaciones } from "./utils/storage.js";

const filtrosIniciales = {
  busqueda: "",
  categoria: "Todas",
  formato: "Todos",
  genero: "Todos",
  tipoOperacion: "Todos",
  estadoConservacion: "Todos"
};

function normalizar(valor) {
  return String(valor).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function App() {
  const [publicaciones, setPublicaciones] = useState(cargarPublicaciones);
  const [filtros, setFiltros] = useState(filtrosIniciales);
  const [seleccionada, setSeleccionada] = useState(publicaciones[0] ?? null);
  const [mensaje, setMensaje] = useState("");

  const publicacionesFiltradas = useMemo(() => {
    const texto = normalizar(filtros.busqueda);

    return publicaciones.filter((publicacion) => {
      const coincideTexto =
        normalizar(publicacion.titulo).includes(texto) ||
        normalizar(publicacion.artistaMarca).includes(texto);

      const coincideCategoria =
        filtros.categoria === "Todas" || publicacion.categoria === filtros.categoria;
      const coincideFormato =
        filtros.formato === "Todos" || publicacion.formato === filtros.formato;
      const coincideGenero =
        filtros.genero === "Todos" || publicacion.genero === filtros.genero;
      const coincideOperacion =
        filtros.tipoOperacion === "Todos" ||
        publicacion.tipoOperacion === filtros.tipoOperacion;
      const coincideEstado =
        filtros.estadoConservacion === "Todos" ||
        publicacion.estadoConservacion === filtros.estadoConservacion;

      return (
        coincideTexto &&
        coincideCategoria &&
        coincideFormato &&
        coincideGenero &&
        coincideOperacion &&
        coincideEstado
      );
    });
  }, [filtros, publicaciones]);

  function crearPublicacion(nuevaPublicacion) {
    const actualizadas = [nuevaPublicacion, ...publicaciones];
    setPublicaciones(actualizadas);
    guardarPublicaciones(actualizadas);
    setSeleccionada(nuevaPublicacion);
    setMensaje(`Publicacion #${nuevaPublicacion.idPublicacion} publicada correctamente.`);
    window.setTimeout(() => setMensaje(""), 4500);
  }

  function borrarPublicacion(idPublicacion) {
    const actualizadas = publicaciones.filter(
      (publicacion) => publicacion.idPublicacion !== idPublicacion
    );

    setPublicaciones(actualizadas);
    guardarPublicaciones(actualizadas);
    setSeleccionada((actual) =>
      actual?.idPublicacion === idPublicacion ? actualizadas[0] ?? null : actual
    );
    setMensaje(`Publicacion #${idPublicacion} eliminada del catalogo.`);
    window.setTimeout(() => setMensaje(""), 4500);
  }

  function limpiarFiltros() {
    setFiltros(filtrosIniciales);
  }

  return (
    <div className="app-shell">
      <Header />

      <main>
        <section className="hero-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Marketplace musical vintage</p>
            <h1>VinylSwap</h1>
            <p>
              Compra, venta y permuta de vinilos, cassettes, CDs, DVDs, libros,
              instrumentos, tocadiscos y audio retro para coleccionistas.
            </p>
            <div className="hero-actions">
              <a href="#catalogo" className="primary-link">
                Ver catalogo
              </a>
              <a href="#nuevo" className="secondary-link">
                Publicar objeto
              </a>
            </div>
          </div>

          <div className="record-showcase" aria-label="Logo visual de VinylSwap">
            <div className="vinyl-disc">
              <span>VS</span>
            </div>
            <div className="showcase-note">
              <strong>Objetos con historia</strong>
              <span>Vinilos, cassettes, equipos y rarezas musicales</span>
              <small>Compra, venta y permuta entre coleccionistas</small>
            </div>
          </div>
        </section>

        <section className="section-block" id="catalogo">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Catalogo</p>
              <h2>Publicaciones musicales</h2>
            </div>
            <span className="result-count">{publicacionesFiltradas.length} resultados</span>
          </div>

          <SearchFilters
            filtros={filtros}
            onChange={setFiltros}
            onClear={limpiarFiltros}
          />

          {mensaje ? <p className="save-message">{mensaje}</p> : null}

          <div className="catalog-layout">
            <div className="product-grid">
              {publicacionesFiltradas.map((publicacion) => (
                <ProductCard
                  key={publicacion.idPublicacion}
                  publicacion={publicacion}
                  activa={seleccionada?.idPublicacion === publicacion.idPublicacion}
                  onSelect={setSeleccionada}
                />
              ))}

              {publicacionesFiltradas.length === 0 ? (
                <div className="empty-state">
                  <h3>No hay publicaciones con esos filtros</h3>
                  <p>Proba limpiar filtros o buscar por otro titulo, artista o marca.</p>
                </div>
              ) : null}
            </div>

            <ProductDetail publicacion={seleccionada} onDelete={borrarPublicacion} />
          </div>
        </section>

        <section className="section-block form-record-grid" id="nuevo">
          <ListingForm publicaciones={publicaciones} onCreate={crearPublicacion} />
        </section>

        <NotificationSection />
      </main>
    </div>
  );
}
