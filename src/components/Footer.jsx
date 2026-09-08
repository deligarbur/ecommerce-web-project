import { Link } from 'react-router-dom';
import './Footer.css';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/" className="footer__logo">
          STORE
        </Link>

        <nav className="footer__nav" aria-label="Enlaces del pie de página">
          <Link to="/catalog">Catálogo</Link>
          <Link to="/login">Mi Cuenta</Link>
          <Link to="/cart">Carrito</Link>
        </nav>

        <p className="footer__copyright">© 2026 STORE</p>
      </div>
    </footer>
  );
}
