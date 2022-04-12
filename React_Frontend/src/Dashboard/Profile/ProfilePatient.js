import axios from 'axios';
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router';
import UpdatePatient from './UpdatePatient'
import { Link,Navigate } from 'react-router-dom'

const ProfilePatient = () => {

const[patient,setPatient] = useState({});

var {username} = useParams()
var result;

useEffect(()=>{ 
  getPatientDetails();
},{})

const getPatientDetails = async () => 
{
   await axios.get(`http://localhost:8080/profile/patient/${username}`).then((Response)=>{

    setPatient(Response.data); 
   })
}
console.log(patient);

  return (
    <div className='container '>
      <div className='col-3'>
      <div class="user-profile border shadow p-3">
				<div class="user-avatar">
					<img height={100} width={100} className="ms-5 mb-2" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				</div>
				<h5 class="user-name ms-4">{patient.name}</h5>
				<h6 class="user-email">{patient.email}</h6>
			</div>
      </div>
      <div className='col-9 '>
      
      </div>
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