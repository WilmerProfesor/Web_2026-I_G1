import {useState} from 'react'
import './Calculator.css'

const Calculator = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className='Calculator'>
        <input type="number" value={value1} onChange={(e) => setValue1(Number(e.target.value))} />
        <input type="number" value={value2} onChange={(e) => setValue2(Number(e.target.value))} />
        <button onClick={() => setResult(value1 + value2)}>Sumar</button>
        <button onClick={() => setResult(value1 - value2)}>Restar</button>
        <button onClick={() => setResult(value1 * value2)}>Multiplicar</button>
        <button onClick={() => setResult(value1 / value2)}>Dividir</button>
        <h2>= {result.toFixed(2)}</h2>
    </div>
  )
}

export default Calculator