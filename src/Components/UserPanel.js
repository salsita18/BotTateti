import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ColorPicker from './ColorPicker';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '1em',
    magin: 'auto',
    width: '100%'
  },
  textField: {
    width: '80%',
    margin: 'auto',
  }
}));

const UserPanel = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div style={{marginTop: '2em'}}>
            <TextField
              className={classes.textField}
              id='user-nick-textFiel'
              label='Tu nick de jugador'
              defaultValue={`Player_${new Date().getUTCMilliseconds()}`}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserPanel;