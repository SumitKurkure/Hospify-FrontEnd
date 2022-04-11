import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const ConfirmAppointment = () => {

    const navigate = useNavigate();
    const[appt,setAppt]= useState();
    const[flag,setFlag] = useState(false);

    var { id } = useParams();

    useEffect(()=>{
     BookAppointment();   
    })

      const BookAppointment= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/bookappointment/confirm/"+id,{
            
        })
        .then((Response)=>{

            console.log(Response.data)
            setAppt(Response.data);
            setFlag(true);
               
        }).catch((err)=>{
          console.log(err)
        })
}
      console.log(appt); 

        if(flag)
        return( <h1>Appointment Booked</h1>)
        else
        return( <h1>Please Book Appointment Again</h1>)

}

export default ConfirmAppointment