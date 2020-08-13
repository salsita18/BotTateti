import React from 'react';
import { estadoJuego } from './estadoJuego';
import './Tateti.css';
import { useTateti } from './CustomHooks/useTateti';
import Board from './Board';
import Score from './Score';

const Tateti = () => {
  const [jugador, setJugador] = React.useState({ id: 'jugador_1', nombre: 'Salsita', marca: 'x'});
  const [tab, setTab] = React.useState('jugar');

  const { estadoGlobal, reiniciar, tablero, fixedOrder, jugar, mensaje } = useTateti(jugador);

  return (
    <>
      { estadoGlobal.estado !== estadoJuego.continua && <span>{mensaje}</span> }
      <div style={{width: '100%'}}>
        <button onClick={() => setTab('jugar')}>Jugar</button>
        <button onClick={() => setTab('score')}>Estadisticas</button>
      </div>
      <div>
        <label>
          Nick:
          <input type='text' value={jugador.nombre} onChange={e => setJugador({...jugador, nombre: e.target.value})} />
        </label>
      </div>
      { tab === 'score' && <Score jugador={jugador}/> }
      { tab === 'jugar' &&
        <Board 
          reiniciar={reiniciar} 
          tablero={tablero} 
          estadoGlobal={estadoGlobal} 
          jugar={jugar} 
          fixedOrder={fixedOrder} 
        />
      }
    </>
  );
};

export default Tateti;