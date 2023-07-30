import React from 'react'
import back from "./img/back.png"
import logo from "./img/logo.png"
import light from "./img/light.png"

export default function CoverSide({navigatePages}) {

  return (
    <div className="cover-side">
      <img src={back} alt="back" width="40px" height="40px" className='back1' onClick={navigatePages.previousPages}/>
        <div className="content-cover-side">
            <img src={logo} alt="logo" className='logo'/>
            <img src={light} alt="light" className='light' />
            <h3>Ali's Portfolio</h3>
            <h6>How to use it</h6>
            <p>Pour fermer le Death Note cliquez sur
               <img src={back} alt="back2" className='back2' onClick={navigatePages.previousPages}/>
            </p>
            
        </div>
    </div>
  )
}
