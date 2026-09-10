import { useSearchParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import products from '../data/products.json';
import './Catalog.css';

const categoryLabels = {
  cazadoras: 'Cazadoras',
  vestidos: 'Vestidos',
  camisas: 'Camisas',
  'camisetas-tops': 'Camisetas y Tops',
  punto: 'Punto',
  pantalones: 'Pantalones',
  'faldas-shorts': 'Faldas y Shorts',
  'zapatos-accesorios': 'Zapatos y Accesorios',
};

export function Catalog() {
  const [searchParams] = useSearchParams(); //lee parámetros de la URL
  const selectedCategory = searchParams.get('category'); //almacena el valor de la categoría

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products; //filtrar el array original

  const pageTitle = categoryLabels[selectedCategory] ?? 'Novedades';

  return (
    <main className="catalog-page">
      <header className="catalog-page__header">
        <p className="catalog-page__eyebrow">Nueva colección</p>
        <h1 className="catalog-page__title">{pageTitle}</h1>
        <p className="catalog-page__description">Descubre las últimas incorporaciones de la colección.</p>
      </header>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="catalog-page__empty">No hemos encontrado productos en esta categoría.</p>
      )}
    </main>
  );
}
