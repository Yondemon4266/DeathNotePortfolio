import React from 'react'
import next from './img/next.png'

export default function FirstPage({navigatePages}) {

  return (
    <div className="first-page">
      <h3 className='h3-right'>First Page</h3>
      <img src={next} alt="next" className='next' width='28px' height='28px' onClick={navigatePages.nextPages}/>
      <div className="content-first-page">
        
      </div>

    </div>
  )
}
