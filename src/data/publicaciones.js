export const publicacionesIniciales = [
  {
    idPublicacion: 1001,
    idVendedor: 501,
    titulo: "Clics Modernos - Primera edicion",
    artistaMarca: "Charly Garcia",
    categoria: "Disco",
    formato: "Vinilo",
    genero: "Rock nacional",
    anioEdicion: 1983,
    paisOrigen: "Argentina",
    estadoConservacion: "Muy bueno",
    descripcion:
      "Vinilo de rock nacional con sobre interno original. Ideal para coleccionistas.",
    precio: 68000,
    aceptaPermuta: true,
    tipoOperacion: "Venta o permuta",
    ubicacion: "Palermo, CABA",
    fechaPublicacion: "2026-06-01",
    disponible: true
  },
  {
    idPublicacion: 1002,
    idVendedor: 502,
    titulo: "Greatest Hits en cassette",
    artistaMarca: "Queen",
    categoria: "Disco",
    formato: "Cassette",
    genero: "Rock clasico",
    anioEdicion: 1991,
    paisOrigen: "Reino Unido",
    estadoConservacion: "Bueno",
    descripcion: "Cassette usado, probado y funcionando. Caja con marcas normales de uso.",
    precio: 14500,
    aceptaPermuta: true,
    tipoOperacion: "Venta o permuta",
    ubicacion: "Rosario, Santa Fe",
    fechaPublicacion: "2026-06-03",
    disponible: true
  },
  {
    idPublicacion: 1003,
    idVendedor: 503,
    titulo: "Recital Unplugged",
    artistaMarca: "Soda Stereo",
    categoria: "Video",
    formato: "DVD",
    genero: "Rock latino",
    anioEdicion: 2007,
    paisOrigen: "Argentina",
    estadoConservacion: "Excelente",
    descripcion: "DVD original de recital, incluye booklet y caja sin roturas.",
    precio: 22000,
    aceptaPermuta: false,
    tipoOperacion: "Venta",
    ubicacion: "Cordoba Capital",
    fechaPublicacion: "2026-06-05",
    disponible: true
  },
  {
    idPublicacion: 1004,
    idVendedor: 504,
    titulo: "Tocadiscos automatico SL-BD20",
    artistaMarca: "Technics",
    categoria: "Equipo de audio",
    formato: "Tocadiscos",
    genero: "Audio vintage",
    anioEdicion: 1988,
    paisOrigen: "Japon",
    estadoConservacion: "Muy bueno",
    descripcion:
      "Tocadiscos vintage con correa nueva, capsula funcionando y tapa acrilica.",
    precio: 185000,
    aceptaPermuta: true,
    tipoOperacion: "Venta o permuta",
    ubicacion: "La Plata, Buenos Aires",
    fechaPublicacion: "2026-06-07",
    disponible: true
  },
  {
    idPublicacion: 1005,
    idVendedor: 505,
    titulo: "Pua gira mundial 1994",
    artistaMarca: "The Rolling Stones",
    categoria: "Objeto de recital",
    formato: "Pua",
    genero: "Rock",
    anioEdicion: 1994,
    paisOrigen: "Estados Unidos",
    estadoConservacion: "Excelente",
    descripcion: "Pua de coleccion en estuche protector. Pieza liviana para vitrina.",
    precio: 39000,
    aceptaPermuta: false,
    tipoOperacion: "Venta",
    ubicacion: "Mendoza Capital",
    fechaPublicacion: "2026-06-08",
    disponible: true
  },
  {
    idPublicacion: 1006,
    idVendedor: 506,
    titulo: "Historia del Jazz",
    artistaMarca: "Ted Gioia",
    categoria: "Libro musical",
    formato: "Libro",
    genero: "Jazz",
    anioEdicion: 2015,
    paisOrigen: "Espana",
    estadoConservacion: "Bueno",
    descripcion: "Libro musical con subrayados suaves en lapiz y lomo firme.",
    precio: 26000,
    aceptaPermuta: true,
    tipoOperacion: "Permuta",
    ubicacion: "Mar del Plata, Buenos Aires",
    fechaPublicacion: "2026-06-10",
    disponible: true
  },
  {
    idPublicacion: 1007,
    idVendedor: 507,
    titulo: "Amplificador integrado A-400",
    artistaMarca: "Pioneer",
    categoria: "Equipo de audio",
    formato: "Amplificador",
    genero: "Hi-Fi vintage",
    anioEdicion: 1990,
    paisOrigen: "Japon",
    estadoConservacion: "Bueno",
    descripcion:
      "Amplificador usado con entradas limpias, potes revisados y frente conservado.",
    precio: 210000,
    aceptaPermuta: true,
    tipoOperacion: "Venta o permuta",
    ubicacion: "San Miguel de Tucuman",
    fechaPublicacion: "2026-06-12",
    disponible: true
  },
  {
    idPublicacion: 1008,
    idVendedor: 508,
    titulo: "Bajo electrico Jazz Bass usado",
    artistaMarca: "Squier",
    categoria: "Instrumento",
    formato: "Bajo electrico",
    genero: "Instrumentos",
    anioEdicion: 2012,
    paisOrigen: "Indonesia",
    estadoConservacion: "Regular",
    descripcion:
      "Instrumento usado con marcas esteticas, calibrado reciente y funda incluida.",
    precio: 240000,
    aceptaPermuta: true,
    tipoOperacion: "Venta o permuta",
    ubicacion: "Neuquen Capital",
    fechaPublicacion: "2026-06-14",
    disponible: true
  }
];

export const categorias = [
  "Disco",
  "Video",
  "Equipo de audio",
  "Objeto de recital",
  "Libro musical",
  "Instrumento"
];

export const formatos = [
  "Vinilo",
  "Cassette",
  "DVD",
  "Tocadiscos",
  "Pua",
  "Libro",
  "Amplificador",
  "Bajo electrico"
];

export const generos = [
  "Rock nacional",
  "Rock clasico",
  "Rock latino",
  "Audio vintage",
  "Rock",
  "Jazz",
  "Hi-Fi vintage",
  "Instrumentos"
];

export const estadosConservacion = ["Excelente", "Muy bueno", "Bueno", "Regular"];

export const tiposOperacion = ["Venta", "Permuta", "Venta o permuta"];
