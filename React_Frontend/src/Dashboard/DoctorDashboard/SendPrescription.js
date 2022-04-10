import axios from 'axios';
import React, { useState } from 'react'
import { Link,useParams,useNavigate,Navigate } from 'react-router-dom'
const SendPrescription = () => {
  
const[prescription,setPrescription] = useState({ patientUsername : "", medicineFirst: "",medicineSecond :"",labTestName: "",dose_per_day:"",visit_after_days:""});

    var {username} = useParams();

var navigate = useNavigate()
 
const sendPrescription=  (e)=>{
    e.preventDefault();
    console.log(prescription);
   axios.post(`http://localhost:8080/dashboard/doctor/sendprescription/${username}`,{
    patientUsername : prescription.patientUsername,  medicineFirst: prescription.medicineFirst , medicineSecond : prescription.medicineSecond,labTestName: prescription.labTestName,dose_per_day:prescription.dose_Per_Day, visit_after_days:prescription.visit_after_days,
  }).then((Response)=>{
    
    console.log(Response.data);

    if(Response.data === "sended")
    {
      navigate(`/dashboard/doctor/${username}`);
    
    }
  }).catch((error)=>{
    console.log(error)
  })
    
}
const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setPrescription({...prescription,[name] : value})

}
  return (
      <div>  { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
    <div className='container'>
      <form action="" className='form-group h-75 w-50 border shadow'>
        Patient UserName<input type="text" class="form-control border-dark" name='patientUsername' placeholder='enter the patient Name' onChange={handleInput}/>
        <p></p>
        Medicine Name 1<input type="text" class="form-control border-dark" name="medicineFirst" onChange={handleInput}/>
        <p></p>
        Medicine Name 2<input type="text" class="form-control border-dark" name="medicineSecond"onChange={handleInput} />
        <p></p>
        LabTestName<input type="text" class="form-control border-dark" name='labTestName' placeholder='enter the lab Test' onChange={handleInput}/>
        <p></p>
        Dose/Day<input type="text" class="form-control border-dark" name='dose_per_day' placeholder='enter the doses per day'onChange={handleInput}/>
        <p></p>
        Visit After<input type="text" class="form-control border-dark" name='visit_after_days' placeholder='enter the days after visit' className='mb-3 ' onChange={handleInput}/>
        <p></p>
        <button className='btn btn-primary btn-lg' onClick={sendPrescription}>Send Prescription</button>
      </form>
    </div>
}</div>
  )
}

export default SendPrescription