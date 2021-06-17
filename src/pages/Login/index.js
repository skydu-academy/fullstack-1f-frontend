import React from 'react';
import '../Login/Login.css';
import GoogleLogin from 'react-google-login';


const Login = () => {
     let ResponseGoegle=(response)=> {
        console.log(response);
        console.log(response.profileObj);
      }
    
    return (
      <>
        <h4>Login</h4>
        <div className="card">
            <p>Skybook</p>
            <h5> Skybook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</h5>
            <hr></hr>
            <h3>Buat akun baru</h3>
            <p1>email</p1>
            <p2>Password</p2>
            <p3>Login</p3>
            </div>
            <div className="click">
            <GoogleLogin 
        clientId="189901676536-gsefjrlhkhug3c1l5cgbg3ojdga6cjki.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={ResponseGoegle}
        onFailure={ResponseGoegle}
        cookiePolicy={'single_host_origin'}/>
        </div>
      </>
    )
  }


export default Login
