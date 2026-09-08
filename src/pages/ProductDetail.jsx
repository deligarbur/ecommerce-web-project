import { Link, useParams } from 'react-router-dom';
import products from '../data/products.json';
import './ProductDetail.css';

export function ProductDetail() {
  const { slug } = useParams();

  const product = products.find(item => item.slug === slug);

  if (!product) {
    return (
      <main className="product-detail product-detail--not-found">
        <h1>Producto no encontrado</h1>
        <Link to="/catalog">Volver al catálogo</Link>
      </main>
    );
  }
  return (
    <main className="product-detail">
      <Link to="/catalog" className="product-detail__back-link">
        Volver al catálogo
      </Link>

      <div className="product-detail__content">
        <img src={product.image} alt={product.name} className="product-detail__image" />

        <div className="product-detail__info">
          <p className="product-detail__category">{product.category}</p>

          <h1 className="product-detail__name">{product.name}</h1>

          <p className="product-detail__price">{product.price.toFixed(2)} €</p>

          <p className="product-detail__description">{product.description}</p>

          <div className="product-detail__option">
            <h2>Tallas</h2>
            <ul className="product-detail__list">
              {product.sizes.map(size => (
                <li key={size}>{size}</li>
              ))}
            </ul>
          </div>

          <div className="product-detail__option">
            <h2>Colores</h2>
            <ul className="product-detail__list">
              {product.colors.map(color => (
                <li key={color}>{color}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
