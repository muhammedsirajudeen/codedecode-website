import React, { useEffect, useState } from 'react'
import './level.css'
import axios from 'axios'
function Level5() {
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
        let res=await axios.post("http://localhost:2000/level5",{
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
            <div id='level-heading'>LEVEL5</div>
            <div className='list-container'>
                <ul>
                    <li>you are free to use any resource that you want</li>
                    <li>this is a sha512 hash</li>
                    <li>There was a political theorist in italy </li>
                    <li>he was so concerned with power that all he thought was acquiring that was his ultimate him</li>
                    <li>he was so menace that his name is associated with the dark personalities in psychology</li>
                    <li>the name of the person is is smallcases without whitespaces</li>
                    <li>find the name of the person and post it the url and you would be returned a jwt token</li>
                    <li>the name of the person will be the key to the jwt token decode and it and you would find a hash</li>
                    <li>in the decoded jwt associated with flag </li>
                    <li>the hash is a sha512 15 digit number bruteforce and post the data to http:// /flag5</li>
                    <li>post the data in the given form</li>
                    <li>{JSON.stringify({"data":"flag here",token:"access the authentication token"})}</li>
           
                   
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

export default Level5