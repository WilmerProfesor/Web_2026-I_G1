import { useState } from 'react'

import './App.css'

function App() {
  const [edad2, SetEdad2] = useState("")
  const [edad, SetEdad] = useState(15)

  const handleClick = (dato) => {
    SetEdad(edad + dato)
  }

  return (
    <>    
      <div class='boton' onClick={() => handleClick(5)}>Counter: {edad}</div>
      <div class='boton' onClick={() => SetEdad2(edad2 + 1)}>Counter: {edad2}</div>
    </>
  )
}

export default App
