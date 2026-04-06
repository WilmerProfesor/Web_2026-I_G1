import { useState } from 'react'
import CardTest from './Components/CardTest/CardTest'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola Mundo!</h1>     
      <CardTest />
    </>
  )
}

export default App
