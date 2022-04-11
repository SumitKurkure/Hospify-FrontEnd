import React, { useEffect } from 'react'

const AppointmentList = () => {
  
  const navigate = useNavigate();
  const[appointment,setAppointmentList]= useState([]);
    var { username } = useParams();
  useEffect(()=>{

  },[])
    const showHospital= async (e)=>{
      e.preventDefault();
      await axios.get("http://localhost:8080/dashboard/appointment/"+username).then((Response)=>{
       
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
        {/* <button onClick={showHospital}>Show Hospital</button> */}
        <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Dname</th>
              <th scope="col">Pname</th>
              <th scope="col">Paid Fees</th>
              <th scope="col">AppointmentDate</th>
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
                  <td>{item.appointmentdate}</td>
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