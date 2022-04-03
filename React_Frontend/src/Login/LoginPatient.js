import React, { useState } from 'react'
import './LoginPatient.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const LoginPatient =( )=>{
  
  const [patientLogin,setPatientLogin] = useState({username: "", password :""});
  // const [error,setError] = useState('');
       const navigate = useNavigate();

 const handleSubmit=(e)=>{
  e.preventDefault();
  
    axios.post("http://localhost:8080/login/patient",{
      username : patientLogin.username , 
      password : patientLogin.password,
    }).then( (response)=>{
    console.log(response.data);

    if(response.data === "valid")
    {
      // window.location=`/dashboard/${patientLogin.username}`;
      setPatientLogin({username : '',password : ''})
      navigate(`/dashboard/${patientLogin.username}`);
      
    }
    else{
      setPatientLogin({username: '', password: '' });
      // setError('invalid Username and Password');
    }
  }).catch((err)=>{
    console.log(err.response);
  })


}
const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setPatientLogin({...patientLogin,[name] : value})

}

   
    return(
      <div class="container-fluid d-flex justify-content-center align-items-center">
        <form className='m-5 shadow bg-body' onSubmit={handleSubmit}>
          {/* <span>{error}</span> */}
          <div class="form-group mb-3">
            <label className='mb-2'>Username</label>
            <input type="text"  class="form-control" placeholder="Enter Username" name='username' required onChange={handleInput}/>
          </div>
          <div class="form-group mb-4 ">
            <label  className='mb-2'>Password</label>
            <input type="password"  class="form-control" placeholder="Password" name='password' required onChange={handleInput}/>
          </div>
        <button type="submit" class="btn btn-primary rounded-pill mb-3  w-75" >Login</button>
        <div className='form-group '>
        New To Hospify, <a href="/register/patient">Create New Account</a>  
      
        </div>
      </form>
        </div>
    )
}
export default LoginPatient;