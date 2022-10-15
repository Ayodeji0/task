import './metrics.css'

function Metrics(){
    return(
        <>
        <div>
  <h4>Main Metrics</h4>
  <div className='metrics'>
    {/* rectangle */}
  </div>
 
  <div className='subheading'>
        <div>
            <h3>Errors:0,12%</h3>
            <span>Average:0,11</span>
        </div>
        <div>
        <h3>Zeros:5,12%</h3>
            <span>Average:0,11</span>
        </div>
        <div>
        <h3>Timeouts:5,12%</h3>
        <span>Average:0,11</span>
        </div>
    </div>
    </div>
    <div>
        {/* rectangle line */}
    </div>
    <div>
        {/*  to me moved to a different components */}
        <div>
            <h5>Error 500: 1 256</h5>
        </div>
        <div>
        <h5>Error 501: 800</h5>
        </div>
        <div>
        <h5>Error 502: 650</h5>
        </div>
        <div>
        <h5>other:330</h5>
        </div>
    </div>
    </> 
    )
}

export default Metrics