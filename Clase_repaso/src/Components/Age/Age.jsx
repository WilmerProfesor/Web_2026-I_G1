import {useState} from 'react'
import './Age.css'

const Age = () => {
    const [value, setValue] = useState(18);

    const handleAdd = () => {
        setValue(value + 1);
    }

    const handleSubtract = () => {
        setValue(value - 1);
    }
  
    return (
    <div className="Age">
        <h2>Edad</h2>
        <div className='ContainerAge'>
            <p  className='ButtonAge' onClick={handleSubtract}>-</p>
            <p>{value}</p>
            <input type="number" />
            <p className='ButtonAge' onClick={handleAdd}>+</p>            
        </div>
    </div>
  )
}

export default Age