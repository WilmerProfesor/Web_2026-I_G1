import React from 'react'
import './Age.css'

const Age = () => {
  return (
    <div className="Age">
        <h2>Edad</h2>
        <div className='ContainerAge'>
            <p className='ButtonAge'>-</p>
            <p>1</p>
            <p className='ButtonAge'>+</p>            
        </div>
    </div>
  )
}

export default Age