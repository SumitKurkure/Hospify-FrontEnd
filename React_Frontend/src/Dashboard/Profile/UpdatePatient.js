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
const cancelUpdate=()=>{
  navigate(`/dashboard/patient/profile/${username}`)
}
const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setPatient({...patient,[name]:value})
}
console.log(patient);

  return (
        <div class="container">
          { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> :

<div class="row gutters ">
<div class="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12 ">
<div class="card h-100 shadow">
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" width={120} className="mb-3 ms-5" alt="Maxwell Admin"/>
				</div>
				<h5 class="user-name ms-5">{patient.name}</h5>
				<h6 class="user-email ms-2">{patient.email}</h6>
			</div>
			<div class="about">
				<h5 className='ms-5'>About</h5>
				<p>I'm {patient.name}. I have Problem on Cold-cough-fiver So I want Better cure from Top Doctor</p>
			</div>
		</div>
	</div>
</div>
</div>
<div class="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100 shadow">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Personal Details</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Full Name</label>
					<input type="text" class="form-control" name="name"
              value={patient.name}  onChange={handleInput} id="fullName" placeholder="Enter full name"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<input type="email" name="email"
              value={patient.email}  onChange={handleInput} class="form-control" id="eMail" placeholder="Enter email ID"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Phone</label>
					<input type="text"  name="mobno"
              value={patient.mobno}  onChange={handleInput} class="form-control" id="phone" placeholder="Enter phone number"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="website">Age</label>
					<input type="url" name="age"
              value={patient.age}  onChange={handleInput} class="form-control" id="website" placeholder="Website url"/>
				</div>
			</div>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Street</label>
					<input type="name"   name="address"
              value={patient.address}  onChange={handleInput} class="form-control" id="Street" placeholder="Enter Street"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="ciTy">Gender</label>
					<input type="name" name="gender"
              value={patient.gender}  onChange={handleInput} class="form-control" id="ciTy" placeholder="Enter City"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="sTate">Blood Group</label>
					<input type="text"  name="bloodgroup"
              value={patient.bloodgroup}  onChange={handleInput} class="form-control" id="sTate" placeholder="Enter State"/>
				</div>
			</div>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-right">
					<button  type="button" id="submit" name="submit" class="btn btn-secondary me-3" onClick={cancelUpdate}>Cancel</button>
					<button type="button" id="submit" name="submit" class="btn btn-primary" onClick={handleSubmit}>Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
}
      {/* <div className="container">
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
    </div> */
  
    // {/* } */}
}
  </div>
  )
}

export default ProfilePatient;