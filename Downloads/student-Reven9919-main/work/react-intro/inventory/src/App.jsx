import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {

  const [count, setCount] = useState(0);

  const reorder = () =>{
    setCount(5);
  }

  return (
    <div className='inventory'> 
      <span className='count'>Count : {count}</span>
      <button className='btn-plus' onClick={() => {setCount(count + 1)}}>+</button>
      <button className='btn-min' disabled = {count ==0 ? true :false} onClick={() => {setCount(count - 1)}}>-</button>
      {count == 0 ? <Reorder onReorder = {reorder}></Reorder>:""}
    </div>
  );
}


  

export default App;
