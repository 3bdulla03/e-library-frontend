import { useState, React } from "react";


const Register =()=> {

  const handleChange  = (e)=>{
    e.preventDefault()
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
