import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('');
  const [isNegative, setIsNegative] = useState(false);
  const [storedNumber, setStoredNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleClear = () => { // Clears the screen
    setNumber('');
    setIsNegative(false);
    setStoredNumber('');
    setOperation('');
  }

  const handleSignChange = (num) => { // Handles changing between negative and positive numbers
    if (number !== '0' && !isNegative) {
      setNumber("-" + number);
      setIsNegative(true);
    }
    else if (number !== '0' && isNegative) {
      setNumber(number.slice(1));
      setIsNegative(false);
    }
  }

  const handleAddNumber = (num) => { //Adds a number to the screen
    setNumber(number + num.toString());
  }

  const handleOperation = (num, symbol) => { // Handles accepting the operation of choice and storing the current number for the calculaion
    setStoredNumber(num);
    setNumber('');
    switch(symbol) {
      case '+':
        setOperation('+');
        break;
      case '-':
        setOperation('-');
        break;
      case '*':
        setOperation('*');
        break;
      case '/':
        setOperation('/');
        break;
    }
  }

  const handleCalculation = (num) => { // Takes the stored number and current number then performs the appropriate operation to display on screen
    let equals;
    switch(operation) {
      case '+':
        equals = (parseFloat(storedNumber) + parseFloat(num)).toString();
        setNumber(equals);
        setStoredNumber(equals);
        break;
      case '-':
        equals = (parseFloat(storedNumber) - parseFloat(num)).toString();
        setNumber(equals);
        setStoredNumber(equals);
        break;
      case '*':
        equals = (parseFloat(storedNumber) * parseFloat(num)).toString();
        setNumber(equals);
        setStoredNumber(equals);
        break;
      case '/':
        equals = (parseFloat(storedNumber) / parseFloat(num)).toString();
        setNumber(equals);
        setStoredNumber(equals);
        break;
      default:
        break;
    }
  }

  const handlePercent = (num) => { // Divides number by 100
    setNumber((parseFloat(num) / 100).toString());
  }

  const handleDecimal = () => { // Adds a decimal place to number
    if (!number.includes(".")) {
      setNumber(number + ".");
    }
  }

  return (
    <div className='calc-container'>
      <center className='display'>
        <p className='display-text'>{number}</p>
      </center>
      <center>
        <button className='calc-button' onClick={handleClear}>AC</button>
        <button className='calc-button' onClick={() => handleSignChange(number)}>+/-</button>
        <button className='calc-button' onClick={() => handlePercent(number)}>%</button>
        <button className='calc-button orange-button' onClick={() => handleOperation(number, '/')}>&#247;</button>
      </center>
      <center>
        <button className='calc-button' onClick={() => handleAddNumber('7')}>7</button>
        <button className='calc-button' onClick={() => handleAddNumber('8')}>8</button>
        <button className='calc-button' onClick={() => handleAddNumber('9')}>9</button>
        <button className='calc-button orange-button' onClick={() => handleOperation(number, '*')}>x</button>
      </center>
      <center>
        <button className='calc-button' onClick={() => handleAddNumber('4')}>4</button>
        <button className='calc-button' onClick={() => handleAddNumber('5')}>5</button>
        <button className='calc-button' onClick={() => handleAddNumber('6')}>6</button>
        <button className='calc-button orange-button' onClick={() => handleOperation(number, '-')}>-</button>
      </center>
      <center>
        <button className='calc-button' onClick={() => handleAddNumber('1')}>1</button>
        <button className='calc-button' onClick={() => handleAddNumber('2')}>2</button>
        <button className='calc-button' onClick={() => handleAddNumber('3')}>3</button>
        <button className='calc-button orange-button' onClick={() => handleOperation(number, '+')}>+</button>
      </center>
      <center>
        <button className='calc-button big-button' onClick={() => handleAddNumber('0')}>0</button>
        <button className='calc-button' onClick={handleDecimal}>.</button>
        <button className='calc-button orange-button' onClick={() => handleCalculation(number)}>=</button>
      </center>
    </div>
  )
}

export default App
