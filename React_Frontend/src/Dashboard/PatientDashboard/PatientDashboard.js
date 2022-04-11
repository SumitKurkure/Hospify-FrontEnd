import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink,Link,useNavigate ,useParams,Navigate} from 'react-router-dom';
import Authenticate from '../../Login/Authenticate';
import LoginPatient from '../../Login/LoginPatient';
import AppointmentList from '../DoctorDashboard/AppointmentList';
import './PatientDashboard.css'

function PatientDashboard()
{
    const logout =()=>{
    Authenticate.logout();
    navigate("/login/patient",{replace:true})
    }

    var { username } = useParams();
    var navigate = useNavigate();

    const idParamProfile=()=>{
        navigate(`/dashboard/patient/profile/${username}`)
    }
   const toPrescription=()=>{
    navigate(`/dashboard/prescription/${username}`)
    }
  
    return(
        
        <div>
            { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
            <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    lass="fas fa-user-secret me-2"></i>Hospify</div>
            <div class="list-group list-group-flush my-3">
                <Link to="/dashboard/patient" class="list-group-item list-group-item-action bg-transparent active"><i
                        class="fas fa-tachometer-alt me-2"></i>Dashboard</Link>
                 <button class="list-group-item list-group-item-action bg-transparent fw-bold" onClick={idParamProfile}><i
                        class="fas fa-map-marker-alt me-2"></i>Profile</button>
                {/* <Link to="/dashboard/treatment" class="list-group-item list-group-item-action bg-transparent fw-bold"><i
                        class="fas fa-chart-line me-2"></i>Treatment</Link> */}
                <button  onClick={toPrescription} class="list-group-item list-group-item-action bg-transparent  fw-bold"><i
                        class="fas fa-paperclip me-2"></i>Prescription</button>
                 <Link to="/dashboard/feedback" class="list-group-item list-group-item-action bg-transparent fw-bold"><i
                        class="fas fa-map-marker-alt me-2"></i>FeedBack</Link>
                <Link to="/login/patient" class="list-group-item list-group-item-action bg-transparent fw-bold" onClick={logout} ><i
                        class="fas fa-power-off me-2"></i>Logout</Link>
            </div>
        </div>

        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 class="fs-2 m-0">Patient Dashboard</h2>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user me-2"></i>{username}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><button class="dropdown-item" onClick={idParamProfile} >Profile</button></li>
                                <li><Link class="dropdown-item" to="/login/patient " onClick={logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid px-4">
                <div class="row g-3 my-2">

                    <div class="col-md-4">
                        <div class="p-3 bg-white d-flex justify-content-around align-items-center rounded">
                            <div>
                              <Link className="btn btn-primary btn-lg " to="/bookappointment">Book Appointment</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="p-3 bg-white  d-flex justify-content-around align-items-center rounded">
                            <div>
                                <p class="btn btn-success btn-lg">Book Lab Test</p>
                            </div>
            
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <p class="btn btn-lg btn-danger">Buy Medicine</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-5">
                    <h3 class="fs-4 mb-3">Appointment</h3>
                    
                    <div class="col">
                    <AppointmentList/>
                    </div>
                </div>

            </div>
        </div>
    </div>}
        </div>
    )
 
}
export default PatientDashboard;