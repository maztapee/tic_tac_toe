import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Square ({value}){
  return (
    <>
    <div className='square-row'>
      <button className='squares'> {value} </button>
      <button className='squares'> {value} </button>
      <button className='squares'> {value} </button>
    </div>
    </>
  )
};

function Board (){
  return(
    <>
    <div className='square-row-box'>
      < Square />
    </div>

    <div className='square-row-box'>
      < Square />
    </div>

    <div className='square-row-box'>
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
        {/* TODO-->  
          1. Add board here 
          2. Make board responsive to clicks
          */}
      </div>
  </>
  
  )
};
