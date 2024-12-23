function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="src/assets/logo.png"
        alt="Logo de Kasa"
      />
      <nav>
        <ul className="header__nav">
          <li className="header__nav--active">Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
