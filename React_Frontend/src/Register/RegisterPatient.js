import React, { useState,useEffect } from 'react';
import './RegisterPatient.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const RegisterPatient=()=>{
    const initialValues = {name:"", username: "", email: "", password: "",mobno:"",address:"",bloodgroup:"",age:"",gender:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    var Message ="";

    const handleInput = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = async  (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);

        const registerPatient = {
            name : formValues.name, username: formValues.username, email: formValues.email, password: formValues.password,mobno: formValues.mobno, address:formValues.address, bloodgroup:formValues.bloodgroup,age:formValues.age,gender:formValues.gender
        };
      await axios.post("http://localhost:8080/register/patient",registerPatient).then((response)=>{
          console.log(response.data);
          if(response.data === "success")
          {
              // console.log("regiseration successfull please login")
             navigate("/login/patient")
             Message ="Registeration Successfull Please Login to Acess";
             <div className='alert alert-success' role={alert}></div>

          }
          else
          {

          }
      }).catch((err)=>{
            console.log(err.response);
      })
    

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
            <span>`${Message}`</span>
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
                        <input type="number" className="form-control"  name='mobno' placeholder='Enter the MobileNo'  onChange={handleInput}/>
                    </div>
                    <small>{formErrors.mobno}</small>
                    <div className="mb-1">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control"  name='address' placeholder='Enter the address' onChange={handleInput}/>
                    </div>
                </div>
                <div className='w-50 '>

                    <div className="mb-1">
                        <label htmlFor="bloodgrp" className="form-label">Blood Group</label>
                        <input type="text" className="form-control"  name='bloodgroup' placeholder='Enter the Blood-Group' onChange={handleInput}/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="age" className="form-label">Age*</label>
                        <input type="number" className="form-control"  name='age' placeholder='Enter the Age' onChange={handleInput}/>
                    </div>
                    <small>{formErrors.age}</small>
                    <div className="mb-1">
                        <label htmlFor="gender" className="form-label" >gender*</label><br />
                        <input type="radio"   name='gender' value="male" onChange={handleInput} />Male <br />
                        <input type="radio"   name='gender' value="female" onChange={handleInput} />Female
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