import {useEffect, useState} from 'react'
import './ApiSimpsons.css'

const ApiSimpsons = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://thesimpsonsapi.com/api/characters')
        .then(response => response.json())
        // .then(data => console.log(data.results));
        .then(data => setCharacters(data.results))
        .catch(error => console.error(error+"Error fetching data"));        
    }, [])

  return (
    <div>
        <h2>ApiSimpsons</h2>
        <div className='SimpsonsContainer'>
            {characters.length > 0 ? (
                characters.map((character) => ( 
                    <div className='card' key={character.id}>
                        <h3>{character.name}</h3> 
                        <img src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} alt={character.name} />
                    </div>
                ))
            ) : (
                <p>Cargando los personajes...</p>
            )}
        </div>

    </div>
  )
}

export default ApiSimpsons