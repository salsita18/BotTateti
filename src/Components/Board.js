import React from 'react';

const Board = props => {
  const { reiniciar, tablero, estadoGlobal, jugar, fixedOrder } = props;

  return (
    <>
      <button style={{margin: '10px'}} onClick={reiniciar}>Reiniciar</button>
      <div class="game-board">
      {
        tablero.sort(fixedOrder).map(i => 
          <div 
            class="box" 
            style={{backgroundColor: !!estadoGlobal.rows.find(r => r.col === i.col && r.fila === i.fila) ? '#ffe515' : '#095070' }}
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