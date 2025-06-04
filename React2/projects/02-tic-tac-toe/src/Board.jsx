import confetty from 'canvas-confetti';

import { useState } from 'react';

import { Square } from './components/Square';
import { WinnerModal } from './components/Winner';
import { TURNS, WINNER_COMBOS } from '../logic/globalConstants';

import './App.css'

function Board() {

  //const board = /*Array(9).fill(null);*/["X","O","X","X","O","X","X","O","X"];
  const [board, setBoard] = useState(() => {
    const localStorage = window.localStorage.getItem('board');
    return localStorage? JSON.parse(localStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turno');
    return turnLocalStorage? turnLocalStorage : TURNS.X;
  });
  
  //el ganador por defecto esta a null, seolo cambia si encontramos un ganador
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      const[a,b,c] = combo;

      if(
        boardToCheck [a] &&
        boardToCheck [a] === boardToCheck[b] &&
        boardToCheck [a] === boardToCheck[c]
      ){
        return boardToCheck [a]
      }
    }
    
    // si no hay ganador
    return null
  }

  const updateBoard = (index) => {
    // comprobacion para que no añada un valor sobre una casilla que ya tenga un valor
    if(board[index] || winner) return 

    //copiamos el array original en una nueva variable, de sta manera no modificamos el componente
    const newBoard = [...board];

    //logica de actualizacion de tablero
    newBoard[index] = turn;
    setBoard(newBoard);

    // cambiar turno
    const newTurn = turn === TURNS.X? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // guardar partida
    window.localStorage.setItem('board',JSON.stringify(newBoard));
    window.localStorage.setItem('turno', newTurn);

    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetty();
      setWinner(newWinner);
    }
    else if (checkEndGame(newBoard)){
      setWinner(false);
    }
  }

  // const handleClick = (index) => {
  //   updateBoard(index);
  // }

  // dejamos nuestro estados con los valores iniciales, de esta manera podemos reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turno');
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  }
  

  return (
    <>
      <div className='board'>
        <h1>Tic-Tac-Toe</h1>
        <button onClick={resetGame}>Reiniciar Tablero</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square 
                  key = {index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>
        
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>


        <WinnerModal winner={winner} resetGame={resetGame}/>
      </div>
      

    </>
  )
}

export default Board
