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
    <div> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :
      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={patient.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your age"
              name="age"
              value={patient.age}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={patient.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="mobno"
              value={patient.mobno}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address Name"
              name="address"
              value={patient.address}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your gender Name"
              name="gender"
              value={patient.gender}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
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