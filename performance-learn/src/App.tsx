import { useState } from 'react';
import GrandParent from './components/GrandParent';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div>
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
            <h2>{count}</h2>
            <p>App component</p>
            <GrandParent count={count} />
            <GrandParent />
        </div>
    )
}

export default App
