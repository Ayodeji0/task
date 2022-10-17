import React, {useState, useEffect} from 'react';
import './App.css'
import MiddleDetails from './components/middleDetails/MiddleDetails';
import TopBar from './components/topbar/TopBar';
import Widgets from './components/widgets/Widgets';
import Bar from './components/Progress/ProgressBar';
import _data from './data.json';




function App() {

  const [info, setInfo] = useState(_data)

  // console.log(Object.keys(info))

 const label = Object.keys(info)
  return (
    <div className="app">
     <div className='app__body'>
      <div className='app__content'>
      <TopBar label={label} info={info}/>
      <MiddleDetails/>
      <Bar/>
      <Widgets/>
      </div>
      
      <div>
      </div>
     </div>
    
    </div>
  );
}

export default App;
