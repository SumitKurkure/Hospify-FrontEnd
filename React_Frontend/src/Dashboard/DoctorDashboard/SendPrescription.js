import axios from 'axios';
import React, { useState } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'

const SendPrescription = () => {
  const initialValue= {patientName : "", medicinFirst: "",medicineSecond :"",labTestName: "",dosePerDay:"",dayToVist:""}
const[prescription,setPrescription] = useState({initialValue});

    // var {username} = useParams();
var navigate = useNavigate()
 
const sendPrescription= async ()=>{
  await axios.post("http://localhost:8080/dashboard/doctor/sendprescription",{initialValue}).then((Response)=>{
    console.log(Response.data);
    if(Response.data === "sended")
    {
      navigate(`/dashboard/doctor/:username`);
      setPrescription({ });
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
      <form action="" className='form-group h-75 w-50'>
        Patient UserName<input type="text" name='patientName' placeholder='enter the patient Name' onChange={handleInput}/>
        <p></p>
        Medicine Name 1<input type="text" name="medicineFirst" onChange={handleInput}/>
        <p></p>
        Medicine Name 2<input type="text" name="medicineSecond"onChange={handleInput} />
        <p></p>
        LabTestName<input type="text" name='labTestName' placeholder='enter the lab Test' onChange={handleInput}/>
        <p></p>
        Dose/Day<input type="text" name='dosePerDay' placeholder='enter the doses per day'onChange={handleInput}/>
        <p></p>
        Visit After<input type="text" name='dayToVist' placeholder='enter the days after visit' className='mb-3 ' onChange={handleInput}/>
        <p></p>
        <button className='btn btn-primary btn-lg' onClick={sendPrescription}>Send Prescription</button>
      </form>
    </div>
  )
}

export default SendPrescription