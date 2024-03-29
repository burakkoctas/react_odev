import './App.css';
import { useState } from "react";
import IncButton from "./components/IncButton/IncButton";
function App() {
  const [numberClick,setNumberClick] = useState(0);
  const incNumber = () =>{
    setNumberClick(prev => prev+1 );
  }
  return (
    <div className="App">
      <div className='information'>
      <p>Donuts you've eaten:</p>  
      <p>{numberClick}</p>
      </div>
      <div className='inc_button'>
      <IncButton  eventClick={incNumber} ></IncButton>
      </div>
    </div>
  );
}

export default App;
