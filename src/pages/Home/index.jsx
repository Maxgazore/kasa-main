import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../assets/style.css'
import Footer from '../../components/Footer'
import Router from '../../components/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <Footer />
  </StrictMode>
)
