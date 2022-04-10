
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
import PatientDashboard from './Dashboard/PatientDashboard/PatientDashboard';
import DoctorDashboard from './Dashboard/DoctorDashboard/DoctorDashboard';
import RegisterDoctor from './Register/RegisterDoctor';
import RegisterPatient from './Register/RegisterPatient';
import ProfilePatient from './Dashboard/Profile/ProfilePatient';
import Prescription from './Dashboard/PatientDashboard/Prescription'
import Treatment from './Dashboard/PatientDashboard/Treatment'
import BookAppointment from './BookAppointment/BookAppointment'
import Authenticate from './Login/Authenticate';
// import {useNavigate} from 'react-router-dom';
import ShowDoctor from "./BookAppointment/ShowDoctor"
import ShowHospital from "./BookAppointment/ShowHospital"
import ForgotPassword from './Login/ForgotPassword';
import SendPrescription from './Dashboard/DoctorDashboard/SendPrescription';
import UpdatePatient from './Dashboard/Profile/UpdatePatient'
import AuthenticatedRoute from './Login/AuthenticateRoute';
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
           <Route exact path='/login/patient/forgotpassword' element={<ForgotPassword/>}></Route>

            <AuthenticatedRoute  path="/dashboard/patient/:username" element={<PatientDashboard />}></AuthenticatedRoute> 
           
            <AuthenticatedRoute  path="/dashboard/update-patient/:username" element={<UpdatePatient/>}></AuthenticatedRoute>

            <AuthenticatedRoute  path="/dashboard/doctor/sendprescription/:username" element={<SendPrescription/>}></AuthenticatedRoute>

            <AuthenticatedRoute  path='/dashboard/prescription' element={<Prescription/>}></AuthenticatedRoute>
            <AuthenticatedRoute  path='/dashboard/treatment' element={<Treatment/>}></AuthenticatedRoute>

            <AuthenticatedRoute  path='/bookappointment' element={<BookAppointment/>}></AuthenticatedRoute>
            <AuthenticatedRoute  path='/bookappointment/showdoctor/:speciality' element={<ShowDoctor/>}></AuthenticatedRoute>
            <AuthenticatedRoute  path='/bookappointment/showhospital/:cityName' element={<ShowHospital/>}></AuthenticatedRoute>
            
           
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
