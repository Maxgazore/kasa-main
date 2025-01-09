import { Link } from 'react-router'

export function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="src/assets/images/logo.png"
        alt="Logo de Kasa"
      />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}
