import { useState, useEffect } from "react"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import Favorites from "./pages/Favorites"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { CheckSession } from "./services/Auth"

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
