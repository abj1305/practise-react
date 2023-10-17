import React , {useState} from 'react';

function useCounter () {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count+1);
  const handleDecrement = () => setCount(count-1);

  return {
    count, 
    handleIncrement, 
    handleDecrement
  }
}

function Display () {
  const {count, handleIncrement, handleDecrement} = useCounter();
  return(
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
}

function App () {
  
  return (
    <div>
      <Display/>
     <Display/>
    </div>
    
  );
  
}

export default App;
