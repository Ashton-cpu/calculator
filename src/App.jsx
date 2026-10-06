import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('')

  const calculate = (first, second, op) => {
    const num1 = Number(first)
    const num2 = Number(second)

    switch (op) {
      case '+':
        return num1 + num2

      case '-':
        return num1 - num2

      case '*':
        return num1 * num2

      case '÷':
        return num2 === 0 ? 'Error' : num1 / num2

      default:
        return first
    }
  }

  const pressNumber = (number) => {
    if (!operator) {
      setFirstNumber((prev) => prev + number)
    } else {
      setSecondNumber((prev) => prev + number)
    }
  }

  const pressOperator = (newOperator) => {
    if (!firstNumber) return

    if (operator && secondNumber) {
      const result = calculate(firstNumber, secondNumber, operator)

      setFirstNumber(String(result))
      setSecondNumber('')
      setOperator(newOperator)
    } else {
      setOperator(newOperator)
    }
  }

  const clear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperator('')
  }

  let display = '0'

  if (operator && secondNumber) {
    display = calculate(firstNumber, secondNumber, operator)
  } else if (operator) {
    display = `${firstNumber} ${operator}`
  } else if (firstNumber) {
    display = firstNumber
  }

  return (
    <div className="calculator-container">

      <div className="pokeball"></div>

      <div className="calculator-title">
        Calculator of Ashton Martin Zablan - BSIT DA3A
      </div>

      <div className="calculator">

        <div className="display">
          {display}
        </div>

        <div className="buttons">

          <button onClick={() => pressNumber('7')}>7</button>
          <button onClick={() => pressNumber('8')}>8</button>
          <button onClick={() => pressNumber('9')}>9</button>
          <button
            className="operator"
            onClick={() => pressOperator('÷')}
          >
            ÷
          </button>

          <button onClick={() => pressNumber('4')}>4</button>
          <button onClick={() => pressNumber('5')}>5</button>
          <button onClick={() => pressNumber('6')}>6</button>
          <button
            className="operator"
            onClick={() => pressOperator('*')}
          >
            *
          </button>

          <button onClick={() => pressNumber('1')}>1</button>
          <button onClick={() => pressNumber('2')}>2</button>
          <button onClick={() => pressNumber('3')}>3</button>
          <button
            className="operator"
            onClick={() => pressOperator('-')}
          >
            -
          </button>

          <button className="clear" onClick={clear}>C</button>
          <button onClick={() => pressNumber('0')}>0</button>
          <div className="empty"></div>
          <button
            className="operator"
            onClick={() => pressOperator('+')}
          >
            +
          </button>

        </div>
      </div>

    </div>
  )
}

export default App