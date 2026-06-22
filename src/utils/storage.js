import { publicacionesIniciales } from "../data/publicaciones.js";

const STORAGE_KEY = "vinylswap_publicaciones";

export function cargarPublicaciones() {
  const guardadas = window.localStorage.getItem(STORAGE_KEY);

  if (!guardadas) {
    return publicacionesIniciales;
  }

  try {
    const publicaciones = JSON.parse(guardadas);
    return Array.isArray(publicaciones) ? publicaciones : publicacionesIniciales;
  } catch {
    return publicacionesIniciales;
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
