import React from 'react'
import './nextone.css'
import bun from '../asset/bg-header-sqi-1.png'
function Nextone() {
  return (
    <div className='container'>
<div className='next'>
    <h1>Study to become a global talent</h1>
    <h5>Learn new tech skills using a world-class 
        curriculum from top industry experts in an accredited institution.</h5>
        <button className='start'>Start Now</button>
</div>
<div className='image'>
<img src={bun} alt=""/>
</div>

    </div>
  )
}

export default Nextone