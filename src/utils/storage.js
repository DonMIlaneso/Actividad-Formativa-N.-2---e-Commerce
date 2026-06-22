import { publicacionesIniciales } from "../data/publicaciones.js";

const STORAGE_KEY = "vinylswap_publicaciones";
const ID_INICIAL_MAXIMO = Math.max(
  ...publicacionesIniciales.map((publicacion) => publicacion.idPublicacion)
);

function normalizarPublicacion(publicacion) {
  return {
    ...publicacion,
    publicadoPorUsuario:
      typeof publicacion.publicadoPorUsuario === "boolean"
        ? publicacion.publicadoPorUsuario
        : Number(publicacion.idPublicacion) > ID_INICIAL_MAXIMO
  };
}

export function cargarPublicaciones() {
  const guardadas = window.localStorage.getItem(STORAGE_KEY);

  if (!guardadas) {
    return publicacionesIniciales.map(normalizarPublicacion);
  }

  try {
    const publicaciones = JSON.parse(guardadas);
    return Array.isArray(publicaciones)
      ? publicaciones.map(normalizarPublicacion)
      : publicacionesIniciales.map(normalizarPublicacion);
  } catch {
    return publicacionesIniciales.map(normalizarPublicacion);
  }
}

export function guardarPublicaciones(publicaciones) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(publicaciones));
}

export function calcularSiguienteId(publicaciones) {
  return publicaciones.reduce(
    (maximo, publicacion) => Math.max(maximo, Number(publicacion.idPublicacion)),
    1000
  ) + 1;
}
