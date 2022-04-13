import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useParams,useNavigate ,Navigate} from 'react-router-dom';
import Authenticate from '../../Login/Authenticate';
import LoginDoctor from '../../Login/LoginDoctor';
import '../PatientDashboard/PatientDashboard.css';
import AppointmentList from '../PatientDashboard/AppointmentList';
import SendPrescription from './SendPrescription'
import AppointmentListDoctor from './AppointmentListDoctor'

function DoctorDashboard ()
{
  const[flag,setFlag] = useState(false);
  var {username} = useParams();
  const[avtTime,setAvtTime] = useState({ availableTime : " "});

  var navigate = useNavigate();

  
  
  const logout =()=>{
    Authenticate.logout();
    }

    const sendPrescription=()=>{
     navigate(`/dashboard/doctor/sendprescription/${username}`);
    }

    const setAvailableTime =(e)=>{
        e.preventDefault();
        setFlag(true);
        axios.post(`http://localhost:8080/dashboard/setavailabletime/${username}`,{
            availableTime :avtTime.availableTime,
        }).then((Response)=>{
            console.log(Response.data);
            if(Response.data === "updated")
            {
                // return(
                //     <div>
                //         <div>Avilable Time Changed*</div>
                //     </div>
                // )

            }
        })
    }
    const handleInput=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        setAvtTime({...avtTime,[name] : value})
      
      }
if(flag)
    return(
        <div className='container'>
            <form onSubmit={setAvailableTime} className="shadow border h-50 ">
                <label className='mb-4 '>Change Available Time</label>
                <input className='mb-4' type="text" name='availableTime' placeholder='Enter the Available Time' onChange={handleInput}/>
                <button className='btn btn-primary btn-sm '>Update Available Time</button>
            </form>
        </div>
    )
else
  return (
    <div>
          { !sessionStorage.getItem("login-info") ? <Navigate to="/login/doctor/" /> :
        <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    lass="fas fa-user-secret me-2"></i>Hospify</div>
            <div class="list-group list-group-flush my-3">
                <Link to="/dashboard" class="list-group-item list-group-item-action bg-transparent active"><i
                        class="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                 <Link to={`/dashboard/doctor/profile/${username}`}  class="list-group-item list-group-item-action bg-transparent fw-bold" ><i
                        class="fa fa-user me-2"></i>Profile</Link>
                <Link to="/login/doctor" class="list-group-item list-group-item-action bg-transparent fw-bold" onClick={logout} ><i
                        class="fa fa-power-off me-2"></i>Logout</Link>
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
                                <li><Link class="dropdown-item" to={`/dashboard/doctor/profile/${username}`}>Profile</Link></li>
                                <li><Link class="dropdown-item" to="/login/doctor" onClick={logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid px-4">
                <div class="row g-3 my-2 ms-5">


                    <div class="col-md-4">
                        <div class="btn btn-primary me-5 d-flex justify-content-around align-items-center rounded">
                            <div>
                                <button class="btn btn-lg text-light" onClick={sendPrescription}>Send Prescription</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="btn btn-primary me-5 d-flex justify-content-around align-items-center rounded">
                            <div>
                                <button class="btn btn-lg text-light" onClick={setAvailableTime}>Set Available Time</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-5">
                    <h2 className='mb-4'> Appointments </h2>
                    <h4 class="fs-4 mb-3">
                        <AppointmentListDoctor/>
                    </h4>
                </div>

            </div>
        </div>
    </div>
}</div>
  )

}

export default DoctorDashboard;