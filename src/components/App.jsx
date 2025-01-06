import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './Header'
import Home from './Home'
import About from '../pages/About'
import Error from '../pages/Error'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
