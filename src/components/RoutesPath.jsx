import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './header'
import Home from './Home'
import About from '../pages/About'

function RoutesPath() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default RoutesPath
