import { useFormik } from 'formik';
import React from 'react';
//custom validation
const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is Required';
    } else if (values.name.length > 10) {
        errors.name = 'Must contain 10 letters or less';
    }

    if (!values.firstname) {
        errors.firstname = 'FirstName is Required';
    } else if (values.firstname.length > 10) {
        errors.firstname = 'FirstName Length should be 10 or less';
    }

    if (!values.lastname) {
        errors.lastname = 'LastName is Required';
    } else if (values.lastname.length > 10) {
        errors.lastname = 'Lastname length should be 10 or less';
    }

    if (!values.email) {
        errors.email = 'Email is Required';
    } else 
        errors.email = 'Invalid Email Address';
    
    if (!values.address) {
        errors.address = 'Address Field is Required';
    }

    if (!values.phoneno) {
        errors.phoneno = 'Phoneno is Required';
    } else if (values.phoneno.length !== 10 || !/^\d+$/.test(values.phoneno)) {
        errors.phoneno = 'It must contain 10 numbers';
    }

    return errors;
};

const Custom = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            firstname: '',
            lastname: '',
            address: '',
            email: '',
            phoneno: ''
        },
        validate,  // Pass the validation function to Formik
        onSubmit: values => {
           
            console.log(values);
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                {formik.errors.name && formik.touched.name? <div style={{color:'red'}}>{formik.errors.name}</div> : null}

                <label htmlFor='firstname'>Firstname</label>
                <input type='text' id='firstname' name='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
                {formik.errors.firstname && formik.touched.firstname ? <div style={{color:'red'}}>{formik.errors.firstname}</div> : null}

                <label htmlFor='lastname'>Lastname</label>
                <input type='text' id='lastname' name='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
                {formik.errors.lastname && formik.touched.lastname? <div style={{color:'red'}}>{formik.errors.lastname}</div> : null}

                <label htmlFor='address'>Address</label>
                <input type='text' id='address' name='address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                {formik.errors.address && formik.touched.address ? <div style={{color:'red'}}>{formik.errors.address}</div> : null}

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.errors.email && formik.touched.email? <div style={{color:'red'}}>{formik.errors.email}</div> : null}

                <label htmlFor='phoneno'>Phoneno</label>
                <input type='text' id='phoneno' name='phoneno' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneno} />
                {formik.errors.phoneno && formik.touched.phoneno? <div style={{color:'red'}}>{formik.errors.phoneno}</div> : null}

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Custom;
