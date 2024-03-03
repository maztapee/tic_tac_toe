import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  function Square({value, clickSquare}){
  
    return (
    <button className="square" onClick={clickSquare}> 
    {value} 
    </button>
    );
  };

  function Board(xIsNext, squares, onPlay) {

    function handleClick(i) {
      if(squares[i] || calculateWinner(squares)){
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
       onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner){
      status = "Winner: " + winner + "!";
      } else {
        status = "Next player: " + (xIsNext ? "X":"O");
        }

    return ( 
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} clickSquare={() => handleClick(0)}/>
        <Square value={squares[1]} clickSquare={() => handleClick(1)}/>
        <Square value={squares[2]} clickSquare={() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} clickSquare={() => handleClick(3)}/>
        <Square value={squares[4]} clickSquare={() => handleClick(4)}/>
        <Square value={squares[5]} clickSquare={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} clickSquare={() => handleClick(6)}/>
        <Square value={squares[7]} clickSquare={() => handleClick(7)}/>
        <Square value={squares[8]} clickSquare={() => handleClick(8)}/>
      </div>

    </>
    );
  }

  function calculateWinner(squares){
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

function Game(){
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history [history.length - 1];

  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  function jumpTo(nextMove){
    //TODO
  }

const moves = history.map((squares, move)=> {
  let description;
  if (move > 0){
    description = "Go to move #" + move;
  }else{
    description = "Go to Game Start";
  }
  return (
   <li key={move}>
    <button onClick={()=> jumpTo(move)}> {description} </button>
   </li> 
  );
});

  return ( 
    <>
      <div className='game-board'> 
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div> 
    </>
        
  );
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First React App Remastering the Tic-Tac-Toe Demo.
        </p>
        <div className="game">
          < Game/>
        </div>
      </header>
    </div>
  );
}

export default App;
