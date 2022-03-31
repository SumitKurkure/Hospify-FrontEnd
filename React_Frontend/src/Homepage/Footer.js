import react from "react";
import { Link,NavLink } from "react-router-dom";

function Footer()
{
    return(
        <div>
            <footer className="page-footer font-small bg-dark text-white pt-4">

 
                <div className="container-fluid text-center text-md-left">

                
                <div className="row">


                    <div className="col-md-6 mt-md-0 mt-3">

                    
                    <h5 className="text-uppercase ">Hospify</h5>
                    <p className="bg-">Hospital at FingerTips</p>
                    <img src="" alt="" className="mt-5"/>
                    <input type="email" placeholder="    email" className="h-25 border-0 p-1"/><button className="bg-primary text-white w-40 h-25 border-0 ms-1 p-2">Subscribe</button>
                    </div>
                    

                    <hr className="clearfix w-100 d-md-none pb-3"/>

                    
                    <div className="col-md-3 mb-md-0 mb-3">


                    <h5 className="text-uppercase ">Pages</h5>

                    <ul className="list-unstyled ">
                        <li>
                        <Link to='/about' className="text-white text-decoration-none">About Us</Link>
                        </li>
                        <li>
                        <Link to='/' className="text-white text-decoration-none">Privacy Policy</Link>
                        </li>
                        <li>
                        <Link to='/contact' className="text-white text-decoration-none">Contact US</Link>
                        </li>
                        <li>
                        <Link to='/help' className="text-white text-decoration-none">Help</Link>
                        </li>
                    </ul>

                    </div>   
                    <div className="col-md-3 mb-md-0 mb-3">    
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled">
                        <li>
                        <Link to='/' className="text-decoration-none text-white">Whatsapp</Link>
                        </li>
                        <li>
                        <Link to='/' className="text-decoration-none text-white">FaceBook</Link>
                        </li>
                        <li>
                        <Link to='/' className="text-decoration-none text-white">Instagram</Link>
                        </li>
                        <li>
                        <Link to='/' className="text-decoration-none text-white">Twitter</Link>
                        </li>
                    </ul>

                    </div>
                </div>
                </div>

                <div className="footer-copyright text-center py-3 "> © 2020 Copyright :
                <Link to='/'> Hospify.com</Link>
                
                </div>


                </footer>   
        </div>
    );
}

export default Footer;