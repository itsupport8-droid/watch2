import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Class/LandingPage'
import CategoryPage from './Category/CategoryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category/:name" element={<CategoryPage />} />
    </Routes>
  )
}

export default App
