import React, { useEffect, useState } from 'react'

function Layout() {
  const [tokenstate,setTokenstate]=useState(false)
  useEffect(()=>{
    let token=localStorage.getItem("token")
    if(token){
    setTokenstate(true)

    }
    else{
      setTokenstate(false)
    }
  },[])
  function logoutHandler(){
    localStorage.removeItem("token")
    window.location="/"
  }
  return (
    <div className='navbar-container'>
        <button className='button' onClick={logoutHandler}>{tokenstate?"signout":"login"}</button>
    </div>
  )
}

export default Layout