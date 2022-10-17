import React from 'react'
import './widgets.css'
import {ReactComponent as Icons} from '../assets/icons.svg'
import {ReactComponent as Icon2} from '../assets/icon2.svg'
import {ReactComponent as Icon3} from '../assets/icon3.svg'


function Widgets() {
  return (
    <div className='widgetdetails'>
      <div className='widgetcContainer'>
       <div className='widgetContainertop'>
        <div className='widgetContentContainer'>
        <div className='widgetContainertopImage' >
            <div className='widgetIcons2'>
            <Icon2/>
            </div>
        </div>
        <div>
            <p>Search <span className='searchTag'>+5%</span></p>
            <p>2983, yesterday</p>
            <p className='searchParagraph'>27985 Last Friday</p>
        </div>
        </div>
        <div>
        <div className='widgetContainertopdescription'>
            <h6 className='widgetTitle'>Mobile Traffic 100%</h6>
            <span>Web Traffic 100%</span>
            <p className='widgetP'>You get 100% traffic on mobile and desktop device</p>
            <p className='widgetP2'>Help: <span>searches, Permission</span></p>
        </div>
       </div>
       </div>
       {/* <hr className='divider'/> */}

       <div className='widgetContainermiddle'>
        <div className='widgetMiddleContainer'>
        <div className='widgetContainermiddleImage' >
            <div className='widgetIcons'>
            <Icons/>
            </div>
        </div>
        <div>
            <p className='click'>Clicks <span className='clickTag'>-13%</span></p>
            <p>243 Yesterday</p>
            <p className='clickParagraph'>280 Last Friday</p>
        </div>
        </div>
        <div>
        <div className='widgetContainermiddledescription'>
        <h6 className='middleTitle'>CTR: 0,04%</h6>
            <p className='middleP'>Conversation from all searches to click on the devices</p>
            <p className='middleParagraph'> Help:<span>CTR, clicks</span></p>
        </div>
        {/* last container */}
       </div>
       </div>
       <div className='widgetContainerlast'>
        <div className='lastContentContainer'>
        <div className='widgetContainerlastImage'>
            <div className='widgetsIcon3'>
            <Icon3/>
            </div>
        </div>
        <div>
            <p>Sales</p>
            <p>24 Yesterday</p>
            <p className='salesParagraph'>24 Last Friday</p>
        </div>
        </div>
        <div>
        </div>
        <div className='widgetContainerlastdescription'>
        <h6 className='lastTitle'>STR: 6.2%</h6>
            <p className='lastP'>Avg.Check:8903</p>
            <p className='lastParagraph'>conversion from click to booking on all devices</p>
            <p className='extraLastParagraph'> Help:<span>STR, Bookings, Avg.Check</span></p>
        </div>
       
       </div>
      
       </div>
    </div>
  )
}

export default Widgets