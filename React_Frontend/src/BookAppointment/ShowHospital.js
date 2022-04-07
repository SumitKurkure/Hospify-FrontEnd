import React, { useEffect ,useState } from 'react'
import {useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const ShowHospital = () => {

  const navigate = useNavigate();

  const[hospList,setHospList]= useState({});

  function BlogPost() {
    var { cityName } = useParams();
    return cityName
  }
    const showHospital= async (e)=>{
      e.preventDefault();

        
      var cityName = BlogPost();
      

      await axios.get("http://localhost:8080/bookappointment/showhospital/"+cityName).then((Response)=>{
       
      console.log(Response.data)
          setHospList(Response.data);
  
          console.log(hospList); 

      }).catch((err)=>{
        console.log(err)
      })
    }



  return (
    <div>
        <button onClick={showHospital}>show hospital</button>

    </div>
  )
}

export default ShowHospital