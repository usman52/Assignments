import './calculator.css';
import React, { useRef, useState } from 'react';

function Calculator() {
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');
  const value = {setResult1,setResult2,setResult3};
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);

  const handleAddition = () => {
    const num1 = Number(Ref1.current.value);
    const num2 = Number(Ref2.current.value);
    setResult1(num1 + num2);
  };

  const handleSubtraction = () => {
    const num1 = Number(Ref1.current.value);
    const num2 = Number(Ref2.current.value);
    setResult2(num1 - num2);
  };

  const handleDivision = () => {
    const num1 = Number(Ref1.current.value);
    const num2 = Number(Ref2.current.value);
    setResult3(num1 / num2);
  };

  return (
    <div>
      <h1></h1>
      <input type="text" ref={Ref1} />
      <input type="text" ref={Ref2} />
      <br />
      <button onClick={handleAddition}>ADD</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleDivision}>Division</button>
      <br />
      <div className='box'>
      <h2>sum is: {result1}</h2>
      <h2>Subtraction is: {result2}</h2>
      <h2>Devision is: {result3}</h2>
      </div>
    </div>
  );
}

export default Calculator;