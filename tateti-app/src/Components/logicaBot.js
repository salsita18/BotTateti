import React from 'react';

export const jugarBot = (marca, tablero) => {
  const randomNum = parseInt(Math.random() * 100);

  const disponibles = tablero.filter(i => !i.marca);

  let k = 0;
  let i = 0;

  for (i = 0; i < randomNum; i++) {
    k++;

    if (k >= disponibles.length) {
      k = 0;
    }
  }

  return { ...disponibles[k], marca };
};