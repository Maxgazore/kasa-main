import logo from '../assets/images/logo.png'

export function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo de Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
