import { useState } from "react"
import { RegisterUser } from "../services/Auth.js"
import { useNavigate } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate()

  const initialState = {
    name: "",
    password: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords don't match!")
      return
    }  
    await RegisterUser({
      name: formValues.name,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate("/signin")


  }

  return (
    <div className="col register">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="full name"
            onChange={handleChange}
            value={formValues.name}
            required
            autoComplete="name"
          />
        </div>  
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            value={formValues.password}
            required
            autoComplete="off"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
            autoComplete="off"
          />
        </div>
        <button
          disabled={
            !formValues.name ||
            !formValues.password ||
            !formValues.confirmPassword
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
