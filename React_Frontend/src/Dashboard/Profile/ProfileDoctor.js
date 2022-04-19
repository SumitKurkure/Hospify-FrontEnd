import axios from 'axios';
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router';
import UpdatePatient from './UpdatePatient'
import { Link,Navigate } from 'react-router-dom'

const ProfilePatient = () => {

const[doctor,setDoctor] = useState({});

var {username} = useParams()
var result;

useEffect(()=>{ 
  getPatientDetails();
},{})

const getPatientDetails = async () => 
{
   await axios.get(`http://localhost:8080/profile/doctor/${username}`).then((Response)=>{

    setDoctor(Response.data); 
   })
}
console.log(doctor);

  return (
    <div className='container-fluid w-75'>
      { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
      <div className='d-flex mt-5'>
      <div className='col-md-4  '>
      {/* <div class="user-profile border shadow p-3">
				<div class="user-avatar"> */}
         <div class="card ">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
					<img height={100} width={100} className="ms-2 mb-2 " src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				
				<h2 class="user-name ">{doctor.username}</h2>
				<h6 class="user-email">{doctor.email}</h6>
        <h6 className=''> {doctor.address}</h6>
			</div>
      </div>
      </div>
      </div> 
      <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.name}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.email}
                      </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Education</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.degree}
                      </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.mobno}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">AvailableTime</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.availableTime}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Experience</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.experience}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Clinic Visit</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.clinicVisit}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">City</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {doctor.city}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                      <Link to={`/dashboard/doctor/profile/update/${username}`} class="btn btn-info text-light" >Edit</Link>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            </div>
}       
 
       {/* { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
    
    <div>
    <h2 className="text-center mt-5">Patient Profile</h2>
    <table class="table table-striped table-hover">
    <thead>
    <tr>
    <th className="text-center"> Name</th>
    <th className="text-center"> Age</th>
    <th className="text-center">Address</th>
    <th className="text-center">BloodGroup</th>
           <th className="text-center">Email</th>
           <th className="text-center">MobileNo</th>
           <th className="text-center">Actions</th> 
       </tr>
     </thead>
     <tbody>
     {
           <tr>
             <td>{patient.name}</td>
             <td>{patient.age}</td>
             <td>{patient.address}</td>
             <td>{patient.bloodgroup}</td>
             <td>{patient.email}</td>
             <td>{patient.mobno}</td>
             <td>
             <Link className="btn btn-info" to={`/dashboard/update-patient/${patient.username}`} >Update</Link> 
             </td>
           </tr>
       }
     </tbody>
   </table>
 </div>
}
  </div> */}
  </div>
  )
}

export default ProfilePatient;