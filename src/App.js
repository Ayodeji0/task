import './App.css'
import MiddleDetails from './components/middleDetails/MiddleDetails';
import TopBar from './components/topbar/TopBar';
import Widgets from './components/widgets/Widgets';
import Bar from './components/Progress/ProgressBar';
function App() {
  return (
    <div className="app">
     <div className='app__body'>
      <div className='app__content'>
      <TopBar/>
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
