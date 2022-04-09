import axios from 'axios';
import React, { useState } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'

const SendPrescription = () => {
  
const[prescription,setPrescription] = useState({ pusername : "", medicineFirst: "",medicineSecond :"",labTestName: "",dosePerDay:"",dayToVist:""});

    var {username} = useParams();

var navigate = useNavigate()
 
const sendPrescription=  (e)=>{
    e.preventDefault();
    console.log(prescription);
   axios.post(`http://localhost:8080/dashboard/doctor/sendprescription/${username}`,{
    pusername : prescription.pusername,  medicineFirst: prescription.medicineFirst , medicineSecond : prescription.medicineSecond,labTestName: prescription.labTestName,dosePerDay:prescription.dosePerDay,dayToVist:prescription.dayToVist,
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
    <div className='container'>
      <form action="" className='form-group h-75 w-50 border shadow'>
        Patient UserName<input type="text" class="form-control border-dark" name='pusername' placeholder='enter the patient Name' onChange={handleInput}/>
        <p></p>
        Medicine Name 1<input type="text" class="form-control border-dark" name="medicineFirst" onChange={handleInput}/>
        <p></p>
        Medicine Name 2<input type="text" class="form-control border-dark" name="medicineSecond"onChange={handleInput} />
        <p></p>
        LabTestName<input type="text" class="form-control border-dark" name='labTestName' placeholder='enter the lab Test' onChange={handleInput}/>
        <p></p>
        Dose/Day<input type="text" class="form-control border-dark" name='dosePerDay' placeholder='enter the doses per day'onChange={handleInput}/>
        <p></p>
        Visit After<input type="text" class="form-control border-dark" name='dayToVist' placeholder='enter the days after visit' className='mb-3 ' onChange={handleInput}/>
        <p></p>
        <button className='btn btn-primary btn-lg' onClick={sendPrescription}>Send Prescription</button>
      </form>
    </div>
  )
}

export default SendPrescription