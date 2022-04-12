import React from 'react';
import './Home.css'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
const Home=()=>
{
    const navigate = useNavigate();
    const bookAppointment=()=>
    {
        navigate.push("localhost:3000/login/patient")
    }
    return(
        <div>
            <div className='body'>
                
                <div class="row featurette container-fluid pt-3 pb-4">
                    
                    <div class="col-md-7 d-flex justify-content-center align-items-center">
                   
                    <div className='d-flex flex-column'>
                            <Link to="/login/patient" className='btn btn-primary rounded-pill px-5 mb-4 glass btn-lg'>Book appointment</Link>
                            <Link to='/' className='btn btn-secondary rounded-pill px-5 mb-4 glass1'>Buy Medicine</Link>
                            <Link to='/' className='btn btn-danger rounded-pill px-5 mb-4 glass2'>Book LabTest</Link>
                            <Link to='/' className='btn btn-danger rounded-pill px-5 mb-4 glass2'>Check Hospital Data</Link>

                    </div> 
                    </div>
                    <div class="col-md-5  ">
                        <img src="doctor.png" alt="" width="Auto" height="100%"/>
                    </div>
                </div>
                <div>
                <hr/>
                </div>
                {/* Middle Content Card code */}
                <div class="extra-margin-5">
                    <div class="Container-fluid">
                        <div class="row justify-content-md-center">
                            <div class="row">
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-one"></div>
                                        <div class="product-text">
                                            <h3>Dr. Kurkure</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-one"></div>
                                        <div class="product-text">
                                            <h3>Dr. Desai</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-one"></div>
                                        <div class="product-text">
                                            <h3>Dr. Roy</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-one"></div>
                                        <div class="product-text">
                                            <h3>Dr. Ankushe</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
            

        <div class="custom-footer">
            <Footer/>
        </div>
    </div>
        
        
        
   )
}
export default Home;