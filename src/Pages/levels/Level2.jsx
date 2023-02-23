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
        let res=await axios.post("http://localhost:2000/level2",{
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
            <div id='level-heading'>LEVEL2</div>
            <div className='list-container'>
                <ul>
                    <li>you are free to use any resource that you want</li>
                    <li>there was a philosopher empereror who followed stoicism</li>
                    <li>After his death his son assumed the throne and he was considered cruel</li>
                    <li>take the smallcase form of the sons name and encode it in base 64</li>
                    <li>submit the flag</li>
                    
                    <li>if you think you have found the number submit it in the input box and you 
                        would be notified of results immediately
                    </li>

                </ul>
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