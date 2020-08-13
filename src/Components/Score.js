import React from 'react';
import { getScore } from './Common/SesionHelper';

const Score = props => {
  const score = getScore();

  return (
    <div>
      <p>{`${props.jugador.nombre} tu score es:`}</p>
      <table>
        <tr>
          <th>Victorias</th>
          <th>Derrotas</th>
          <th>Empates</th>
        </tr>
        <tr>
          <td>{score.victorias}</td>
          <td>{score.derrotas}</td>
          <td>{score.empates}</td>
        </tr>
      </table>
      
    </div>
  );
};

export default Score;