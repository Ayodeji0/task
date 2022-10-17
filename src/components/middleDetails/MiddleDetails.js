import React from 'react'
import './middledetails.css'
import {ReactComponent as Rectangle} from '../assets/rectangle.svg'


function MiddleDetails() {
  return (
    <div className='middledetails'>
        <div className='middleWrapper'>
            <div className='middleLeft'>
                <h6 className="middlehead">Errors: 0, 12%</h6>
                <p className='middleLeftPara'>Average:0,11%</p>
            </div>
            <div className='middleCenter'> 
            <h6 className="middlehead">Zeroes: 0, 12%</h6>
                <p className='middleLeftPara'>Average:0,11%</p></div>
            <div className='middleRight'> 
            <h6 className="middlehead">Timeouts: 0, 12%</h6>
                <p className='middleLeftPara'>Average:0,11%</p>
                </div>
        </div>
        {/* <Rectangle /> */}
        <div>
          
     
       
      </div>
        
    </div>
  )
}

export default MiddleDetails