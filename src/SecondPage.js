import React from 'react'
import previous from './img/previous.png'

export default function SecondPage({navigatePages}) {
  return (
    <div className="page" id='page2'>
      <h3 className='h3-left'>Second Page</h3>
      <img src={previous} alt="previous" width="28px" height="28px" className='previous' onClick={navigatePages.previousPages}/>
        <div className="contact">
            <div className="contact-container">
            <h4>Contact </h4>
            <form action="">
              <div className="inputs">
              <label htmlFor="name"><p>Nom</p><input type="text" name="name" id="name"  /></label> 
              <label htmlFor="email"><p>Email</p> <input type="email" name="email" id="email" /></label>
              <label htmlFor="message"><textarea name="message" id="message" cols="50" rows="5" placeholder='Votre message'></textarea></label>
              </div>
            </form>
            </div>
            
          </div>
      

    </div>
  )
}
