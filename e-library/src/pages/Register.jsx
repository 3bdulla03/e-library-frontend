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

  </>
  )
}

export default Register
