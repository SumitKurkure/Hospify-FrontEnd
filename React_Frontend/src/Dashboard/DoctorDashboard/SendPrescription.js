import React from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'

const SendPrescription = () => {

    var {username} = useParams();
var navigate = useNavigate()

const navigateToDashboard=()=>{
    navigate(`/dashboard/doctor/${username}`);
}
  return (
    <div>
        <button className='btn btn-primary btn-lg' onClick={navigateToDashboard}>Send and Navigate to Dashboard</button>
    </div>
  )
}

export default SendPrescription