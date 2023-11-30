import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './App.css'
const validateSchema=Yup.object().shape({
  email:Yup.string().required('The field is required')
})
const SignupForm=()=>{
  const formik=useFormik({
    initialValues:{
      email:''
    },
    validationSchema:validateSchema,
    onSubmit:(values)=>{
     alert("Email sent")
    },
  })
   
  return(
    <div>
     <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  id='email' name='email' value={formik.values.email}></input>
      {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}

      <button type='submit'>Submit</button>
     </form>
    </div>
  )
}
export default SignupForm