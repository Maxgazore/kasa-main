import { NavLink } from 'react-router'

export function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="../src/assets/images/logo.png"
        alt="Logo de Kasa"
      />
      <nav className="header__nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'header__nav--active' : '')}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'header__nav--active' : '')}
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
