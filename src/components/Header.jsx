import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Botón hamburguesa */}
      <button type="button" className="header__menu-btn" onClick={handleMenuToggle}>
        {isMenuOpen ? 'x' : '☰'}
      </button>

      {/* Logo */}
      <Link to="/" className="header__logo">
        STORE
      </Link>

      {/* Iconos derecha */}
      <nav>
        <button type="button" className="header__icon-btn">
          🔍
        </button>
        <button type="button" className="header__icon-btn">
          👤
        </button>
        <Link to="/cart">🛒</Link>
      </nav>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <nav className="header__menu">
          {/* Novedades */}
          <Link to="/catalog" className="header__menu-section">
            NOVEDADES
          </Link>
          {/* Colección */}
          <section className="header__menu-section">
            <p className="header__menu-title">COLECCCIÓN</p>
            <ul className="header__menu-list">
              <li>
                <Link to="/catalog?category=cazadoras" onClick={handleMenuToggle}>
                  Cazadoras
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=vestidos" onClick={handleMenuToggle}>
                  Vestidos
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=camisas" onClick={handleMenuToggle}>
                  Camisas
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=camisetas-tops" onClick={handleMenuToggle}>
                  Camisetas y Tops
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=punto" onClick={handleMenuToggle}>
                  Punto
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=pantalones" onClick={handleMenuToggle}>
                  Pantalones
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=faldas-shorts" onClick={handleMenuToggle}>
                  Faldas y Shorts
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=zapatos-accesorios" onClick={handleMenuToggle}>
                  Zapatos y Accesorios
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      )}
    </header>
  );
}
