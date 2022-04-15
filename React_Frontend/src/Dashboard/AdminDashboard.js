import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useParams,useNavigate ,Navigate} from 'react-router-dom';
import Authenticate from '../Login/Authenticate';
import '../Dashboard/PatientDashboard/PatientDashboard.css';


function AdminDashboard ()
{
  const[flag,setFlag] = useState(false);
  var {username} = useParams();


  var navigate = useNavigate();

  
  
  const logout =()=>{
    Authenticate.logout();
    }

   
    const handleInput=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
       
      
      }

  return (
    <div>
          { !sessionStorage.getItem("login-info") ? <Navigate to="/login/admin/" /> :
        <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    lass="fas fa-user-secret me-2"></i>Hospify</div>
            <div class="list-group list-group-flush my-3">
                <Link to="/dashboard" class="list-group-item list-group-item-action bg-transparent active"><i
                        class="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                 <Link to={`/dashboard/admin/profile/${username}`}  class="list-group-item list-group-item-action bg-transparent fw-bold" ><i
                        class="fa fa-user me-2"></i>Profile</Link>
                 <Link to={'/register/doctor'}  class="list-group-item list-group-item-action bg-transparent fw-bold" ><i
                        class="fa fa-user me-2"></i>Add Doctor</Link>  
                <Link to="/login/admin" class="list-group-item list-group-item-action bg-transparent fw-bold" onClick={logout} ><i
                        class="fa fa-power-off me-2"></i>Logout</Link>
            </div>
        </div>

        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 class="fs-2 m-0">Admin Dashboard</h2>
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
                                <li><Link class="dropdown-item" to={`/dashboard/admin/profile/${username}`}>Profile</Link></li>
                                <li><Link class="dropdown-item" to="/login/admin" onClick={logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            
        </div>
    </div>
}</div>
  )

}

export default AdminDashboard;