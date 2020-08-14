import React from 'react';
import { green, blue, yellow, red, brown } from '@material-ui/core/colors';
import { Grid, Radio } from '@material-ui/core';

export const getColor = name => { 
  switch (name) {
    case 'verde':
      return green[400];
    case 'azul':
      return blue[400];
    case 'amarillo':
      return yellow[400];
    case 'negro':
      return '#000000';
    case 'rojo':
      return red[400];
    case 'marron':
      return brown[400];
  }
}

const ColorPicker = props => {

  const handleChange = e => {
    if (!props.notDisponible.find(i => i === e.target.value)) {
      props.setColor(e.target.value);
    }
  };

  return (
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <span>{props.label}</span>
        </Grid>
        <Grid item xs={8} container spacing={0}>
        <Grid item xs={6} sm={2}>
          <Radio
            checked={props.color === 'rojo'}
            onChange={handleChange}
            style={{color: getColor('rojo')}}
            value="rojo"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'A' }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Radio
            checked={props.color === 'azul'}
            onChange={handleChange}
            style={{color: getColor('azul')}}
            value='azul'
            color="default"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'B' }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Radio
            checked={props.color === 'verde'}
            onChange={handleChange}
            style={{color: getColor('verde')}}
            value="verde"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'C' }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Radio
            checked={props.color === 'amarillo'}
            onChange={handleChange}
            style={{color: getColor('amarillo')}}
            value="amarillo"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'D' }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Radio
            checked={props.color === 'negro'}
            onChange={handleChange}
            style={{color: getColor('negro')}}
            value="negro"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'E' }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Radio
            checked={props.color === 'marron'}
            onChange={handleChange}
            style={{color: getColor('marron')}}
            value="marron"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'F' }}
          />
        </Grid>
      </Grid>
      </Grid>
  );
};

export default ColorPicker;
