import { Link } from 'react-router-dom';
import './ProductCard.css';

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__link">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <div className="product-card__info">
          <h2 className="product-card__name">{product.name}</h2>
          <p className="product-card__category">{product.category}</p>
          <p className="product-card__price">{product.price.toFixed(2)} €</p>
        </div>
      </Link>
    </article>
  );
}
