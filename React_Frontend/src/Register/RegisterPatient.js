import React, { useState,useEffect } from 'react';
import './RegisterPatient.css'

const RegisterPatient=()=>{
    const initialValues = {name:"", username: "", email: "", password: "",mobno:"",address:"",city:"",pincode:"" ,bloodgroup:"",age:"",gender:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleInput = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      if(!values.name)
      {
          errors.name="name is required"
      }
      if(!values.mobno)
      {
          errors.mobno="Mobile No. is required"
      }else if(values.mobno.length < 10 || values.mobno.length > 10)
      {
          errors.mobno="mobile no. must be 10 digit "
      }
      if(!values.city)
      {
          errors.city="city is required"
      }
      if(!values.age)
      {
          errors.age="age is required"
      }else if(values.age > 100)
      {
          errors.age="Enter Valid Age"
      }
      return errors;
    };
    return(
        <div className='container-fluid d-flex justify-content-center mt-5 ' >
           <form className=" d-flex flex-column justify-content-center align-items-center border-primary shadow p-4 mb-5 form" onSubmit={handleSubmit} >
               <div className='d-flex mb-4'>
                <div className='me-3'>
                    <div className="mb-1 ">
                        <label htmlFor="name" className="form-label">Full Name* </label>
                        <input type="text" className="form-control" name='name' placeholder='Enter the Name'   onChange={handleInput}/>
                    </div>
                    <small>{formErrors.name}</small>
                    <div className="mb-1 float-right">
                        <label htmlFor="username" className="form-label">Username*</label>
                        <input type="text" className="form-control" name='username' placeholder='Enter the Username' onChange={handleInput}/>
                    </div>
                    <small>{formErrors.username}</small>
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password*</label>
                        <input type="password" className="form-control" name='password' placeholder='Enter the Password'  onChange={handleInput}/>
                    </div>
                    <small>{formErrors.password}</small> 
                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">Email address*</label>
                        <input type="email" className="form-control"  name='email' placeholder='Enter the Email'  onChange={handleInput}/>
                    </div>
                    <small>{formErrors.email}</small>
                    <div className="mb-1">
                        <label htmlFor="mobno" className="form-label">Mobile No*</label>
                        <input type="tel" className="form-control"  name='mobno' placeholder='Enter the MobileNo'  onChange={handleInput}/>
                    </div>
                    <small>{formErrors.mobno}</small>
                    <div className="mb-1">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control"  name='address' placeholder='Enter the address' onChange={handleInput}/>
                    </div>
                </div>
                <div className='w-50 '>
                    <div className="mb-1">
                        <label htmlFor="city" className="form-label">City*</label>
                        <input type="text" className="form-control"  name='city' placeholder='Enter the City' onChange={handleInput}/>
                    </div>
                    <small>{formErrors.city}</small>
                    <div className="mb-1">
                        <label htmlFor="pincode" className="form-label">Pincode</label>
                        <input type="tel" className="form-control"  name='pincode'  placeholder='Enter the Pincode' onChange={handleInput}/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="bloodgrp" className="form-label">Blood Group</label>
                        <input type="text" className="form-control"  name='bloodgroup' placeholder='Enter the Blood-Group' onChange={handleInput}/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="age" className="form-label">Age*</label>
                        <input type="tel" className="form-control"  name='age' placeholder='Enter the Age' onChange={handleInput}/>
                    </div>
                    <small>{formErrors.age}</small>
                    <div className="mb-1">
                        <label htmlFor="gender" className="form-label" >gender*</label><br />
                        <input type="radio"   name='gender' value="male"/>Male <br />
                        <input type="radio"   name='gender' value="female"/>Female
                    </div>
                    <small>{formErrors.gender}</small>
                </div> 
            </div>    
                <div>
                <button type='submit' className='btn btn-primary btn-lg rounded-pill  px-5'>Sing Up</button>
                </div>
             
            </form>
        </div>
    )
}
export default RegisterPatient;