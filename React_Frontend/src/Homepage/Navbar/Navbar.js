import React from 'react';
import { NavLink } from 'react-router-dom';

const Homepage=()=>{
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="/">Hospify</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav" >
      <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto data-toggle-pill">
        <li class="nav-item ">
          <NavLink className="nav-link  " aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to="/about">About</NavLink>
        </li>
        <li class="nav-item ">
          <NavLink className="nav-link" exact to="/contact" >
            Contact
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to='/help'>Help</NavLink>
        </li>
      </ul>
         <div class="dropdown me-5 ms-5">
            <button class="btn btn-primary dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
            Login
             </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/login/patient">Patient</a></li>
                <li><a class="dropdown-item" href="/login/doctor">Doctor</a></li>
                <li><a class="dropdown-item" href="/login/admin">Admin</a></li>
            </ul>
            <button class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sing Up
             </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/register/patient">Patient</a></li>
                <li><a class="dropdown-item" href="/register/doctor">Doctor</a></li>
                
            </ul>
        </div>
    </div>
  </div>
</nav>

    )
}
export default Homepage