import React from 'react';
import './Home.css'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
const Home=()=>
{
    const navigate = useNavigate();
    const bookAppointment=()=>
    {
        navigate.push("localhost:3000/login/patient")
    }
    
    return(
        <div>
        <div className='body'>
            <div class="slider-color ">
                <div class="row featurette container-fluid pt-3 pb-4">
                    
                    <div class="col-md-7 d-flex justify-content-center align-items-center">
                    
                    <div className='d-flex flex-column'>
                    <div class="text-warning">
                        <h2>Welcome To Hospify</h2>
                    </div>
                            <Link to="/login/patient" className='btn btn-primary rounded-pill px-5 mb-4 btn-lg '>Book appointment</Link>
                            <Link to='/' className='btn btn-info rounded-pill px-5 mb-4 btn-lg '>Buy Medicine</Link>
                            <Link to='/' className='btn btn-danger rounded-pill px-5 mb-42 btn-lg '>Book LabTest</Link>
                    </div> 
                    </div>
                    <div class="col-md-5  ">
                        <img src="doctors2.png" alt="" width="80%" height="auto"/>
                    </div>
                </div>
            </div>
        
        </div>

        <div className='conatiner'>
            {/* <Features/> */}
        <div class="bg-light py-3 service-13 m-2">
    <div>
       <div class="text-center text-info">
            <h2 className='mb-3'>Some Fetures of Hospify</h2>
       </div>
        <div class="row">
           
            <div class="col-sm-4 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4 shadow">
					<div class="row no-gutters">
						<div class="col-md-4 d-flex  ms-5">
                        <img src="fever.png" alt="image" class="mt-4" width="150" height="150"/>
						</div>
						<div class="col-sm-4 p-3 d-flex ">
						    <div class="ml-4">
							    <h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Book Lab Test</a></h6>
								<p class="mt-3">Book safe and hygenic test from <br/>approved labs near you</p>
                                {/* <h6>Home sample pick up</h6>
                                <h6>Best safety precautions</h6> */}
							</div>
						</div>
					</div>
                </div>
            </div>
           
            <div class="col-sm-4 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4 shadow">
					<div class="row no-gutters align-items-stretch">
					    <div class="col-md-4 d-flex align-items-stretch ms-5 ">
                        <img src="onlineconsultation.png" alt="image" class="mt-3" width="150" height="150"/>
						</div>
						<div class="col-sm-4  p-2 d-flex align-items-stretch">
							<div class="ml-4">
								<h6 class="font-weight-medium "><a href="javascript:void(0)" class="linking">Consult Any Time</a></h6>
								<p class="mt-3">Online consultation, 24/7<br/>with top doctors for better cure.</p>
							</div>														
						</div>
					</div>
                </div>
            </div>
            
            <div class="col-sm-4 wrap-service13-box ">
                <div class="card card-shadow border-0 mb-4 shadow">
				    <div class="row no-gutters align-items-stretch">
                        <div class="col-md-4 d-flex align-items-stretch ms-5">
                        <img src="cure.png" alt="image" class="mt-2" width="175" height="175"/>
                        </div>
                        <div class="col-sm-4 p-3 d-flex align-items-stretch">
							<div class="ml-4">
								<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Instant Cure</a></h6>
								<p class="mt-3">You can relay on our Hospify and get instant cure for patient.</p>
							</div>
						</div>
					</div>
                </div>
            </div>
           
            <div class="col-sm-4 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4 shadow">
					<div class="row no-gutters align-items-stretch">
						<div class="col-md-4 d-flex align-items-stretch ms-5">
							<img src="report.png" alt="image" class="" width="175" height="175"/>
						</div>
						<div class="p-3 col-md-6 d-flex align-items-stretch">
							<div class="ml-4">
								<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Get Prescription</a></h6>
								<p class="mt-3">Patient can get prescription by doctor to the patient at their location on fingertips.</p>
							</div>
						</div>
					</div>
                </div>
            </div>
            <div class="col-sm-4 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4 shadow">
					<div class="row no-gutters align-items-stretch">
						<div class="col-md-4 d-flex align-items-stretch ms-5">
							<img src="report.png" alt="image" class="" width="175" height="175"/>
						</div>
						<div class="p-3 col-md-6 d-flex align-items-stretch">
							<div class="ml-4">
								<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Instant Solutions</a></h6>
								<p class="mt-3">You can relay on our amazing features list and also our customer.</p>
							</div>
						</div>
					</div>
                </div>
            </div>
            <div class="col-sm-4 wrap-service13-box">
                <div class="card card-shadow border-0 mb-4 shadow">
					<div class="row no-gutters align-items-stretch">
						<div class="col-md-4 d-flex align-items-stretch ms-5">
							<img src="verifiedDoctor.png" alt="image" class="" width="175" height="175"/>
						</div>
						<div class="p-2 col-md-6 d-flex align-items-stretch">
							<div class="ml-4">
								<h6 class="font-weight-medium mt-2"><a href="javascript:void(0)" class="linking">Verified Doctors</a></h6>
								<p class="mt-3">You can relay on our amazing features list and also our customer.</p>
							</div>
						</div>
					</div>
                </div>
            </div>

        </div>
    </div>
</div>
        </div>
        <div class="mt-5">
            <Footer/>
        </div>
    </div>
        
        
        
   )
}
export default Home;