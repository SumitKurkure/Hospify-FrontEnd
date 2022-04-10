import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams,Navigate } from 'react-router-dom'
import axios from 'axios'

const ShowHospital = () => {

  const navigate = useNavigate();
  const[hospList,setHospList]= useState([]);
    var { cityName } = useParams();
  
    useEffect(()=>{
        showHospital();
    })
    const showHospital= async (e)=>{
      e.preventDefault();
      await axios.get("http://localhost:8080/bookappointment/showhospital/"+cityName).then((Response)=>{
       
          console.log(Response.data)
          setHospList(Response.data);
  

      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(hospList); 


  return (
    <div> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> : 
    <div>
        <button onClick={showHospital}>Show Hospital</button>
        <div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
      
        hospList.map((item)=>{
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
    </div>}
  </div>
  )
}

export default ShowHospital