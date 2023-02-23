import React, { useEffect, useState } from 'react'
import './level.css'
import axios from 'axios'
function Level4() {
    const [flag,setFlag]=useState("")
    const [nextflag,setnextflag]=useState("")
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
    async function nextcopyHandler(){
        document.querySelector("#next-copy-button").style.backgroundColor="black"
        document.querySelector("#next-copy-button").style.color="white"
        document.querySelector("#next-copy-button").textContent="copied"
        await navigator.clipboard.writeText(document.querySelector(".flag-next").textContent);

    }
    async function flagHandler(){
        let token=window.localStorage.getItem("token")
        let res=await axios.post("http://localhost:2000/level4",{
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
                alert("success")
                setnextflag(res.data.nextflag)
            }
        }
    }
  return (
    <div className='level-main-container'>
        <div className='level-sub-container'>
            <div id='level-heading'>LEVEL4</div>
            <div className='list-container'>
                <ul>
                    <li>you are free to use any resource that you want</li>
                    <li>this is a sha512 hash</li>
                    <li>an algorithm used by google to rank page indexes</li>
                    <li>upon finding the flag and submitting you would be returned with another hash function</li>
                    <li>this hash function is again a 10 digit number </li>
                    <li>you have to post this data to http:// /flag4 with the json like the json format below  </li>
                    <li>You will be able to pass your friend in this level by posting his username to this api too </li>
                    <li>{JSON.stringify({data:"the flag here",username:"yourusername"})}</li>
                    <li>if you post the data successfully you would pass the level and you would see the level turn green </li>


                </ul>
            </div>
            <div className='flag-container'>
                <div className='flag'>b429ed02a32718231744ff52865fc2fd35b4cbd16900e88c836c9765004c15a018791811969c416d05846db7b581a0c970ce7542a9b00e90bb1584ba7da292d6</div>
                <button id='copy-button' onClick={copyHandler} >copy</button>
            </div>

            <div className='submit-flag'>
                <label htmlFor='flag-input'>check your results</label>
                <input type='text' className='flag-input' onChange={(e)=>setFlag(e.target.value)} value={flag} />
                <button className='submit-flag-button' onClick={flagHandler} >submit</button>
            </div>
            <div className='flag-container'>
                <div className='flag-next'>{nextflag}</div>
                <button id='next-copy-button' onClick={nextcopyHandler} >copy</button>
            </div>
        </div>
    </div>
  )
}

export default Level4