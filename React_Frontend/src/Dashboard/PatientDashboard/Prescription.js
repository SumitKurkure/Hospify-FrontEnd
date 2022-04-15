import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams,Navigate } from 'react-router-dom'
import axios from 'axios'

const Prescription = () => {
  const navigate = useNavigate();
  const[prescList,setPrescList]= useState([]);
    var { username } = useParams();
  
    useEffect(()=>{
        prescription();
    },[ ])
    const prescription=  async (e)=>{
      // e.preventDefault();
      console.log(username)
      await axios.get(`http://localhost:8080/dashboard/prescription/${username}`).then((Response)=>{
       
          console.log(Response.data)
          setPrescList(Response.data);

      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(prescList); 


  return (
    <div> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> : 
    <div>
        <div>
        <table class="table mt-5">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Medicine 1</th>
      <th scope="col">Medicien 2</th>
      <th scope="col">dose/day</th>
      <th scope="col">visit after days</th>
      <th scope="col">labTestName</th>
      <th>Prescription Date</th>
    </tr>
  </thead>
  <tbody>
    {
      
        prescList.map((item)=>{
          return(
          <tr>
          <td>{item.medicineFirst}</td>
          <td>{item.medicineSecond}</td>
          <td>{item.dose_per_day}</td>
          <td>{item.visit_after_days}</td>
          <td>{item.labTestName}</td>
        <td>{item.prescriptiondate}</td>
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


export default Prescription