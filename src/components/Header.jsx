import { Link } from 'react-router-dom';

export function Header() {
	return (
		<header>
			{/* Botón hamburguesa */}
			<button type='button' className='header__menu-btn'>
				☰
			</button>

			{/* Logo */}
			<Link to='/' className='header__logo'>
				STORE
			</Link>

			{/* Iconos derecha */}
			<nav>
				<button type='button' className='header__icon-btn'>
					🔍
				</button>
				<button type='button' className='header__icon-btn'>
					👤
				</button>
				<Link to='/cart'>🛒</Link>
			</nav>
		</header>
	);
}
