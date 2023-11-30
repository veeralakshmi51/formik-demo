import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import './App.css'

const FieldProps = () => {
    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
        initialValues:{
            inboxmessage:'',
            outboxmessage:'',
            drafts:'',
            save:''
        },
       validationSchema:Yup.object({
        inboxmessage:Yup.string().required("Required"),
        outboxmessage:Yup.string().required('Required'),
        drafts:Yup.string().required('Required'),
        save:Yup.string().required('Required'),

       })
    })
  return (
    <div>
        <h1>Reducing Boilderplate</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='inboxmessage'>Inboxmessage</label>
            <input type='text' id='inboxmessage' name='inboxmessage' onChange={handleChange} onBlur={handleBlur} value={values.inboxmessage}/>
            {touched.inboxmessage && errors.inboxmessage ? <p style={{color:'red'}}>{errors.inboxmessage}</p>:null}
            <label htmlFor='outboxmessage'>Outboxmessage</label>
            <input type='text' id='outboxmessage' name='outboxmessage' onChange={handleChange} onBlur={handleBlur} value={values.outboxmessage}/>
            {touched.inboxmessage && errors.inboxmessage ? <p style={{color:'red'}}>{errors.outboxmessage}</p>:null}
            <label htmlFor='drafts'>Drafts</label>
            <input type='text' id='drafts' name='drafts' onChange={handleChange} onBlur={handleBlur} value={values.drafts}/>
            {touched.drafts && errors.drafts ? <p style={{color:'red'}}>{errors.drafts}</p>:null}
            <label htmlFor='save'>Save</label>
            <input type='text' id='save' name='save' onChange={handleChange} onBlur={handleBlur} value={values.save}/>
            {touched.save && errors.save ? <p style={{color:'red'}}>{errors.save}</p>:null}
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FieldProps