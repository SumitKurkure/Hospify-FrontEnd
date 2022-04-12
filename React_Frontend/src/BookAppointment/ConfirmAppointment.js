import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const ConfirmAppointment = () => {

  var { id } = useParams();
  
    const navigate = useNavigate();
    const[appt,setAppt]= useState();
    const[flag,setFlag] = useState(false);
    const[doctor,setDoctor] = useState({ });


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
    useEffect(()=>{
      SshowDoctor();
    },[ ])

    const SshowDoctor= async ()=>{
      console.log(id)
      await axios.get("http://localhost:8080/bookappointment/showdoctorbyid/"+id).then((Response)=>{
          console.log(Response.data)
          setDoctor(Response.data);


      }).catch((err)=>{
        console.log(err)
      })
    }
      console.log(appt); 

      return(
        <div className='container'>
              <div className='d-flex flex-row border-rounded '>
                <div className='col-md-6 bg-light me-4'>
                  <form className='shadow border' action="">
                  Dr Name - {doctor.dname}
                  <p></p>
                  Expertise -{doctor.speciality}
                  <p></p>
                  Fees - {doctor.fees}
                  <p></p>
                  Education - {doctor.degree}
                  <p></p>
                  Experience -  {doctor.experience}   
                  </form>
                </div>
                <div className='col-md-6'>
                    <div class="tab-content">
                            <form  onSubmit={BookAppointment} className="shadow border">
                                <div class="form-group"> <label for="username">
                                        <h6>Card Owner</h6>
                                    </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control "/> </div>
                                <div class="form-group"> <label for="cardNumber">
                                        <h6>Card number</h6>
                                         </label>
                                    <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                            <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required/> <input type="number" placeholder="YY" name="" class="form-control" required/> </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                            </label> <input type="text" required class="form-control"/> </div>
                                    </div>
                                </div>
                                <div class="card-footer"> 
                                <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Confirm & Pay </button>
                                </div>
                            </form>
                        </div>









                </div>
              </div>  
          </div>
      )

}

export default ConfirmAppointment