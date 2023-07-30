import React from 'react'
import next from './img/next.png'

export default function ThirdPage({navigatePages}) {
  return (
    <div className="page" id='page3'>
      <h3 className='h3-right'>Third Page</h3>
      <img src={next} alt="next" className='next' width='28px' height='28px' onClick={navigatePages.nextPages}/>
      <div className="content-page" id='content-page3'>
          <h1>Nothing to see here</h1>
      </div>

    </div>
  )
}
