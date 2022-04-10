import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Homepage=()=>{
    return(
<nav class="navbar navbar-expand-lg bg-gradient-light text-dark sticky-top navbar-custom">
  <div class="container-fluid">
    <Link class="navbar-brand ms-5" to="/">
      <div class="brand">
      <img src="logo.png"/>
      </div>
    </Link>
    <button class="navbar-toggler border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav" >
      <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto data-toggle-pill">
        <li class="nav-itemlink-color ">
          <NavLink className="nav-link  " aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to="/about">About</NavLink>
        </li>
        <li class="nav-item link-color">
          <NavLink className="nav-link" exact to="/contact" >
            Contact
          </NavLink>
        </li>
        <li class="nav-item link-color">
          <NavLink className="nav-link " to='/help'>Help</NavLink>
        </li>
      </ul>
         <div class="dropdown me-5 ms-5">
            <button class="btn btn-primary dropdown-toggle me-3 button-custom" data-bs-toggle="dropdown" aria-expanded="false">
            Login
             </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link class="dropdown-item" to="/login/patient">Patient</Link></li>
                <li><Link class="dropdown-item" to="/login/doctor">Doctor</Link></li>
                <li><Link class="dropdown-item" to="/login/admin">Admin</Link></li>
            </ul>
            <button class="btn btn-success dropdown-toggle button-custom1" data-bs-toggle="dropdown" aria-expanded="false">
            Sing Up
             </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link class="dropdown-item" to="/register/patient">Patient</Link></li>
                <li><Link class="dropdown-item" to="/register/doctor">Doctor</Link></li>
            </ul>
        </div>
    </div>
  </div>
</nav>

    )
}
export default Homepage