import Home from './pages/Home/Home'
import NavBar from './pages/NavBar/NavBar'
import Footer from './pages/Footer/Footer'

//ROUTES

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 return (
  <Router>
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
   </Routes>
   <Footer />
  </Router>
 )
}

export default App
