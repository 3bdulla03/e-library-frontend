import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Link, Route, Routes } from 'react-router-dom'

import Nav from "./components/Nav"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import BookDetails from "./pages/BookDetails"

const App = () => { 
  const [user, setUser] = useState(null)

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
    </div>
  )
 
}

export default App
