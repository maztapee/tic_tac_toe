import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Square (){
  const [value, setValues] = useState(null);
  function handleClick(){
    setValues('X');
  };
  return (
    <>
    <div className='square-row'>
      <button className='squares' onClick={handleClick}> {value} </button>
    </div>
    </>
  )
};

function Board (){
  return(
    <>
    <div className='square-row-box'>
      < Square />
      < Square />
      < Square />
    </div>

    <div className='square-row-box'>
      < Square />
      < Square />
      < Square />
    </div>

    <div className='square-row-box'>
      < Square />
      < Square />
      < Square />
    </div>
  </>
  )
};

// --------------------------------------ExPoRt ApP hErE--------------------------------------------------------------
export default function tic_tac_toe(){
  return(  
  <>
      <div className='react-logo'>
        <h1 className="title">My Tic Tac Toe Game</h1>
      </div>
      <img className="App-logo" src= {logo} alt="App-logo" />
      <div className='board-box'>
        <Board/>
      </div>
  </>
  
  )
};
