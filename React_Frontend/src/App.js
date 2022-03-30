
import Home from './Homepage/Home';
import Login from './Login/LoginPatient';
import Register from './Register/Register';
import {BrowserRouter as Router } from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Help from './Pages/Help';
import Navbar from './Homepage/Navbar';
import NotFound from './Pages/NotFound';
import Dashboard from './Dashboard/Dashboard';
function App() 
{
  return (
    <div>
      <Router>

      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}></Route>
          
           <Route exact path='/login/admin' element={<Login/>}></Route>
           <Route exact path='/login/doctor' element={<Login/>}></Route>
           <Route exact path='/login/patient' element={<Login/>}></Route>
           
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>

           <Route exact path='/register/patient' element={<Register/>}></Route>
           <Route exact path='/register/doctor' element={<Register/>}></Route>
           
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
