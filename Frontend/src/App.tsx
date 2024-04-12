import { useState } from "react"

function App() {

  const[count, setCount] = useState(0); 

  const increase = () => {
    setCount((count) => {
      return count + 1;
    })
  }

  return (
    <>
    <button onClick={increase}>
      Increase
    </button>
    <p>
      {count}
    </p>
    </>
  )
}

export default App
