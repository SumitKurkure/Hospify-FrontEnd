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
        
    }
  </tbody>
</table>
       </div>
  )
}

export default ProfilePatient;