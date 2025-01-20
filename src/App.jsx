import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Header, Footer } from './components'
import { Home, About, Error, Detail } from './pages'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
