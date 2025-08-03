import React, {useState} from 'react';
import './Calculator.css';

function Calculator() {

    const [display, setDisplay] = useState(0);
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [prev] = useState('');
    const [operator, setOperator] = useState('');

    const handleButtonClick = (value) => {
        if (!isNaN(value) || value === '.') {
            setCurrentInput((prev) => prev + value);
            setDisplay((prev === '0' ? value : prev + value));
        } else if (['+', '-', '*', '/', '√'].includes(value)) {
            setOperator(value);
            setPreviousInput(currentInput);
            setCurrentInput('');
            setDisplay(prev + value);
        } else if (value === '=') {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            let result = 0;

        switch(operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            default: result = 'Error';
        }

        setDisplay(result.toString());
        setPreviousInput(result.toString());

        setPreviousInput('');
        setOperator('');

        } else if (value === 'C') {
            setDisplay(0);
            setCurrentInput('');
            setPreviousInput('');
            setOperator('');
        } else if (value === '+/-') {
            const negated = currentInput ? parseFloat(currentInput) * -1 : 0;
            setCurrentInput(negated.toString());
            setDisplay(negated.toString());
        } else if (value === '%') {
            const percent = currentInput ? parseFloat(currentInput) / 100 : 0;
            setCurrentInput(percent.toString());
            setDisplay(percent.toString());
        }
    };

    return (
        <>
    <div className="calculatorFrame">
        <p id="numberDisplay">{display}</p>
        <div className="buttons">
        <button value="C" onClick={() => handleButtonClick('C')}>C</button>
        <button id="add-subtract" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button id="percent" onClick={() => handleButtonClick('%')}>%</button>
        <button id="divide" onClick={() => handleButtonClick('/')}>/</button>
        <button id="seven" onClick={() => handleButtonClick(7)}>7</button>
        <button id="eight" onClick={() => handleButtonClick(8)}>8</button>
        <button id="nine" onClick={() => handleButtonClick(9)}>9</button>
        <button id="multiply" onClick={() => handleButtonClick('*')}>*</button>
        <button id="four" onClick={() => handleButtonClick(4)}>4</button>
        <button id="five" onClick={() => handleButtonClick(5)}>5</button>
        <button id="six" onClick={() => handleButtonClick(6)}>6</button>
        <button id="subtract" onClick={() => handleButtonClick('-')}>-</button>
        <button id="one" onClick={() => handleButtonClick(1)}>1</button>
        <button id="two" onClick={() => handleButtonClick(2)}>2</button>
        <button id="three" onClick={() => handleButtonClick(3)}>3</button>
        <button id="addition" onClick={() => handleButtonClick('+')}>+</button>
        <button id="zero" onClick={() => handleButtonClick(0)}>0</button>
        <button id="decimal" onClick={() => handleButtonClick('.')}>.</button>
        <button id="equalsBtn" onClick={() => handleButtonClick('=')}>=</button>
        </div>
        </div>
        </>
    );
}

export default Calculator;
