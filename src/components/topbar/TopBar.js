import React from 'react'
import './topbar.css'
import Buttons from '../buttons/Buttons'

function TopBar() {
  return (
    <>
    <div className='topBarContainer'>
            <h4 className='topBarTitle'>Main metrics</h4>
            <div className='topBarButton'>
            <Buttons />
            </div>      
    </div>
    
     </>
  )
}

export default TopBar