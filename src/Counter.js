import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p id="counter-value">{counter}</p>
      <button id="inc-btn" onClick={() => setCounter(c => c+1)}>increasement</button>
      <button id="dec-btn" onClick={() => setCounter(c => c-1)}>decreasement</button>
    </>
  )
}

export default Counter