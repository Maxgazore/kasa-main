import { NavLink } from 'react-router'

export function Header() {
  //Changement de style des boutons selon la page actif
  const getActive = ({ isActive }) => (isActive ? 'header__nav--active' : null)

  return (
    <header className="header">
      <img
        className="header__logo"
        src="../src/assets/images/logo.png"
        alt="Logo de Kasa"
      />
      <nav className="header__nav">
        <NavLink className={getActive} to="/">
          Accueil
        </NavLink>
        <NavLink className={getActive} to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
