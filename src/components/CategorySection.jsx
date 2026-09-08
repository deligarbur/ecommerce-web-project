import jacketsImage from '../assets/category-jackets.avif';
import dressesImage from '../assets/category-dresses.avif';
import accessoriesImage from '../assets/category-accessories.avif';
import { Link } from 'react-router-dom';
import './CategorySection.css';

const categories = [
  {
    slug: 'cazadoras',
    name: 'Cazadoras',
    image: jacketsImage,
  },
  {
    slug: 'vestidos',
    name: 'Vestidos',
    image: dressesImage,
  },
  {
    slug: 'zapatos-accesorios',
    name: 'Accesorios',
    image: accessoriesImage,
  },
];

export function CategorySection() {
  return (
    <section className="category-section">
      <h2 className="category-section__title">Explora la colección</h2>

      <div className="category-section__grid">
        {categories.map(category => (
          <Link key={category.slug} to={`/catalog?category=${category.slug}`} className="category-card">
            <img src={category.image} alt={`Colección de ${category.name}`} className="category-card__image" />

            <span className="category-card__name">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
