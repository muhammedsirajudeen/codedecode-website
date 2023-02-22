import React, { useEffect } from 'react'
import './stylesheets/Home.css'
import Logo from '../cicada1.jpg'
import roadmap from '../roadmap.png'
import animator from '../Helper/animator'
import flag from '../flag.png'
import axios from 'axios'
import levelUpdater from '../Helper/levelUpdater'
function Home() {
   
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
                levelUpdater(level)
            
              }
          }
          verifier()
    },[])
    animator()
    setTimeout(()=>{
        document.querySelector(".hidden").className="white-box-container"
    },1000)
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
        <div className='level-container'>
            <div className='level-main-heading'>LEVELS</div>
            <div className='sub-level-container' id='level1'>
                
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 1</div>
                <a href='/level1' id='links'>solve level 1</a>
            </div>
            
            <div className='white-line' id='white-line-one'></div>

            <div className='sub-level-container' id='level2'>
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 2</div>
                <a href='/level1' id='links'>solve level 2</a>
            </div>

            <div className='white-line' id='white-line-two'></div>
            
            <div className='sub-level-container' id='level3' >
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 3</div>
                <a href='/level1' id='links'>solve level 3</a>
            </div>

            <div className='white-line' id='white-line-three'></div>
            
            <div className='sub-level-container' id='level4'>
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 4</div>
                <a href='/level1' id='links'>solve level 4</a>
            </div>

            <div className='white-line' id='white-line-four'></div>

            <div className='sub-level-container' id='level5'>
                <img src={flag} alt='loading' className='flag-image'/>
                <div className='level-heading'>LEVEL 5</div>
                <a href='/level1' id='links'>solve level 5</a>
            </div>
        </div>
    </div>
    
  )
}

export default Home