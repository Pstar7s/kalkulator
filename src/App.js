import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Fungsi untuk menangani input tombol
  const handlePress = (value) => {
    if (value === '=') {
      try {
        // Evaluasi ekspresi matematika
        setResult(eval(input).toString());
        // setResult('Miss U :) mandaa');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear input
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="result-container">
        <div className="result">{result}</div>
        <div className="input">{input}</div>
      </div>
      <div className="buttons-container">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((item) => (
          <button key={item} className="button" onClick={() => handlePress(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
