# STORE

Tienda online de moda desarrollada con React. El proyecto está construido desde cero como un MVP inspirado en tiendas de moda como Zara o Mango.

## Estado del proyecto

Actualmente incluye:

- Header responsive con menú desplegable.
- Navegación mediante React Router.
- Landing con Hero y llamada a la acción.
- Categorías destacadas en la página principal.
- Catálogo de productos.
- Tarjetas reutilizables de producto.
- Página de detalle de producto.
- Footer global.
- Diseño responsive para escritorio, tablet y móvil.

## Tecnologías

- React
- Vite
- JavaScript
- React Router
- CSS
- Lucide React
- pnpm

## Instalación

1. Clona el repositorio e instala las dependencias:

```bash
git clone URL_DEL_REPOSITORIO
cd ecommerce-web-project
pnpm install
```

2. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en la dirección que indique Vite, normalmente:
http://localhost:5173

### Scripts disponibles

```bash
pnpm dev
```

Inicia el servidor de desarrollo.

```bash
pnpm build
```

Genera la versión de producción.

```bash
pnpm preview
```

Previsualiza localmente la versión de producción.

```bash
pnpm lint
```

Revisa posibles errores y problemas de calidad en el código 🫶🏻

## Rutas principales

/ Página principal
/catalog Catálogo de productos
/product/:slug Detalle de producto
/cart Carrito
/login Login

## Estructura del proyecto

src/
├── assets/
├── components/
│ ├── CategorySection.jsx
│ ├── CategorySection.css
│ ├── Footer.jsx
│ ├── Footer.css
│ ├── Header.jsx
│ ├── Header.css
│ ├── Hero.jsx
│ ├── Hero.css
│ ├── ProductCard.jsx
│ ├── ProductCard.css
│ ├── ProductGrid.jsx
│ └── ProductGrid.css
├── data/
│ └── products.json
├── pages/
│ ├── Cart.jsx
│ ├── Catalog.jsx
│ ├── Catalog.css
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── NotFound.jsx
│ ├── ProductDetail.jsx
│ └── ProductDetail.css
├── styles/
│ └── main.css
├── App.jsx
└── main.jsx

## Próximos pasos

- Añadir selección de tallas y colores.
- Añadir filtros al catálogo.
- Implementar el carrito con Context.
- Persistir el carrito en localStorage.
- Mejorar estados de carga y error.
- Añadir login simulado.
- Incorporar tests automatizados.
- Preparar el proyecto para deploy.
