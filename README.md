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
- Boton "Estoy interesado" que abre una ventana de chat simulada con el vendedor.
- Indicador de vendedor en linea dentro del chat.
- Campo de correo electronico para simular notificaciones sobre un articulo.
- Formulario para crear una nueva publicacion.
- Guardado de nuevas publicaciones en `localStorage`.
- Borrado de publicaciones creadas por el usuario.
- Seccion academica "Registro principal".
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

## Ejecutar localmente

Requisitos:

- Node.js 18 o superior.
- npm.

Pasos:

```bash
cd VinylSwap
npm install
npm run dev
```

Luego abrir la URL que muestra Vite, normalmente:

```txt
http://localhost:5173
```

## Generar version de produccion

```bash
npm run build
```

Para previsualizar la build:

```bash
npm run preview
```

## Publicar y obtener una URL publica

### Opcion 1: Vercel

1. Subir este proyecto a un repositorio de GitHub.
2. Entrar a [Vercel](https://vercel.com/).
3. Elegir "Add New Project".
4. Importar el repositorio.
5. Framework Preset: Vite.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Presionar "Deploy".
9. Copiar la URL publica que entrega Vercel.

### Opcion 2: Netlify

1. Subir este proyecto a GitHub.
2. Entrar a [Netlify](https://www.netlify.com/).
3. Elegir "Add new site" y luego "Import an existing project".
4. Seleccionar el repositorio.
5. Build Command: `npm run build`.
6. Publish Directory: `dist`.
7. Presionar "Deploy site".
8. Copiar la URL publica que entrega Netlify.

### Opcion 3: GitHub Pages

1. Instalar `gh-pages`:

```bash
npm install --save-dev gh-pages
```

2. Agregar estos scripts a `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Ejecutar:

```bash
npm run deploy
```

4. Activar GitHub Pages desde la configuracion del repositorio si fuese necesario.
5. Copiar la URL publica de GitHub Pages.

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
      ListingForm.jsx
      ProductCard.jsx
      ProductDetail.jsx
      SearchFilters.jsx
    data/
      publicaciones.js
    utils/
      storage.js
```

## Video demo sugerido

1. Mostrar el inicio y explicar que VinylSwap es un marketplace musical vintage.
2. Usar el buscador y los filtros del catalogo.
3. Seleccionar una tarjeta y mostrar el detalle de una publicacion.
4. Presionar "Estoy interesado" para abrir el chat y ver si el vendedor esta en linea.
5. Escribir un correo para simular la activacion de notificaciones.
6. Crear una nueva publicacion desde el formulario.
7. Borrar una publicacion creada por el usuario.
8. Explicar que los cambios se guardan en `localStorage`.
