import React, { useEffect, useState } from 'react'
import './level.css'
import axios from 'axios'
function Level1() {
    const [flag,setFlag]=useState("")
   
    useEffect(()=>{
        async function verifier(){
            let token=localStorage.getItem("token")
            if(token){
                let res=await axios.post("http://localhost:2000/verifier",{
                    token:token
                  })
                  console.log(res.data)
                  if(res.data.status!==200){
                    window.location="/"
                  }
            }else{
                window.location="/"
            }
      
            
          }
          verifier()
    },[])
    async function copyHandler(){
        document.querySelector("#copy-button").style.backgroundColor="black"
        document.querySelector("#copy-button").style.color="white"
        document.querySelector("#copy-button").textContent="copied"
        await navigator.clipboard.writeText(document.querySelector(".flag").textContent);

    }
    async function flagHandler(){
        let token=window.localStorage.getItem("token")
        let res=await axios.post("http://localhost:2000/level1",{
            token:token,
            flag:flag
        })
        console.log(res.data)
        if(res.data.status!==200){
            alert("internal error please try logging in again")
        }else{
            if(res.data.flag!=="success"){
                alert("failed please try again")
            }else{
                alert("success continue with other levels")
                window.location="/home"
            }
        }
    }
  return (
    <div className='level-main-container'>
        <div className='level-sub-container'>
            <div id='level-heading'>LEVEL1</div>
            <div className='list-container'>
                <ul>
                    <li>you are free to use any resource that you want</li>
                    <li>this is a sha512 hash </li>
                    <li>the beauty of a hash if that you wont be able to reverse it</li>
                    <li>This is a ten digit number hashed with SHA512 hash</li>
                    <li>bruteforce all the 10 digits to find the answer</li>
                    <li>the hash is in the box below copy it and find the 10 digit number </li>
                    <li>if you think you have found the number submit it in the input box and you 
                        would be notified of results immediately
                    </li>

                </ul>
            </div>
            <div className='flag-container'>
                <div className='flag'>4a0a20d3370333de723ec42c3150a0407b2192a3fbb42bd1ab656c6351bee4c9277d43d9bda398978f6703af44a366f0bebd21ec099ebba0a8faf8fc9c2e5097</div>
                <button id='copy-button' onClick={copyHandler} >copy</button>
            </div>

            <div className='submit-flag'>
                <label htmlFor='flag-input'>check your results</label>
                <input type='text' className='flag-input' onChange={(e)=>setFlag(e.target.value)} value={flag} />
                <button className='submit-flag-button' onClick={flagHandler} >submit</button>
            </div>
        </div>
    </div>
  )
}

export default Level1