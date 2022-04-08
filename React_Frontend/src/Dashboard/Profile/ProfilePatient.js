import axios from 'axios';
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router';
import UpdatePatient from './UpdatePatient'
import { Link } from 'react-router-dom'

const ProfilePatient = () => {

const[patient,setPatient] = useState({ });

var {id} = useParams();

useEffect(()=>{ 
  getPatientDetails();
})

const getPatientDetails = async () => 
{
   await axios.get(`http://localhost:8080/profile/patient/${id}`).then((Response)=>{
  
    setPatient(Response.data); 

      console.log(patient);
   })
   
}

  return (
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
      patient.map( patient =>{
        <tr>
        <td>{patient.pname}</td>
        <td>{patient.age}</td>
        <td>{patient.address}</td>
        <td>{patient.bloogroup}</td>
        <td>{patient.email}</td>
        <td>{patient.mobile}</td>
        <td>
        <Link className="btn btn-info" to={`/edit-employee/${patient.id}`} >Update</Link> 
        </td>
        </tr>
      })
    }
  </tbody>
</table>
       </div>
  )
}

export default ProfilePatient;