import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams ,Navigate} from 'react-router-dom'
import axios from 'axios'

const ShowDoctor = () => {

  const navigate = useNavigate();
  const[doctorList,setDoctorList]= useState([]);
    var { speciality } = useParams();
  
    const showHospital= async (e)=>{
      e.preventDefault();
      await axios.get("http://localhost:8080/bookappointment/showdoctor/"+speciality).then((Response)=>{
       
          console.log(Response.data)
          setDoctorList(Response.data);


      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(doctorList); 


  return (
    <div>
        { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
        <button onClick={showHospital}>Show Doctor</button>
        <div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Addrress</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Fees</th>
      <th scope="col">Experience</th>
      <th scope="col">Gender</th>
      <th scope="col">AvailableTime</th>
      <th scope="col">Clinic Visit</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    {
      
        doctorList.map((item)=>{
          return(
          <tr>
          <td>{item.hospid}</td>
          <td>{item.hospname}</td>
          <td>{item.hospadd}</td>
          <td>{item.city}</td>
          </tr>
         )})
    
    }
  </tbody>
</table>
        </div>
}</div>
  )
}

export default ShowDoctor;