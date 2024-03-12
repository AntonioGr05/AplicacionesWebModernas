import './App.css'
import { useState } from 'react'



function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)


  const sumar = () => {
    setResult(num1 + num2)
  }

  const restar = () => {
    setResult(num1 - num2)
  }

  const multiplicar = () => {
    setResult(num1 * num2)
  }

  const dividir = () => {
    setResult(num1 / num2)
  }

  const limpiar = () => {
    setNum1(0)
    setNum2(0)
    setResult(0)
  }



  return (
    <>
      
      <div className="container">
        <h1>Calculadora</h1>
        <div className="inputs">
          <input type="number" placeholder='Num1' onChange={e => setNum1(+e.target.value)}/>
          <input type="number" placeholder='Num1' onChange={e => setNum2(+e.target.value)}/>
        </div>
        <div className="operaciones">
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
          <button onClick={multiplicar}>Multiplicar</button>
          <button onClick={dividir}>Dividir</button>
        </div>
        <div className="resultado">
          <p>RESULTADO: {result}</p>
          <button onClick={limpiar}>Limpiar</button>
        </div>
      </div>

    </>
  )
}

export default App
