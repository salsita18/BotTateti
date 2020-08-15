import React from 'react';
import { estadoJuego } from './estadoJuego';
import './Tateti.css';
import { useTateti } from './CustomHooks/useTateti';
import Board from './Board';
import Score from './Score';
import { Grid, Paper } from '@material-ui/core';
import TatetiAppBar from './TatetiAppBar';
import UserPanel from './UserPanel';
import TabPanel from './Common/TabPanel';
import { getColor } from './ColorPicker';

const Tateti = () => {
  const [jugador, setJugador] = React.useState({ id: 'jugador_1', nombre: 'Salsita', marca: 'x'});
  const [tab, setTab] = React.useState(0);
  const [selfColor, setSelfColor] = React.useState('rojo');
  const [boardColor, setBoardColor] = React.useState('azul');
  const [opponentColor, setOpponentColor] = React.useState('verde');

  const { estadoGlobal, reiniciar, tablero, fixedOrder, jugar, mensaje } = useTateti(jugador);

  return (
    <Grid container style={{grow: 1}} spacing={1}>
      <Grid item xs={12}>
        <TatetiAppBar setTab={setTab} tab={tab}/>
      </Grid>
      <Grid container spacing={1} item xs={12}>
        <UserPanel 
          jugador={jugador} 
          setJugador={setJugador}
          selfColor={selfColor}
          setSelfColor={setSelfColor}
          boardColor={boardColor}
          setBoardColor={setBoardColor}
          opponentColor={opponentColor}
          setOpponentColor={setOpponentColor}  
        />
      </Grid>
      <Grid item xs={12}>
        { estadoGlobal.estado !== estadoJuego.continua && <span>{mensaje}</span> }
        <TabPanel value={tab} index={1}>
          <Score jugador={jugador}/>
        </TabPanel>
        <TabPanel value={tab} index={0}>
          <Board 
            selfColor={getColor(selfColor)}
            boardColor={getColor(boardColor)}
            opponentColor={getColor(opponentColor)}
            reiniciar={reiniciar} 
            tablero={tablero} 
            estadoGlobal={estadoGlobal} 
            jugar={jugar} 
            fixedOrder={fixedOrder} 
            jugador={jugador}
          />
        </TabPanel>
      </Grid>      
    </Grid>
  );
};

export default Tateti;