import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../assets/style.css'
import Footer from '../../components/Footer'
import Routes from '../../components/RoutesPath'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
    <Footer />
  </StrictMode>
)
