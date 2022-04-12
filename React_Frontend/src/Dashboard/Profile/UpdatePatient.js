import axios from 'axios';
import React , {useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router';
import UpdatePatient from './UpdatePatient'
import { Link ,Navigate} from 'react-router-dom'

const ProfilePatient = () => {

const[patient,setPatient] = useState({  name: "",
                                        age:"",
                                        mobno:"",
                                        gender:"",
                                        address :"",
                                        bloodgroup:"",
                                        email:"",
                                                    });
var navigate = useNavigate();
var {username} = useParams()
var result;

useEffect(()=>{ 
  getPatientDetails();
},{})

const getPatientDetails = async () => 
{
   await axios.get(`http://localhost:8080/profile/patient/${username}`).then((Response)=>{

    setPatient(Response.data); 
   })
}
const handleSubmit= async(e)=>{
  e.preventDefault();
  await axios.post(`http://localhost:8080/profile/patient/update/${username}`,{
    name: patient.name,
    age: patient.age,
    mobno: patient.mobno,
    gender:patient.gender,
    address : patient.address,
    bloodgroup:patient.bloodgroup,
    email:patient.email,
  }).then((Response)=>{
    console.log(Response.data)

    if(Response.data === "update")
    {
      console.log(Response.data)
        navigate(`/dashboard/patient/profile/${username}`);
        <div className='alert alert-success ' role={alert}> </div>
    }
  }).catch((Error)=>{
    console.log(Error)
  })

}
const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setPatient({...patient,[name]:value})
}
console.log(patient);

  return (
    <div className=''> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
      <div className="container">
      <div className=" mx-auto  ">
        <h2 className="text-center mb-4 mt-5 pt-5">Edit Patient</h2>
        <form className='p-4 form-control from-group h-100 shadow border ms-5 justift-content-center' onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Name"
              name="name"
              value={patient.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your age"
              name="age"
              value={patient.age}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={patient.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Phone Number"
              name="mobno"
              value={patient.mobno}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Address Name"
              name="address"
              value={patient.address}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your gender Name"
              name="gender"
              value={patient.gender}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Address Name"
              name="bloodgroup"
              value={patient.bloodgroup}
              onChange={handleInput}
            />
          </div>
          <button type='submit' className="btn btn-warning btn-block">Update Profile</button>
        </form>
      </div>
    </div>}
  </div>
  )
}

export default ProfilePatient;