import React from 'react';
import { estadoJuego , verificarEstadoJuego } from '../estadoJuego';
import { jugarBot } from '../logicaBot';
import { registrarScore } from '../Common/SesionHelper';

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

export const useTateti = jugador => {
  const [tablero, setTablero] = React.useState(defaultTablero());
  const [bot, setBot] = React.useState({ id: 'bot_1', nombre: 'Fort-bot', marca: 'o'});
  const [estadoGlobal, setEstadoGlobal] = React.useState({ estado: estadoJuego.continua, ganador: '', rows: []});
  const [mensaje, setMensaje] = React.useState('');

  React.useEffect(() => {

    const getNombre = marca => bot.marca === marca ? bot : jugador;

    if (estadoGlobal.estado === estadoJuego.terminado) {
      const ganador = getNombre(estadoGlobal.ganador);
      setMensaje(`El ganador es: ${ganador.nombre}`)
      registrarScore(ganador.id === jugador.id ? 'victoria' : 'derrota');
    } else if (estadoGlobal.estado === estadoJuego.empate) {
      setMensaje('Hay un empate');
      registrarScore('empate');
    } else {
      setMensaje('');
    }
  }, [estadoGlobal, bot, jugador])

  const jugar = (fila, col) => {

    let resultado = verificarEstadoJuego(tablero);
    if (resultado.estado !== estadoJuego.continua) return '';

    let tempTablero = tablero.filter(i => !(i.fila === fila && i.col === col));
    tempTablero.push({ fila, col, marca: jugador.marca});

    resultado = verificarEstadoJuego(tempTablero);
    if (resultado.estado !== estadoJuego.continua) {
      setTablero(tempTablero);
      setEstadoGlobal(resultado);
      return;
    }
    
    const botItem = jugarBot(bot.marca, tempTablero);
    tempTablero = tempTablero.filter(i => !(i.fila === botItem.fila && i.col === botItem.col));
    tempTablero.push(botItem);

    setTablero(tempTablero);

    resultado = verificarEstadoJuego(tempTablero);
    if (resultado.estado !== estadoJuego.continua) {
      setEstadoGlobal(resultado);
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
    setEstadoGlobal({ estado: estadoJuego.continua, ganador: '', rows: []});
    setTablero(defaultTablero());
  }

  return {  estadoGlobal, reiniciar, tablero, fixedOrder, jugar, mensaje  }
};