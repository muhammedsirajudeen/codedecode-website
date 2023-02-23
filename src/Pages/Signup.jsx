import React, { useState } from 'react'
import './stylesheets/Login.css'
import axios from 'axios'
function Signup() {
    const [username,setUsername]=useState("")
    const [number,setNumber]=useState("")
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const [classname,setClassname]=useState("")
    const [text,setText]=useState("")
    function usernameHandler(element){
        setUsername(element.target.value)
    }
    function numberHandler(element){
        setNumber(element.target.value)
    }
    function passwordHandler(element){
        setPassword(element.target.value)

    }
    function confirmHandler(element){
        
        setConfirm(element.target.value)


    }

   
    async function singupHandler(){
        if(password===confirm){
            setClassname("no-warning")
            setText("password matches")

            if(password.length<8){
                alert("password must be atleast 8 character")
                return 0
            }
            if(username.length<6){
                alert("username must be atleast 6 character")
                return 0
            }
            if(number.length<10){
                alert("number must be 10 digits")
                return 0
            }
        }
        else{
            setClassname("warning")
            setText("password doesnt match")
            return 0
        }
        let res=await axios.post("http://localhost:2000/signup",
        {
            username:username,
            password:password,
            number:number
        })
        alert(res.data.data)
        if(res.data.status==="200"){
            window.location='/'
        }
    }
    return (
    <div className='login-main-container'>
    <div className='login-container'>
        <h2>TECHNIFY</h2>

        <label htmlFor='username' className='label-one'>username</label>
        <input type='text' className='username-input' id='username' onChange={usernameHandler} value={username}/>

        <label htmlFor='username' className='label-one'>Phone number</label>
        <input type='number' className='username-input' id='username' onChange={numberHandler} value={number} />

        <label htmlFor='password'>password</label>
        <input type='password' className='password-input' id='password' onChange={passwordHandler} value={password}  />

        <label htmlFor='password'>confirm password</label>
        <input type='password' className='password-input' id='confirm-password' onChange={confirmHandler} value={confirm}/>
        <div className={classname}>{text}</div>
        <button id='button' onClick={singupHandler}>signup</button>

        <a href='/' id='link'>continue to login</a>
    </div>
</div>
  )
}

export default Signup