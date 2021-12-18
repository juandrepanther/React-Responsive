import Home from './pages/Home/Home'
import NavBar from './pages/NavBar/NavBar'
import Footer from './pages/Footer/Footer'

//ROUTES

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Features from './pages/Features/Features'
import Documents from './pages/Documents/Documents'

function App() {
 return (
  <Router>
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/features' element={<Features />} />
    <Route path='/documents' element={<Documents />} />
   </Routes>
   <Footer />
  </Router>
 )
}

export default App
