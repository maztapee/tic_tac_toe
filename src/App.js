import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  function Square({value}){
    function clickSquare(){
      setValue('X');
    };
    const [value, setValue] = useState(null);
    return <button className="square" onClick={clickSquare}> {value} </button>
  };

  function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    return <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>

    </>
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First React App Remastering the Tic-Tac-Toe Demo.
        </p>
        <div className="board">
          < Board/>
        </div>
      </header>
    </div>
  );
}

export default App;
