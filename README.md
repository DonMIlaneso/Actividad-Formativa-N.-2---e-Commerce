
# Actividad-Formativa-N.-2---e-Commerce

# VinylSwap

VinylSwap es una app web frontend tipo marketplace para publicar, buscar, comprar, vender y permutar objetos relacionados con musica fisica, vintage y coleccionable.

La app esta pensada para una actividad de Algoritmos y Estructuras de Datos. Por eso muestra de forma explicita el registro principal `PublicacionMusical`, sus campos, tipos de datos y clave principal.

## Funcionalidades

- Inicio con nombre, logo textual y descripcion del marketplace.
- Catalogo con publicaciones musicales simuladas.
- Tarjetas de productos con placeholder visual de estilo vinilo.
- Buscador por titulo, artista o marca.
- Filtros por categoria, formato, genero, tipo de operacion y estado de conservacion.
- Vista de detalle de una publicacion.
- Formulario para crear una nueva publicacion.
- Guardado de nuevas publicaciones en `localStorage`.
- Seccion academica "Registro principal".
- Seccion "Como usar la app" para grabar el video demo.
- Diseno responsive para computadora y celular.

## Registro principal

```txt
PublicacionMusical = REGISTRO
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
FIN_REGISTRO
```

## Clave principal

La clave principal es:

```txt
idPublicacion
```

`idPublicacion` debe ser la clave principal porque identifica de manera unica cada publicacion dentro del marketplace. No conviene usar titulo, artista, formato o categoria como clave porque esos datos pueden repetirse entre distintos vendedores o publicaciones. Por ejemplo, varias personas podrian publicar el mismo album en vinilo, pero cada publicacion debe diferenciarse de forma unica.

## Datos simulados

La app incluye 8 publicaciones iniciales:

- Vinilo de rock nacional.
- Cassette usado.
- DVD de recital.
- Tocadiscos vintage.
- Pua de coleccion.
- Libro musical.
- Amplificador o sistema de audio.
- Instrumento usado.

Los datos estan en:

```txt
src/data/publicaciones.js
```


## Estructura del proyecto

```txt
VinylSwap/
  index.html
  package.json
  vite.config.js
  README.md
  src/
    App.jsx
    main.jsx
    styles.css
    components/
      AcademicRecord.jsx
      Header.jsx
      HowToUse.jsx
      ListingForm.jsx
      ProductCard.jsx
      ProductDetail.jsx
      SearchFilters.jsx
    data/
      publicaciones.js
    utils/
      storage.js
```

