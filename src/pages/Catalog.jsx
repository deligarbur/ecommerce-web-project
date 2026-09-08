import { ProductGrid } from '../components/ProductGrid';
import products from '../data/products.json';
import './Catalog.css';
export function Catalog() {
  return (
    <main className="catalog-page">
      <header className="catalog-page__header">
        <p className="catalog-page__eyebrow">Nueva colección</p>
        <h1 className="catalog-page__title">Novedades</h1>
        <p className="catalog-page__description">Descubre las últimas incorporaciones de la colección.</p>
      </header>

      <ProductGrid products={products} />
    </main>
  );
}
