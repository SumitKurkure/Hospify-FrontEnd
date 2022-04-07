import React from 'react';
import {Component} from 'react'

class Authenticate extends Component
{
    loggedIn(username)
    {
        console.log(username);
        sessionStorage.setItem("token",username);
    }
    logout()
    {
        sessionStorage.removeItem("token");
        sessionStorage.clear();
    }
    isUserLoggedIn()
    {
        let user = sessionStorage.getItem("token");

        if(user === null)
        {
        return "false";
        }
        else
        {
        return "true";
        }
    }
}
export default new Authenticate();