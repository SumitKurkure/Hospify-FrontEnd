import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink,Link,useNavigate ,useParams} from 'react-router-dom';
import Authenticate from '../../Login/Authenticate';
import LoginPatient from '../../Login/LoginPatient';
import './PatientDashboard.css'

function PatientDashboard()
{
    const logout =()=>{
    Authenticate.logout();
    }

    var { username } = useParams();
    var navigate = useNavigate();

    const idParamProfile=()=>{
        navigate(`/dashboard/patient/profile/${username}`)
    }

    return(
        
        <div>
            <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    lass="fas fa-user-secret me-2"></i>Hospify</div>
            <div class="list-group list-group-flush my-3">
                <Link to="/dashboard/patient" class="list-group-item list-group-item-action bg-transparent active"><i
                        class="fas fa-tachometer-alt me-2"></i>Dashboard</Link>
                 <button class="list-group-item list-group-item-action bg-transparent fw-bold" onClick={idParamProfile}><i
                        class="fas fa-map-marker-alt me-2"></i>Profile</button>
                <Link to="/dashboard/treatment" class="list-group-item list-group-item-action bg-transparent fw-bold"><i
                        class="fas fa-chart-line me-2"></i>Treatment</Link>
                <Link to="/dashboard/prescription" class="list-group-item list-group-item-action bg-transparent  fw-bold"><i
                        class="fas fa-paperclip me-2"></i>Prescription</Link>
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
                                <li><Link class="dropdown-item" to="dashboard/profile">Profile</Link></li>
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
                        <table class="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Television</td>
                                    <td>Jonny</td>
                                    <td>$1200</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Laptop</td>
                                    <td>Kenny</td>
                                    <td>$750</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell Phone</td>
                                    <td>Jenny</td>
                                    <td>$600</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Fridge</td>
                                    <td>Killy</td>
                                    <td>$300</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Books</td>
                                    <td>Filly</td>
                                    <td>$120</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Gold</td>
                                    <td>Bumbo</td>
                                    <td>$1800</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Pen</td>
                                    <td>Bilbo</td>
                                    <td>$75</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Notebook</td>
                                    <td>Frodo</td>
                                    <td>$36</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Dress</td>
                                    <td>Kimo</td>
                                    <td>$255</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Paint</td>
                                    <td>Zico</td>
                                    <td>$434</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>Carpet</td>
                                    <td>Jeco</td>
                                    <td>$1236</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Food</td>
                                    <td>Haso</td>
                                    <td>$422</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </div>
    )
 
}
export default PatientDashboard;