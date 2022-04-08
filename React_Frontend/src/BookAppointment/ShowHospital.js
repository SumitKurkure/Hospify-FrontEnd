import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const ShowHospital = () => {

  const navigate = useNavigate();
  const[hospList,setHospList]= useState({});
    var { cityName } = useParams();

    const showHospital= async (e)=>{
      e.preventDefault();
      await axios.get("http://localhost:8080/bookappointment/showhospital/"+cityName).then((Response)=>{
       
          console.log(Response.data)
          setHospList(Response.data);
  

      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(hospList); 


  return (
    <div>
        <button onClick={showHospital}></button>

    </div>
  )
}

export default ShowHospital