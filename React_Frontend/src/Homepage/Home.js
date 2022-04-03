import React from 'react';
import './Home.css'
import {useNavigate ,Link } from 'react-router-dom'
import Footer from './Footer';

const Home=()=>{
    const navigate = useNavigate();

    const bookAppointment =()=>{
        navigate.push("localhost:3000/login/patient")
    }
    return(
        <div>
        <div className='body'>
            <div class="row featurette container-fluid pt-3 pb-4">
                <div class="col-md-7 d-flex justify-content-center align-items-center">
                   <div className='d-flex flex-column'>
                        <Link to="/login/patient" className='btn btn-primary rounded-pill px-4 mb-3'>Book appointment</Link>
                        <Link to='/' className='btn btn-secondary rounded-pill px-4 mb-3'>Buy Medicine</Link>
                        <Link to='/' className='btn btn-danger rounded-pill px-4 mb-3'>Book LabTest</Link>
                   </div> 
                </div>
                <div class="col-md-5  ">
                    <img src="onlinehospital.jpg" alt="" width="100%" height="auto"/>
                </div>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
    </div>
        
        
        
   )
}
export default Home;