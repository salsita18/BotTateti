import React from 'react';
import { getScore } from './Common/SesionHelper';
import { TableRow, Table, TableBody, TableHead, TableCell, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  table: {
    minWidth: '15em'
  }
})

const Score = props => {
  const score = getScore();
  const classes = useStyles();

  return (
    <>
      <Typography variant='h6'>{`${props.jugador.nombre} tu score es:`}</Typography>
      <Paper>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Victorias</TableCell>
              <TableCell>Derrotas</TableCell>
              <TableCell>Empates</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{score.victorias}</TableCell>
              <TableCell>{score.derrotas}</TableCell>
              <TableCell>{score.empates}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default Score;