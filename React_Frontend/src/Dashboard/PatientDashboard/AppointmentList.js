import React, { useState ,useEffect } from 'react'
import { useNavigate ,useParams } from 'react-router-dom'
import  axios  from 'axios';

const AppointmentList = () => {
  
  const navigate = useNavigate();
  const[appointment,setAppointmentList]= useState([]);
    var { username } = useParams();

  useEffect(()=>{
    showAppointment();
  },[])

    const showAppointment=  ()=>{
      // e.preventDefault();
      console.log("in show appt")
      console.log(username)
        axios.get(`http://localhost:8080/dashboard/appointment/${username}`).then((Response)=>{
       
          console.log(Response.data)

          setAppointmentList(Response.data);


      }).catch((err)=>{
        console.log(err)
      })
    }

    console.log(appointment); 


  return (
    <div>  
     <div>
        <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col"> Dname</th>
              <th scope="col">Pname</th>
              <th scope="col">Paid Fees</th>
              <th scope="col">AppointmentDate</th>
              <th>Appointment Type</th>
          
            </tr>
          </thead>
          <tbody>
            {
                appointment.map((item)=>{
                  return(
                  <tr>
                  <td>{item.dname}</td>
                  <td>{item.pname}</td>
                  <td>{item.fees}</td>
                  <td>{item.appointmentDate}</td>
                  <td>{item.appointmentType}</td>
      
                  </tr>
                )})
            }
          </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}

export default AppointmentList