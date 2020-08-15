import React from 'react';
import { Button } from '@material-ui/core';

const Board = props => {
  const { selfColor, boardColor, opponentColor, reiniciar, tablero, estadoGlobal, jugar, fixedOrder, jugador } = props;

  return (
    <>
      <Button 
        onClick={reiniciar} 
        variant='outlined'
        color='primary'
        style={{margin: '1em'}}
      >
      Reiniciar
      </Button>
      <div className='game-board'>
      {
        tablero.sort(fixedOrder).map(i => 
          <div 
            key={`item-tablero-${i.fila}-${i.col}`}
            className='box'
            style={{backgroundColor: !!estadoGlobal.rows.find(r => r.col === i.col && r.fila === i.fila) ? 
              estadoGlobal.ganador === jugador.marca ? selfColor
              : opponentColor
              : boardColor}}
            onClick={() => { if(!i.marca) jugar(i.fila, i.col) }}
          >
            {i.marca}
          </div>
        )
      }
      </div>
    </>
  );

};

export default Board;