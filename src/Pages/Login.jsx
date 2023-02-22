import React, { useEffect, useState } from 'react'
import './stylesheets/Login.css'
import axios from 'axios'
function Login() {
  useEffect(()=>{
    async function verifier(){
      let token=localStorage.getItem("token")
      let res=await axios.post("http://localhost:2000/verifier",{
        token:token
      })
      console.log(res.data)
      if(res.data.status===200){
        window.location="/home"
      }

      
    }
    verifier()
  },[])
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  function userHandler(element){
    setUsername(element.target.value)
  }
  function passwordHandler(element){
    setPassword(element.target.value)
  }

  async function loginHandler(){
    if(username.length<6){
      alert("username must be atleast six characters")
      return 0
    }else if(password.length<8){
      alert("password must be atleast 8 character")
      return 0
    }else{
      let res=await axios.post("http://localhost:2000/login",{
        username:username,
        password:password
      })
      if(res.data.status!==200){
        alert("check your username and password")
        window.location="/"
        return 0
      }
      else if(res.data.token){
        localStorage.setItem("token",res.data.token)
        window.location="/home"
      }
    }
    }
  return (
    <div className='login-main-container'>
        <div className='login-container'>
            <h2>TECHNIFY</h2>

            <label for='username' className='label-one'>username</label>
            <input type='text' className='username-input' id='username' onChange={userHandler} value={username} />

            <label for='password'>password</label>
            <input type='password' className='password-input' id='password' onChange={passwordHandler} value={password} />

            <button id='button' onClick={loginHandler}>login</button>

            <a href='/signup' id='link'>click to signup .</a>
        </div>
    </div>
  )
}

export default Login