import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './header'
import Home from './Home'
import About from '../pages/about'
import Error from '../pages/Error'

function RoutesPath() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default RoutesPath
