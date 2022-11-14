import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Lists from './lists';
import MouseCursor from './useEffects';
import Product from './product';


function App() {
  //useState hook its a function
  const [count, setCount] = useState(0)
  const handleChange = ()=>{
    setCount(count +1)
    //updateter function
    setCount((prevCount)=>(prevCount +1))
    setCount((prevCount)=>(prevCount +1))
  }

  return (
    <div className="App">
      {/* <h1>{count}</h1>
      <button onClick={handleChange} >Click</button> */}
      {/* <Lists></Lists> */}
      {/* <MouseCursor></MouseCursor> */}
      <Product/>
    </div>
  );
}

export default App;
