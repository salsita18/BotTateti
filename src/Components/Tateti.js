import React, { useEffect } from 'react';
import { estadoJuego , verificarEstadoJuego } from './estadoJuego';
import { jugarBot } from './logicaBot';
import './Tateti.css';

const tableroStyle = {
  width: '30em',
  height: '30em',
  border: 'solid #ddd',
  margin: 'auto',
  marginTop: '5em'
};

const buttonStyle = {
  width: '10em',
  height: '10em'
};

const defaultTablero = () => 
 [
  { fila: 0, col: 0, marca: '' },
  { fila: 0, col: 1, marca: '' },
  { fila: 0, col: 2, marca: '' },
  { fila: 1, col: 0, marca: '' },
  { fila: 1, col: 1, marca: '' },
  { fila: 1, col: 2, marca: '' },
  { fila: 2, col: 0, marca: '' },
  { fila: 2, col: 1, marca: '' },
  { fila: 2, col: 2, marca: '' },
];

const Tateti = props => {
  const [tablero, setTablero] = React.useState(defaultTablero());
  const [jugador, setJugador] = React.useState({ id: 'jugador_1', nombre: 'Salsita', marca: 'x'});
  const [bot, setBot] = React.useState({ id: 'bot_1', nombre: 'Fort-bot', marca: 'o'});
  const [estadoGlobal, setEstadoGlobal] = React.useState(estadoJuego.continua);

  React.useEffect(() => {
    if (estadoGlobal === estadoJuego.terminado) {

    }
  }, [estadoGlobal])

  const jugar = (fila, col) => {

    let estado = verificarEstadoJuego(tablero);
    if (estado !== estadoJuego.continua) return '';

    let tempTablero = tablero.filter(i => !(i.fila === fila && i.col === col));
    tempTablero.push({ fila, col, marca: jugador.marca});

    estado = verificarEstadoJuego(tempTablero);
    if (estado !== estadoJuego.continua) {
      setTablero(tempTablero);
      setEstadoGlobal(estado);
      return;
    }
    
    const botItem = jugarBot(bot.marca, tempTablero);
    tempTablero = tempTablero.filter(i => !(i.fila === botItem.fila && i.col === botItem.col));
    tempTablero.push(botItem);

    setTablero(tempTablero);

    estado = verificarEstadoJuego(tempTablero);
    if (estado !== estadoJuego.continua) {
      setEstadoGlobal(estado);
      return;
    }

  };

  const fixedOrder = (a, b) => {
    const filaA = a.fila;
    const filaB = b.fila;
    const colA = a.col;
    const colB = b.col;

    if (filaA < filaB) return -1
    if (filaA > filaB) return 1;

    return colA < colB ? -1 : 1
  }

  const reiniciar = () => {
    setEstadoGlobal(estadoJuego.continua);
    setTablero(defaultTablero());
  }

  return (
    <>
      { estadoGlobal !== estadoJuego.continua && <span>{estadoGlobal}!</span> }
      <button style={{margin: '10px'}} onClick={reiniciar}>Reiniciar</button>
      <div class="game-board">
      {
        tablero.sort(fixedOrder).map(i => 
          <div class="box" onClick={() => jugar(i.fila, i.col)}>{i.marca}</div>
        )
      }
    </div>
    </>
  );
};

export default Tateti;