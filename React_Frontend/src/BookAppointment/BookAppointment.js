import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
const BookAppointment = () => {

  const navigate = useNavigate();

  const[hospList,setHospList]= useState({});
  const [city,setCity]= useState({cityName :""});

    const showHospital=(e)=>{
      e.preventDefault();

      axios.get("http://localhost:8080/bookappointment/hospital/"+city.cityName).then((Response)=>{
        if(Response.data == null)
        {
          console.log("no hospital found")
        }
        else
        {
          setHospList(Response.data);
          console.log(hospList);
        }
      }).catch((err)=>{
        console.log(err)
      })
    }

    const onChangeSetCity =(e)=>{
      var name = e.target.name;
      var value = e.target.value;
      setCity({...city,[name] : value})  
    }
  return (
    <div>
        <div class="card text-center mb-3">      
        <div class="card-body">
          <h5 class="card-title mb-2">Search Hospital By City</h5>
          <input class="mb-2" name='cityName' onChange={onChangeSetCity} size={35} placeholder='Enter the City Name'/>
          <p></p>
          <Link to="" class="btn btn-primary mb-3" onClick={showHospital}>Search</Link>
          <p></p>
          <Link to={'/bookappointment/showhospital'} className="btn btn-outline-dark me-2 ">Pune</Link>
          <Link to={'/bookappointment/showhospital'} className="btn btn-outline-dark me-2">Mumbai</Link>
          <Link to={'/bookappointment/showhospital'} className="btn btn-outline-dark me-2">Nagpur</Link>
          <Link to={'/bookappointment/showhospital'} className="btn btn-outline-dark me-2">Nashik</Link>
        </div>
          <div>
          <div class="row m-2 ">
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cold,Cough and Fever</h5>
                    <img class="card-text m-3" src='cough-cold.jpg'  height={135}></img>
                    <Link to="/bookappointment/showdoctor" class="btn btn-primary">See Doctor</Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title" >Dermatology</h5>
                    <img class="card-text m-3" src="darmetology.jpg" height={135}></img>
                    <Link to="/bookappointment/showdoctor" class="btn btn-primary">See Doctor</Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">General Physician</h5>
                    <img class="card-text m-3" src="physician.webp" height={135}></img>
                    <Link to="/bookappointment/showdoctor" class="btn btn-primary">See Doctor</Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cardiology</h5>
                    <img class="card-text m-3" src="cardiology.jpg" height={135}></img>
                    <Link to="/bookappointment/showdoctor" class="btn btn-primary">See Doctor</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BookAppointment