import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div> 
    </>
  )
}

export default App
