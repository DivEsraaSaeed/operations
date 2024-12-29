// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Add from './Components/Add'
import Multiply from './Components/Multiply'
import Divide from './Components/Divide'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Operations</h1>
      <Add />
      <Add />
      <Add />
      <Multiply />
      <Divide />
    </>
  )
}

export default App
