import React from 'react';


const Contact=()=>{
    return(
        <div className=' container' style={{height :"450px"}} >
            <form className= ' d-flex flex-column justify-content-center align-items-center shadow' >
                <div class="form-group ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Message</label>
                    <input  type="text" class="form-control mb-5" id="exampleInputPassword1" placeholder="Password"/>
                </div>
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact;