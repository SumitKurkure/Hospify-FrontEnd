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
          
    </div>
  )
}

export default ProfilePatient;