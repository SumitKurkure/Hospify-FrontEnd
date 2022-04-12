import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams,Navigate,Link } from 'react-router-dom'
import axios from 'axios'

const ShowHospital = () => {

  const navigate = useNavigate();
  const[hospList,setHospList]= useState([]);
    var { cityName } = useParams();

    useEffect(()=>{
        showHospital();
    },[ ])

    const showHospital= async ()=>{
      // e.preventDefault();
      await axios.get("http://localhost:8080/bookappointment/showhospital/"+cityName).then((Response)=>{
       
          console.log(Response.data)
          setHospList(Response.data);

      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(hospList); 


  return (
    <div className='container'> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> : 
    <div>
        <div className='container'>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Hosp Name</th>
      <th scope="col">Address </th>
      <th scope="col">Mobile</th>
      <th scope="col">IcuBed</th>
      <th scope="col">NormalBed</th>
      <th scope="col">labAvailableOrNot</th>
      <th scope="col">treatmentType</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      
        hospList.map((item)=>{
          return(
          <tr>
          <td>{item.hospname}</td>
          <td>{item.hospadd}</td>
          <td>{item.mobileno}</td>
          <td>{item.icubed}</td>
          <td>{item.normalbed}</td>
          <td>{item.labavailable_or_not}</td>
          <td>{item.treatmenttype}</td>
          <td>
            <Link to={`/bookappointment/showdoctor/${item.hospid}`} className='btn btn-success'>Book Appointment</Link>
          </td>
          </tr>
         )})
    
    }
  </tbody>
</table>
        </div>
    </div>}
  </div>
  )
}

export default ShowHospital