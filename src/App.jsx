import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MemeGenerator from './MemeGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MemeGenerator/>
    </div>
  )
}

export default App
