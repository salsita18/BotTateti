export const estadoJuego = { continua: 'continua', empate: 'Empate', terminado: 'Hay un ganador!' };

export const verificarEstadoJuego = tablero => {
  let hayTateti;
  let marcaAsignada;
  let fila;
  let col;

  for (fila = 0; fila < 3; fila++) {
    hayTateti = true;
    marcaAsignada = tablero.find(i => i.col === 0 && i.fila === fila).marca;

    if (!marcaAsignada) {
      hayTateti = false;
      continue;
    };

    for (col = 0; col < 3; col++) {
      if (tablero.find(i => i.col === col && i.fila === fila).marca !== marcaAsignada) {
        hayTateti = false;
        break;
      }
    }

    if (hayTateti) return estadoJuego.terminado;
  }

  for (col = 0; col < 3; col++) {
    hayTateti = true;
    marcaAsignada = tablero.find(i => i.col === col && i.fila === 0).marca;

    if (!marcaAsignada) {
      hayTateti = false;
      continue;
    };

    for (fila = 0; fila < 3; fila++) {
      if (tablero.find(i => i.col === col && i.fila === fila).marca !== marcaAsignada) {
        hayTateti = false;
        break;
      }
    }

    if (hayTateti) return estadoJuego.terminado;
  }

  col = 0;
  fila = 0;
  hayTateti = true;
  marcaAsignada = tablero.find(i => i.col === 0 && i.fila === 0).marca;

  if (!marcaAsignada) hayTateti = false;

  while (col < 3 && fila < 3 && hayTateti) {

    if (tablero.find(i => i.col === col && i.fila === fila).marca !== marcaAsignada) {
      hayTateti = false;
      break;
    }

    col++;
    fila++;
  }

  if (hayTateti) return estadoJuego.terminado;

  col = 0;
  fila = 2;
  hayTateti = true;
  marcaAsignada = tablero.find(i => i.col === 0 && i.fila === 2).marca;

  if (!marcaAsignada) hayTateti = false;

  while (col < 3 && fila >= 0 && hayTateti) {

    if (tablero.find(i => i.col === col && i.fila === fila).marca !== marcaAsignada) {
      hayTateti = false;
      break;
    }

    col++;
    fila--;
  }

  if (hayTateti) return estadoJuego.terminado;

  const empate = tablero.filter(i => !i.marca).length === 0;

  return empate ? estadoJuego.empate : estadoJuego.continua;
};