import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import ShowDoctor from './ShowDoctor';
const BookAppointment = () => {

  const navigate = useNavigate();

  const[hospList,setHospList]= useState([]);

  const [city,setCity]= useState({cityName :""});
  const [flag,setFlag]= useState(false);

    const showHospital= async (e)=>{
      e.preventDefault();

      await axios.get("http://localhost:8080/bookappointment/hospital/"+city.cityName).then((Response)=>{
      
          setHospList(Response.data);

          setFlag(true);

          console.log(Response.data)

            console.log(hospList); // two time clicks get data issue
            // navigate("/bookappointment/showhospital/"+city.cityName);

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
          <Link to={''} className="btn btn-outline-dark me-2 " onClick={showHospital}>Pune</Link>
          <Link to={''} className="btn btn-outline-dark me-2" onClick={showHospital}>Mumbai</Link>
          <Link to={''} className="btn btn-outline-dark me-2" onClick={showHospital}>Nagpur</Link>
          <Link to={''} className="btn btn-outline-dark me-2" onClick={showHospital}>Nashik</Link>
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

  return (
    
    <div>
        <div class="card text-center mb-3">      
        <div class="card-body">
          <h5 class="card-title mb-2">Search Hospital By City</h5>
          <input class="mb-2" name='cityName' onChange={onChangeSetCity} size={35} placeholder='Enter the City Name'/>
          <p></p>
          <Link to="" class="btn btn-primary mb-3" onClick={showHospital}>Search</Link>
          <p></p>
          <Link to={''} className="btn btn-outline-dark me-2 " onClick={showHospital}>Pune</Link>
          <Link to={''} className="btn btn-outline-dark me-2" onClick={showHospital}>Mumbai</Link>
          <Link to={''} className="btn btn-outline-dark me-2" onClick={showHospital}>Nagpur</Link>
          <Link to={''} className="btn btn-outline-dark me-2" onClick={showHospital}>Nashik</Link>
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