import React, { useState } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom';
import Authenticate from '../../Login/Authenticate';
import LoginDoctor from '../../Login/LoginDoctor';
import '../PatientDashboard/PatientDashboard.css';
import SendPrescription from './SendPrescription';
function DoctorDashboard ()
{
  const[flag,setFlag] = useState(false);
  var {username} = useParams();
  var navigate = useNavigate();

  
  
  const logout =()=>{
    Authenticate.logout();
    }

    const sendPrescription=()=>{
     setFlag(true);
    }


  return (
    <div>
        <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    lass="fas fa-user-secret me-2"></i>Hospify</div>
            <div class="list-group list-group-flush my-3">
                <Link to="/dashboard" class="list-group-item list-group-item-action bg-transparent active"><i
                        class="fas fa-tachometer-alt me-2"></i>Dashboard</Link>
                 <Link to="/dashboard/profile" class="list-group-item list-group-item-action bg-transparent fw-bold" ><i
                        class="fas fa-map-marker-alt me-2"></i>Profile</Link>
                <Link to="/login/doctor" class="list-group-item list-group-item-action bg-transparent fw-bold" onClick={logout} ><i
                        class="fas fa-power-off me-2"></i>Logout</Link>
            </div>
        </div>

        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 class="fs-2 m-0">Doctor Dashboard</h2>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle second-text fw-bold" to="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user me-2"></i>{username}
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/dashboard/doctor/profile/">Profile</Link></li>
                                <li><Link class="dropdown-item" to="/login/doctor" onClick={logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid px-4">
                <div class="row g-3 my-2">

                    <div class="col-md-3">
                        <div class="p-3 bg-white d-flex justify-content-around align-items-center rounded">
                            <div>
                              <Link className="btn btn-transparent btn-lg " to="/patientlist">Patient List</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="p-3 bg-white  d-flex justify-content-around align-items-center rounded">
                            <div>
                                <p class="btn btn-transparent btn-lg">Appointment List</p>
                            </div>
            
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <Link class="btn btn-lg btn-transparent" to='/dashboard/doctor/sendprescription'>Send Prescription</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <p class="btn btn-lg btn-transparent">Set Available Time</p>
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

export default DoctorDashboard;