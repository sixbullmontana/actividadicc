# Conectados para aprender: herramientas digitales en la educación en línea

Blog educativo de la **Actividad 4. Diseño, desarrollo y publicación de un blog**
Materia: Computación Básica · Instituto Consorcio Clavijero (ICC)

Sitio estático (HTML5, CSS3 y JavaScript sin dependencias) listo para GitHub Pages.

## Estructura

```
/
├── index.html
├── css/styles.css
├── js/main.js        (lógica: menú, filtros, progreso)
├── js/entradas.js    (datos de las 33 entradas)
├── assets/images/   (logo.svg, favicon.svg)
├── README.md
└── .nojekyll
```

## 1. Dónde colocar el nombre del autor

El nombre **SERGIO ARMANDO ACEVEDO CHACON** ya está colocado en 3 lugares de `index.html`: la etiqueta
`<meta name="author">`, la barra superior del encabezado y el pie de página. Si necesitas cambiarlo,
usa Ctrl+F en el editor y reemplaza las tres coincidencias.

## 1.1 Colores del ICC

La paleta está al inicio de `css/styles.css` (bloque `PALETA INSTITUCIONAL`): `--icc-primary`, `--icc-dark`,
`--icc-accent` y `--icc-sky`. Si tienes los códigos oficiales de color del Instituto, cámbialos ahí y todo el sitio se actualiza.

## 1.2 Cómo agregar o editar entradas del blog

Las 33 entradas están en `js/entradas.js`. Para añadir una, copia un bloque `{ ... }` y cambia `titulo`, `cat`
(ia, seg, red, sw, emer, edu), `tipo` ("Blog" o "Wikipedia"), `fuente`, `url` y `resumen`. Con `dest: true` aparece en la portada
(solo las primeras 4 con esa marca). Escribe siempre el resumen con tus palabras y enlaza a la fuente original.

## 2. Ver el sitio localmente

Opción A: haz doble clic en `index.html` y se abrirá en el navegador.

Opción B (servidor local, con Python instalado), desde la carpeta del proyecto:

```
python -m http.server 8000
```

y abre `http://localhost:8000`.

## 3. Publicar en GitHub Pages

1. Inicia sesión en [github.com](https://github.com) y pulsa **New repository**.
2. Escribe un nombre (por ejemplo `blog-conectados-para-aprender`), elige **Public** y crea el repositorio.
3. Pulsa **uploading an existing file** (o *Add file > Upload files*) y sube **el contenido** de la carpeta del proyecto
   (`index.html`, `css`, `js`, `assets`, `README.md` y `.nojekyll`). `index.html` debe quedar en la raíz del repositorio.
   Pulsa **Commit changes**.
4. Ve a **Settings > Pages**.
5. En **Build and deployment**, en *Source* elige **Deploy from a branch**.
6. En *Branch* selecciona **main** y la carpeta **/ (root)**; pulsa **Save**.
7. Espera de 1 a 3 minutos y recarga la página de Pages: aparecerá el mensaje *Your site is live at…*
8. Tu enlace público será `https://USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.
9. Compruébalo abriéndolo en una ventana de incógnito o en otro dispositivo, sin iniciar sesión en GitHub.

Si no ves el sitio de inmediato, espera unos minutos y actualiza con Ctrl+F5. Los archivos que empiezan con punto
(`.nojekyll`) pueden ocultarse en algunos exploradores; si no logras subirlo, el sitio funciona igualmente.

## 4. Cómo actualizar el contenido

- Textos: edita `index.html` (cada herramienta es un `<article class="card">`).
- Colores y tipografía: variables al inicio de `css/styles.css` (`:root`).
- Cambios en GitHub: abre el archivo en el repositorio, pulsa el icono del lápiz, edita y haz *Commit changes*.
  El sitio se actualiza solo en unos minutos.

## 5. Lista de comprobación de la rúbrica

| # | Criterio | Dónde se cumple |
|---|----------|-----------------|
| 1 | Título, autor y contenido con títulos y subtemas | Encabezado, hero, `h1`–`h4` en todo el sitio |
| 2 | Definiciones de correo, mensajería y videollamadas | Sección *Herramientas de comunicación digital* |
| 3 | Ejemplo ICC por cada herramienta de comunicación | Bloque «Ejemplo de aplicación en el ICC» en cada tarjeta |
| 4 | Definiciones de redes sociales, blogs y páginas personales | Sección *Herramientas de socialización digital* |
| 5 | Ejemplo ICC por cada herramienta de socialización | Bloque «Ejemplo de aplicación en el ICC» en cada tarjeta |
| 6 | Referencias APA 7 e identificación de fuentes | Sección *Referencias bibliográficas* |
| 7 | Publicación con enlace público | Sección 3 de este README |
