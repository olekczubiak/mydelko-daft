import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleOnClick = () => {
    alert("hello react!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Co tu będzie?!
        </p>
        <button
          className="my-button"
          onClick={handleOnClick}
        >
          Click
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kliknij w repo!
        </a>
      </header>
    </div>
  );
}

export default App;
