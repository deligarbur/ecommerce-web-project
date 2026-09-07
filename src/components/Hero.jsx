import { Link } from 'react-router-dom';
import './Hero.css';
export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">STORE</h1>

        <Link to="/catalog" className="hero__link">
          Ver colección
        </Link>
      </div>
    </section>
  );
}
