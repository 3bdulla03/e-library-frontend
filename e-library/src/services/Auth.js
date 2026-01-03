import Client from "./api"
import { Navigate } from "react-router-dom"

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("/auth/register", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/auth/login", data)
    console.log("signin")
    // Set the current signed in users token to localStorage
    localStorage.setItem("token", res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    // Checks if there is a token and if it is valid
    return res.data
  } catch (error) {
    throw error
  }
}

export const Logout = async () => {
  console.log("logout clicked")
  try {
    localStorage.removeItem("token")
    console.log("token removed")
    return true
    console.log('function ended')
  } catch (error) {
    throw error
  }
}
