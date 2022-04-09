import axios from 'axios';
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router';
import UpdatePatient from './UpdatePatient'
import { Link } from 'react-router-dom'

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
  )
}

export default ProfilePatient;