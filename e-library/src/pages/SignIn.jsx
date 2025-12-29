import { useState } from "react"
import { SignInUser } from "../services/Auth"
import { useNavigate,Link } from "react-router-dom"

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = { name: "", password: "" }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(userData)
    navigate("/") // it was feed to test it only and see what happend
  }

  return (
    <div className="col register">
      <h2>Sign In</h2>
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="name"
            placeholder="username"
            onChange={handleChange}
            value={formValues.name}
            required
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
        <button disabled={!formValues.name || !formValues.password}>
          Sign In
        </button>
        <p>
          Don't have an accountt? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn
