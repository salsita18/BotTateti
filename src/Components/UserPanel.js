import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ColorPicker from './ColorPicker';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '1em',
    magin: 'auto',
  },
  textField: {
    width: '80%',
    margin: 'auto',
    marign: '1em'
  }
}));


const UserPanel = props => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.textField}
            id='user-nick-textFiel'
            label='Tu nick de jugador'
            defaultValue={`Player_${new Date().getUTCMilliseconds()}`}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper} style={{textAlign: 'right'}}>
          <ColorPicker 
            setColor={props.setSelfColor}
            color={props.selfColor} 
            notDisponible={[props.boardColor, props.opponentColor]}
            label='Tu color: '
          />
          <ColorPicker 
            setColor={props.setBoardColor}
            color={props.boardColor} 
            notDisponible={[props.selfColor, props.opponentColor]}
            label='Color del Tablero: '
            />
          <ColorPicker 
            setColor={props.setOpponentColor}
            color={props.opponentColor} 
            notDisponible={[props.selfColor, props.boardColor]}
            label='Color del oponente: '
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div>aqui puedes elegir los colores de la app</div>
      </Grid>
    </>

  );
};

export default UserPanel;