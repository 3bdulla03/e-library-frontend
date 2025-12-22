import { useState, React } from "react"
import { RegisterUser } from "../services/Auth"

const Register = () => {
  let navigate = useNavigate()

  const initialVals = {
    name: "",
    password: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initialVals)

  const handleChange = async (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser(formValues)
    setFormValues(initialState)
    navigate("/signin")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>
          Username
          <input name="username" type="text" required onchange={handleChange} />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            required
            onchange={handleChange}
          />
        </label>

        <label>
          Confirm Password
          <input
            name="confirmPassword"
            type="password"
            required
            onchange={handleChange}
          />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </>
  )
}

export default Register
