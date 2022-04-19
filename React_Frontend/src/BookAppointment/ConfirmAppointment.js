import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const ConfirmAppointment = () => {

  var { id } = useParams();

    const navigate = useNavigate();
    const[appt,setAppt]= useState({pname :"",appointmentDate :"",appointmentType :"", });
    const[doctor,setDoctor] = useState({ });

    useEffect(()=>{
      SshowDoctor();
    },{ })

    const SshowDoctor= async ()=>{
      console.log(id)
      await axios.get(`http://localhost:8080/bookappointment/showdoctorbyid/${id}`).then((Response)=>{
          console.log(Response.data);
          setDoctor(Response.data);

      }).catch((err)=>{
        console.log(err)
      })
    }

    const confirmAppt= async (e)=>{
      e.preventDefault();

      alert("Appointmet Booked Successfully")
      console.log(appt);
      await axios.post(`http://localhost:8080/bookappointment/appointment/confirm/${id}`,{
        pname: appt.pname,
        appointmentDate : appt.appointmentDate,
        appointmentType : appt.appointmentType,
      }).then((Response)=>{

          if(Response.data === "sended")
          {
            console.log(Response.data)

    
          }
      

      }).catch((err)=>{
        console.log(err)
      })
    }
    const handleInput=(e)=>{
      var name = e.target.name;
      var value = e.target.value;
      setAppt({...appt,[name] : value})
    
    }
    
      console.log(appt); 


      return(
        
        <div className='container '>
          
          <div className='d-flex'>
          <div class="card text-center shadow ">
            <div class="card-header bg-primary text-light">
              Dr Details
            </div>
            <div class="card-body">
            <h5 class="align-text-left ">Dr Name : <span className='text-muted'>{doctor.name}</span> </h5>
                <h5 class="">Expertise : <span className='text-muted'>{doctor.speciality}</span></h5>
                <h5 class="">Education : <span className='text-muted'>{doctor.degree}</span></h5>
                <h5 class="align-text-left">Fees : <span className='text-muted'>{doctor.fees}</span></h5>
                <h5 class="">Experience : <span className='text-muted'> {doctor.experience}</span></h5>
                <h5>Patient Username: <input onChange={handleInput} className='mt-2' type="text" placeholder='Enter the Patient Username' name='pname'/></h5>
                <h5>Appointment Date : <input onChange={handleInput} className='mt-2' type="date" name='appointmentDate' /></h5>
                <h5>Apppointment Type : <input onChange={handleInput} className='mt-2' type="text" name='appointmentType' placeholder='Clinic Visit/ video Consult' /></h5>
            </div>
            <div class="card-footer text-muted">
              Doctor Avilable At { doctor.availableTime}
            </div>
        </div>

        <p className='me-5'></p>

        <div class="card text-center shadow ">
          <div class="card-header bg-primary text-light">
            Payment Info
          </div>
          <div class="card-body">
               <h5 class="card-title">Pay Doctor Fees : {}</h5>
                 <span className='d-flex mb-3'><h5 class="card-title" className='me-3'>Card Number : </h5> <input type="text" placeholder='enter card number' name="" id="" /></span>
                 <span className='d-flex mb-3'><h5 class="card-title" className='me-3'>Card Exp Date :</h5> <input type="text" placeholder='enter exp date' /></span>
                 <span className='d-flex mb-3'><h5 class="card-title" className='me-3'>Card Holder Name :</h5> <input type="text" placeholder='enetr card holder name' /></span>
                 <span className='d-flex mb-3'><h5 class="card-title" className='me-3'>CVV : </h5> <input type="text" placeholder='enter the cvv' /></span>
            <button type='submit' class="btn btn-primary mt-3" onClick={confirmAppt}>Confirm & Pay</button>
          </div>
        </div>
        </div>
    </div>        
   )

}

export default ConfirmAppointment