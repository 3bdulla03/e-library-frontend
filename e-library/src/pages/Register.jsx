import { useState, React } from "react";
import { RegisterUser } from '../services/Auth'

const Register =()=> {
  let navigate = useNavigate()

  const initialVals = {
    name: "",
    password: "",
    confirmPassword: "",
  }

  const handleChange  = async (e)=>{
    e.preventDefault()
    // await RegisterUser({
    //   name: formValue.name,
    //   password: formValues.password
    // })
    // setFormValues(initialVals)
    //navigate('/signin)
  }

  return (
  <>

    <form>
      <h2>Register</h2>

      <label>
        Username
        <input
          name="username"
          type="text"
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          required
        />
      </label>

      <label>
        Confirm Password
        <input
          name="confirmPassword"
          type="password"
          required
        />
      </label>

      <button type="submit">Create Account</button>
    </form>
  </>
  )
}

export default Register
