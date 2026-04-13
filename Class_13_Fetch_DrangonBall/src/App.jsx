import { useState, useEffect } from 'react'
import './App.css'

import CardCharacter from './Components/CardCharacter/CardCharacter.jsx'

function App() {
  const [data, setData] = useState([{dato:"ksfhg"}])

  useEffect(() => {
    // Simulate an API call
    // const fetchData = async () => {
    //   const response = await fetch('https://dragonball-api.com/api/characters')
    //   const result = await response.json()
    //   setData(result)
    // }

    // fetchData()

    const apiData = ()=>fetch('https://dragonball-api.com/api/characters')
        .then(response => response.json())
        .then(data => setData(data.items));
    apiData();
  }, [])

  return (
    <>
      <p>{data ? data.length : 0} characters</p>
      {data && data.map((character) => (
        <CardCharacter key={character.id} image={character.image} name={character.name} description={character.description}  />
      ))}
    </>
  )
}

export default App
