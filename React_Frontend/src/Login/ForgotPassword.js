import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
    const [loginPatient,setLoginPatient] =useState({username:"",password:""})
    const navigate =useNavigate();

    const handleSubmit= async (e)=>
    {
        e.preventDefault();
        console.log(loginPatient)
        
        await axios.post("http://localhost:8080/login/patient/forgotpassword/"+loginPatient.username,{
            username : loginPatient.username,
            password : loginPatient.password, 
        }).then((Response)=>{
        if(Response.data === "changed")
        {
            // navigate("/login/patient")
            console.log(Response.data)
        }
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleInput=(e)=>{
        var name =e.target.name;
        var value =e.target.value;
        setLoginPatient({...loginPatient,[name]:value})
    }

  return (
    <div className='container '>
        <form action="post" onSubmit={handleSubmit} className="shadow">
            <label htmlFor=""></label>
            <label className='mb-2'>Username</label>
             <input type="text" className='mb-3' name='username' placeholder='enter the use4rname' onChange={handleInput} />
            
            <label className='mb-2'>Password</label>
            <input type="text" className="mb-3" name='password'class='mb-4' placeholder='enter the password' onChange={handleInput}/>
            
            <button className='btn btn-primary' type='submit'>Changed Password</button>
        </form>
    </div>
  )
}

export default ForgotPassword