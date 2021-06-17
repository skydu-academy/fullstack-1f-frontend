import React, { Component } from 'react'
// import GoogleLogin from 'react-google-login'
import { Routes } from '../config';
import '../pages/App.css';


export class App extends Component {
  // ResponseGoegle=(response)=> {
  //   console.log(response);
  //   console.log(response.profileObj);
  // }
  render() {
    return (
      <>
        <Routes />
        <div>
        {/* <GoogleLogin 
        clientId="189901676536-gsefjrlhkhug3c1l5cgbg3ojdga6cjki.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.ResponseGoegle}
        onFailure={this.ResponseGoegle}
        cookiePolicy={'single_host_origin'}/> */}
      </div>
    </>
    )
  }
}

export default App
