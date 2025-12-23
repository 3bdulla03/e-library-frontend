import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"

import Nav from "./components/Nav"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import Book from "./pages/Book"
import Favorites from "./pages/Favorites"
import "./App.css"
import { Link, Route, Routes } from 'react-router-dom'

import Nav from "./components/Nav"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import BookDetails from "./pages/BookDetails"

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    // Resets all auth related state and clears localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  )
}

export default App
