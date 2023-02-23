import React, { useEffect, useRef, useState } from 'react'
import './stylesheets/Home.css'
import Logo from '../cicada1.jpg'
import roadmap from '../roadmap.png'
import animator from '../Helper/animator'
import flag from '../flag.png'
import axios from 'axios'
import levelUpdater from '../Helper/levelUpdater'
function Home() {
    const leveldata=useRef({})
    const levelone=useRef()
    const leveltwo=useRef()
    const levelthree=useRef()
    const levelfour=useRef()
    const levelfive=useRef()
    useEffect(()=>{
        async function verifier(){
            let token=localStorage.getItem("token")
            let res=await axios.post("http://localhost:2000/verifier",{
              token:token
            })
            console.log(res.data)
            if(res.data.status!==200){
              window.location="/"
            }
            //also fetch the data about the levels pending
            let progress=await axios.post("http://localhost:2000/progress",{
                token:token
              })
              if(progress.data.data===null){
                alert("please try refreshing the page or sign out and sign in again")
              }else{
                let level=progress.data.data
                leveldata.current=level
         
                
            
              }
          }
          verifier()
    },[])
    animator()
    setTimeout(()=>{
        document.querySelector(".hidden").className="white-box-container"
    },1000)
    async function tester(){
        let token=localStorage.getItem("token")
        console.log(token)
        let progress=await axios.post("http://localhost:2000/progress",{
            token:token
          })
          if(progress.data.data===null){
            alert("please try refreshing the page or sign out and sign in again")
          }else{
            let level=progress.data.data
            console.log(level)
            if(level.level1==="success") levelone.current.style.backgroundColor="lightgreen"
            if(level.level2==="success") leveltwo.current.style.backgroundColor="lightgreen"
    
            if(level.level3==="success") levelthree.current.style.backgroundColor="lightgreen"
            if(level.level4==="success") levelfour.current.style.backgroundColor="lightgreen"
            if(level.level5==="success") levelfive.current.style.backgroundColor="lightgreen"
     
            
        
          }
        
     
    }
    tester()
    return (
    
    <div className='main-content-container'>
        <img src={Logo} alt='loading' className='image'/>
        <div className='text-container'>
        
        </div>
        <div className='hidden'>
            <img src={roadmap} alt='loading' className='roadmap-image'/>
            <div className='information-container'>
                <div className='info-heading'>
                    DECODE IT.
                </div>
                <div className='list-container'>
                    <ul className='list'>
                        <li>A code decoding that involves cracking hashes and encryption </li>
                        <li>Intricate knowledge of ssh,hashes</li>
                        <li>You could use any tool of your choice including chatgpt</li>
                        <li>A fully gamified code breaking competition </li>



                    </ul>
                </div>
            </div>
        </div>
        <div className='level-container '>
            <div className='level-main-heading'>LEVELS</div>
            <div className='sub-level-container' id='level1' ref={levelone}>
                
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 1 </div>
                <a href='/level1' id='links'>solve level 1</a>
            </div>
            
            <div className='white-line' id='white-line-one'></div>

            <div className='sub-level-container' id='level2' ref={leveltwo}>
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 2</div>
                <a href='/level2' id='links'>solve level 2</a>
            </div>

            <div className='white-line' id='white-line-two'></div>
            
            <div className='sub-level-container' id='level3' ref={levelthree} >
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 3</div>
                <a href='/level3' id='links'>solve level 3</a>
            </div>

            <div className='white-line' id='white-line-three'></div>
            
            <div className='sub-level-container' id='level4' ref={levelfour}>
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 4</div>
                <a href='/level4' id='links'>solve level 4</a>
            </div>

            <div className='white-line' id='white-line-four'></div>

            <div className='sub-level-container' id='level5' ref={levelfive}>
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 5</div>
                <a href='/level5' id='links'>solve level 5</a>
            </div>
        </div>
    </div>
    
  )
}

export default Home