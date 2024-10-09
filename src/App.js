import React from 'react'
import Navbar from './layout/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Youtube from './views/Youtube'
import Hook from './components/Hooks'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/youtube' exact element={<Youtube />} />
      </Routes>
    </Router>
  )
}

export default App