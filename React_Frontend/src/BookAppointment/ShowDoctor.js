import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams ,Navigate ,Link} from 'react-router-dom'
import axios from 'axios'

const ShowDoctor = () => {

  const navigate = useNavigate();
  const[doctorList,setDoctorList]= useState([]);
  var { speciality } = useParams();

  

    useEffect(()=>{
      callCondition();
    },[])

    const callCondition=()=>{

      if(speciality.length != 1)
      {
        showDoctor(); 
      }
      else
      {
      ShowDoctorInHosp();
      }
    }
    const showDoctor= async ()=>{
      await axios.get("http://localhost:8080/bookappointment/showdoctorbyspeciality/"+speciality).then((Response)=>{
          console.log(Response.data)
          setDoctorList(Response.data);


      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(doctorList); 

    const ShowDoctorInHosp= async ()=>{
      await axios.get(`http://localhost:8080/bookappointment/showdoctorbyhospid/${speciality}`).then((Response)=>{
       
          console.log(Response.data)
          setDoctorList(Response.data);


      }).catch((err)=>{
        console.log(err)
      })
    }


  return (
    <div> 
      { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> : 
    
    <div>
        <h2 className='ms-5 ps-5'>Doctor List</h2>
        <div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Addrress</th>
      <th scope="col">Mobile</th>
      <th scope="col">Fees</th>
      <th scope="col">Gender</th>
      <th scope="col">AvailableTime</th>
      <th scope="col">Clinic Visit</th>
      <th scope='col'>City</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      
        doctorList.map((item)=>{
          return(
          <tr>
                      <td>{item.name}</td>
                      <td>{item.hospadd}</td>
                      <td>{item.mobno}</td>
                      <td>{item.fees}</td>
                      <td>{item.gender}</td>
                      <td>{item.availableTime}</td>
                      <td>{item.clinicVisit}</td>
                      <td>{item.city}</td>
                      <td>
                        <Link to={`/dashboard/bookappointment/confirm/${item.did}`} className="btn btn-primary ">BookAppointmnet</Link>
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
export default ShowDoctor