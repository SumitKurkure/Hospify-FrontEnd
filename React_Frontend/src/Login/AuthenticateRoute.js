import React, { Component } from 'react'
import Authenticate from './Authenticate'
import { Navigate , Route } from "react-router-dom";

class AuthenticatedRoute extends Component
{
    render()
    {
        if(!Authenticate.isUserLoggedIn())
        {
            return <Route {...this.props}/>
        }
        else{
            return <Navigate to="/"/>
        }
    }
}
export default AuthenticatedRoute;