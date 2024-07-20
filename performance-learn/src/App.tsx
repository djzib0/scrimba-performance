import { useState } from 'react';
import GrandParent from './components/GrandParent';
import Index from './strictMode/Index'
import Timer from './strictMode/Timer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    const [showTimer, setShowTimer] = useState(false)

  function toggleTimer() {
    setShowTimer(prev => !prev)
  }

    return (
        <div>
            {/* <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
            <h2>{count}</h2>
            <p>App component</p>
            <GrandParent count={count} />
            <GrandParent /> */}
            <Index />
            {/* <button className="button" onClick={toggleTimer}>{showTimer ? "Hide" : "Show"} Timer</button>
      {showTimer && */}
        {/* <Timer /> */}
      
        </div>
    )
}

export default App
