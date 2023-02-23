import React, { useEffect, useState } from 'react'
import './level.css'
import axios from 'axios'
function Level2() {
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

    async function flagtwoHandler(){
        let token=window.localStorage.getItem("token")
        let res=await axios.post("http://localhost:2000/level3",{
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
    async function copyHandler(){
        document.querySelector("#copy-button").style.backgroundColor="black"
        document.querySelector("#copy-button").style.color="white"
        document.querySelector("#copy-button").textContent="copied"
        await navigator.clipboard.writeText(document.querySelector(".flag").textContent);

    }
  return (
    <div className='level-main-container'>
        <div className='level-sub-container'>
            <div id='level-heading'>LEVEL3</div>
            <div className='list-container'>
                <ul>
                    <li>This hash is the name of a popular programmer</li>
                    <li>compute the hash and compare to find the name of the programmer</li>

                    <li>the name that is hashed is in small case and does not contain any whitespaces</li>
                    <li>this person would be easily in the top 100 all time programmers</li>
                    <li>the hash is in sha512</li>
                    
                    <li>if you think you have found the number submit it in the input box and you 
                        would be notified of results immediately
                    </li>

                </ul>
            </div>
            <div className='flag-container'>
                <div className='flag'>b05d2cb7390333a8a87006e5e229bf3cdc9f24a09f2fb7a78f78d2379814702017b14fa5d6e1223209b6ec7b19902ae36b192bfcb92ce8678f2870bf37d41ab5</div>
                <button id='copy-button' onClick={copyHandler} >copy</button>
            </div>

            <div className='submit-flag'>
                <label htmlFor='flag-input'>check your results</label>
                <input type='text' className='flag-input' onChange={(e)=>setFlag(e.target.value)} value={flag} />
                <button className='submit-flag-button' onClick={flagtwoHandler} >submit</button>
            </div>
        </div>
    </div>
  )
}

export default Level2