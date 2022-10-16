import React from "react";
import './progress.css'

function Bar(){
  return(
    <>
    <div className="progressContainer">
    <div className="progressBar1"></div>
    <div className="progressBar2"></div>
    <div className="progressBar3"></div>
    <div className="progressBar4"></div>
    </div>
    <div className="others">
      <div>
        <p className="otherspara">Error: 500 1256</p>
      </div>
      <div><p className="otherspara">Error: 501 800</p></div>
      <div><p className="otherspara">Error: 502 650</p></div>
      <div><p className="otherspara">other:300</p></div>
    </div>
    </>
   
  )
}
export default Bar





