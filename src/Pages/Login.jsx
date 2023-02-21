import React from 'react'
import './stylesheets/Login.css'
function Login() {
    function loginHandler(){
        alert("login")
        window.location="/home"
    }
  return (
    <div className='login-main-container'>
        <div className='login-container'>
            <h2>TECHNIFY</h2>

            <label for='username' className='label-one'>username</label>
            <input type='text' className='username-input' id='username'/>

            <label for='password'>password</label>
            <input type='password' className='password-input' id='password'/>

            <button id='button' onClick={loginHandler}>login</button>

            <a href='/signup' id='link'>click to signup</a>
        </div>
    </div>
  )
}

export default Login