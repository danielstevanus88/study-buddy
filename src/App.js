import logo from './logo.svg';
import './App.css';

import RightScreen from './components/RightScreen';
import LeftScreen from './components/LeftScreen';


function App() {
  return (
    // Make a flex container where the left screen is for animation, and the right screen is for chat
    <div className="flex-container">
      <div className="left-screen">
        <LeftScreen/>
      </div>
      <div className="right-screen">
        <RightScreen/>
      </div>
    </div>
  );
}

export default App;
