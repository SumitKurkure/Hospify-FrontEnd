import axios from 'axios';
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [loginPatient,setLoginPatient] =useState({username:"",password:""})

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        axios.post("http://localhost:8080/")
    }

  return (
    <div>
        <form action="post" onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder='enter the use4rname' />
            <input type="text" name='password' placeholder='enter the password'/>
        </form>
    </div>
  )
}

export default ForgotPassword