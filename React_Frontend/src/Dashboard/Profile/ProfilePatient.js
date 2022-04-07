import axios from 'axios';
import React , {useState , useEffect} from 'react'


const ProfilePatient = () => {

const[patient,setPatient] = useState([]);

useEffect(() => {
  getPatientDetails();
}, [])

const getPatientDetails = () => 
{
    axios.get("http://localhost:8080/dashboard/patient")
}
const updateProfile=()=>{
  
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
        <th className="text-center">Blood-Group</th>
        <th className="text-center">Email</th>
        <th className="text-center">MobileNo</th>
        <th className="text-center">Actions</th> 
    </tr>
  </thead>
  <tbody>
    {
        <tr>
        <td>{patient.Name}</td>
        <td>{patient.age}</td>
        <td>{patient.address}</td>
        <td>{patient.bloodGroup}</td>
        <td>{patient.email}</td>
        <td>{patient.mobile}</td>
        <td>
              <button onClick={updateProfile} className="btn btn-primary">Update </button> 
        </td>
    </tr>
    }
  </tbody>
</table>
       </div>
  )
}

export default ProfilePatient;