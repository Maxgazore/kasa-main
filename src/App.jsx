import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Detail from './pages/Detail'
import { Header, Footer } from './components'

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
