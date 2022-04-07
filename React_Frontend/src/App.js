
import Home from './Homepage/Home';
import Register from './Register/RegisterPatient';
import {BrowserRouter as Router } from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Help from './Pages/Help';
import Navbar from './Homepage/Navbar/Navbar';
import NotFound from './Pages/NotFound';
import LoginPatient from './Login/LoginPatient';
import LoginDoctor from './Login/LoginDoctor';
import PatientDashboard from './Dashboard/PatientDashboard';
import DoctorDashboard from './Dashboard/DoctorDashboard';
import RegisterDoctor from './Register/RegisterDoctor';
import RegisterPatient from './Register/RegisterPatient';
import ProfilePatient from './Dashboard/Profile/ProfilePatient';
import Prescription from './Dashboard/Prescription'
import Treatment from './Dashboard/Treatment'
import BookAppointment from './BookAppointment/BookAppointment'
import Authenticate from './Login/Authenticate';
// import {useNavigate} from 'react-router-dom';
import ShowDoctor from "./BookAppointment/ShowDoctor"
import ShowHospital from "./BookAppointment/ShowHospital"

function App() 
{
  // const navigate = useNavigate();
  return (
    <div>
      <Router>

      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}></Route>
          
           {/* <Route exact path='/login/admin' element={}></Route> */}
           <Route exact path='/login/doctor' element={<LoginDoctor/>}></Route>
           <Route exact path='/login/patient' element={<LoginPatient/>}></Route>
           
            <Route exact path="/dashboard/patient/:username" element={<PatientDashboard />}></Route> 
           
            <Route exact path="/dashboard/doctor/:username" element={<DoctorDashboard/>}></Route>
            <Route exact path='/dashboard/profile' element={<ProfilePatient/>}></Route>
            <Route exact path='/dashboard/prescription' element={<Prescription/>}></Route>
            <Route exact path='/dashboard/treatment' element={<Treatment/>}></Route>

            <Route exact path='/bookappointment' element={<BookAppointment/>}></Route>
            <Route exact path='/bookappointment/showdoctor' element={<ShowDoctor/>}></Route>
            <Route exact path='/bookappointment/showhospital' element={<ShowHospital/>}></Route>
            
           
           <Route exact path='/register/patient' element={<RegisterPatient/>}></Route>
           <Route exact path='/register/doctor' element={<RegisterDoctor/>}></Route>
           
           <Route exact path='/about' element={<About/>}></Route>
           <Route exact path='/contact' element={<Contact/>}></Route>
           <Route exact path='/help' element={<Help/>}></Route>

           <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
