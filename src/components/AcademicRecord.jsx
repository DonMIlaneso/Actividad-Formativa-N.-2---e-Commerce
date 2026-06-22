const campos = [
  ["idPublicacion", "entero", "Clave principal"],
  ["idVendedor", "entero", "Identificador del vendedor"],
  ["titulo", "alfanumerico", "Nombre de la publicacion"],
  ["artistaMarca", "alfanumerico", "Artista, autor o marca"],
  ["categoria", "alfanumerico", "Tipo general de objeto"],
  ["formato", "alfanumerico", "Formato fisico"],
  ["genero", "alfanumerico", "Genero o familia musical"],
  ["anioEdicion", "entero", "Anio de edicion o fabricacion"],
  ["paisOrigen", "alfanumerico", "Pais de origen"],
  ["estadoConservacion", "alfanumerico", "Estado fisico"],
  ["descripcion", "alfanumerico", "Detalle de la publicacion"],
  ["precio", "real", "Valor monetario"],
  ["aceptaPermuta", "logico", "Acepta intercambio"],
  ["tipoOperacion", "alfanumerico", "Venta, permuta o ambas"],
  ["ubicacion", "alfanumerico", "Lugar del vendedor"],
  ["fechaPublicacion", "fecha", "Fecha de alta"],
  ["disponible", "logico", "Disponibilidad"]
];

export default function AcademicRecord() {
  return (
    <section className="academic-panel" id="registro" aria-labelledby="record-title">
      <p className="eyebrow">Algoritmos y Estructuras de Datos</p>
      <h2 id="record-title">Registro principal</h2>

      <div className="code-record" aria-label="Definicion del registro principal">
        <pre>{`PublicacionMusical = REGISTRO
idPublicacion: entero
idVendedor: entero
titulo: alfanumerico
artistaMarca: alfanumerico
categoria: alfanumerico
formato: alfanumerico
genero: alfanumerico
anioEdicion: entero
paisOrigen: alfanumerico
estadoConservacion: alfanumerico
descripcion: alfanumerico
precio: real
aceptaPermuta: logico
tipoOperacion: alfanumerico
ubicacion: alfanumerico
fechaPublicacion: fecha
disponible: logico
FIN_REGISTRO`}</pre>
      </div>

      <div className="record-key">
        <span>Clave principal</span>
        <strong>idPublicacion</strong>
      </div>

      <p className="justification">
        idPublicacion debe ser la clave principal porque identifica de manera
        unica cada publicacion dentro del marketplace. No conviene usar titulo,
        artista, formato o categoria como clave porque esos datos pueden
        repetirse entre distintos vendedores o publicaciones. Por ejemplo,
        varias personas podrian publicar el mismo album en vinilo, pero cada
        publicacion debe diferenciarse de forma unica.
      </p>

      <div className="fields-table" role="table" aria-label="Campos y tipos de datos">
        <div className="table-row table-head" role="row">
          <span role="columnheader">Campo</span>
          <span role="columnheader">Tipo</span>
          <span role="columnheader">Uso</span>
        </div>
        {campos.map(([campo, tipo, uso]) => (
          <div className="table-row" role="row" key={campo}>
            <span role="cell">{campo}</span>
            <span role="cell">{tipo}</span>
            <span role="cell">{uso}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
