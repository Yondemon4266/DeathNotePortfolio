import React from 'react'
import previous from './img/previous.png'

export default function ForthPage({navigatePages}) {
  return (
    <div className="first-page">
      <h3 className='h3-left'>Forth Page</h3>
      <img src={previous} alt="previous" width="28px" height="28px" className='previous' onClick={navigatePages.previousPages}/>
      <div className="content-first-page">
        
      </div>

    </div>
  )
}
