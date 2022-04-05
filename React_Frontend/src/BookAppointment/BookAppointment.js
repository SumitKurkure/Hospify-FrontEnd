import React from 'react'
import { Link } from 'react-router-dom'
const BookAppointment = () => {
  return (
    <div>
        <div class="card text-center mb-3">      
        <div class="card-body">
          <h5 class="card-title mb-2">Search Hospital By City</h5>
          <input class="mb-2" name='searchByCity' size={35} placeholder='Enter the City Name'/>
          <p></p>
          <Link to="/" class="btn btn-primary mb-3">Search</Link>
          <p></p>
          <Link to={'/'} className="btn btn-outline-dark me-2 ">Pune</Link>
          <Link to={'/'} className="btn btn-outline-dark me-2">Mumbai</Link>
          <Link to={'/'} className="btn btn-outline-dark me-2">Nagpur</Link>
          <Link to={'/'} className="btn btn-outline-dark me-2">Nashik</Link>
        </div>
          <div>
          <div class="row m-2">
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cold,Cough and Fever</h5>
                    <img class="card-text m-3" src='cough-cold.jpg' width={100} height={100}></img>
                    <a href="#" class="btn btn-primary">See Doctor</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title" >Dermatology</h5>
                    <img class="card-text m-3" src="darmetology.jpg"></img>
                    <a href="#" class="btn btn-primary">See Doctor</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">General Physician</h5>
                    <img class="card-text m-3" src="physician.webp"></img>
                    <a href="#" class="btn btn-primary">See Doctor</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Cardiology</h5>
                    <img class="card-text m-3" src="cardiology.jpg"></img>
                    <a href="#" class="btn btn-primary">See Doctor</a>
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