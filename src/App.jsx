import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('')

  const press = (value) => {
    if (display === 'Error') {
      setDisplay(value)
    } else {
      setDisplay((prev) => prev + value)
    }
  }

  const clear = () => {
    setDisplay('')
  }

  const calculate = () => {
    try {
      if (!display) return

      const expression = display.replace(/÷/g, '/')

      const result = Function(
        '"use strict"; return (' + expression + ')'
      )()

      setDisplay(String(result))
    } catch {
      setDisplay('Error')
    }
  }

  return (
    <div className="calculator-container">

      <div className="pokeball"></div>

      <div className="calculator-title">
        Calculator of Ashton Martin Zablan - DA3A
      </div>

      <div className="calculator">

        <div className="display">
          {display || '0'}
        </div>

        <div className="buttons">

          <button onClick={() => press('7')}>7</button>
          <button onClick={() => press('8')}>8</button>
          <button onClick={() => press('9')}>9</button>
          <button className="operator" onClick={() => press('÷')}>÷</button>

          <button onClick={() => press('4')}>4</button>
          <button onClick={() => press('5')}>5</button>
          <button onClick={() => press('6')}>6</button>
          <button className="operator" onClick={() => press('*')}>*</button>

          <button onClick={() => press('1')}>1</button>
          <button onClick={() => press('2')}>2</button>
          <button onClick={() => press('3')}>3</button>
          <button className="operator" onClick={() => press('-')}>-</button>

          <button className="clear" onClick={clear}>CLR</button>
          <button onClick={() => press('0')}>0</button>
          <button className="equals" onClick={calculate}>=</button>
          <button className="operator" onClick={() => press('+')}>+</button>

        </div>
      </div>

    </div>
  )
}

export default App