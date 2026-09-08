import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, UserRound, ShoppingBag } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Botón hamburguesa */}
      <button
        type="button"
        className="header__menu-btn"
        onClick={handleMenuToggle}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        aria-controls="header-menu"
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {/* Logo */}
      <Link to="/" className="header__logo">
        STORE
      </Link>

      {/* Iconos derecha */}
      <nav className="header__actions">
        <button type="button" className="header__icon-btn" aria-label="Buscar">
          <Search aria-hidden="true" />
        </button>

        <button type="button" className="header__icon-btn" aria-label="Mi cuenta">
          <UserRound aria-hidden="true" />
        </button>

        <Link to="/cart" className="header__cart" aria-label="Ver carrito">
          <ShoppingBag aria-hidden="true" />
        </Link>
      </nav>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <nav id="header-menu" className="header__menu">
          {/* Novedades */}
          <Link to="/catalog" className="header__menu-section" onClick={handleMenuToggle}>
            NOVEDADES
          </Link>
          {/* Colección */}
          <section className="header__menu-section">
            <p className="header__menu-title">COLECCIÓN</p>
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
