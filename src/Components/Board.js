import React from 'react';

const Board = props => {
  const { selfColor, boardColor, opponentColor, reiniciar, tablero, estadoGlobal, jugar, fixedOrder } = props;
  debugger;
  return (
    <>
      <button style={{margin: '10px'}} onClick={reiniciar}>Reiniciar</button>
      <div className="game-board">
      {
        tablero.sort(fixedOrder).map(i => 
          <div 
            key={`item-tablero-${i.fila}-${i.col}`}
            className="box" 
            style={{backgroundColor: !!estadoGlobal.rows.find(r => r.col === i.col && r.fila === i.fila) ? boardColor : boardColor}}
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