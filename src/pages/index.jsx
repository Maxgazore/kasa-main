import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/style.css'
import Header from '../components/header'
import Footer from '../components/Footer'
import Home from '../components/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>
)
