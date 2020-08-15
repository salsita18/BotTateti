export const estadoJuego = { continua: 'continua', empate: 'Empate', terminado: 'Hay un ganador!' };

const vertificarLinea = (tablero, fila, col, m, marca, rows, recorriendo) => {
  const currMarc = tablero.find(i => i.fila === fila && i.col === col).marca;
  rows.push({col, fila});

  if (col >= m-1) { 
    return currMarc && currMarc === marca;
  }

  if (!currMarc || currMarc !== marca) return false;

  if (recorriendo === 'fila') {
    fila++;
  } else {
    col++;
  }

  return vertificarLinea(tablero, fila, col, m, marca, rows);
};

const verificarTateti = (tablero, x, m) => {
  if (x >= m-1) {

  } 

  return verificarTateti(tablero, x+1, m)
}


export const verificarEstadoJuego = tablero => {
  let hayTateti;
  let marcaAsignada;
  let fila;
  let col;
  let rows = [];

  for (fila = 0; fila < 3; fila++) {
    hayTateti = true;
    marcaAsignada = tablero.find(i => i.col === 0 && i.fila === fila).marca;

    if (!marcaAsignada) {
      hayTateti = false;
      continue;
    };

    if (vertificarLinea(tablero, fila, 0, 3, marcaAsignada, rows, 'col')) {
      hayTateti = true;
      break;
    }

    hayTateti = false;
    rows = [];
  }

  if (hayTateti) return { estado: estadoJuego.terminado, ganador: marcaAsignada, rows };

  for (col = 0; col < 3; col++) {
    hayTateti = true;
    marcaAsignada = tablero.find(i => i.col === col && i.fila === 0).marca;

    if (!marcaAsignada) {
      hayTateti = false;
      continue;
    };

    for (fila = 0; fila < 3; fila++) {
 
      if (vertificarLinea(tablero, fila, 0, 3, marcaAsignada, rows, 'col')) {
        hayTateti = true;
        break;
      }
  
      hayTateti = false;
      rows = [];
    }

    if (hayTateti) return { estado: estadoJuego.terminado, ganador: marcaAsignada, rows };
  }

  col = 0;
  fila = 0;
  hayTateti = true;
  marcaAsignada = tablero.find(i => i.col === 0 && i.fila === 0).marca;

  if (!marcaAsignada) hayTateti = false;

  while (col < 3 && fila < 3 && hayTateti) {
    rows.push({ col, fila });
    if (tablero.find(i => i.col === col && i.fila === fila).marca !== marcaAsignada) {
      rows = [];
      hayTateti = false;
      break;
    }

    col++;
    fila++;
  }

  if (hayTateti) return { estado: estadoJuego.terminado, ganador: marcaAsignada, rows };

  col = 0;
  fila = 2;
  hayTateti = true;
  marcaAsignada = tablero.find(i => i.col === 0 && i.fila === 2).marca;

  if (!marcaAsignada) hayTateti = false;

  while (col < 3 && fila >= 0 && hayTateti) {
    rows.push({ col, fila });

    if (tablero.find(i => i.col === col && i.fila === fila).marca !== marcaAsignada) {
      rows = [];
      hayTateti = false;
      break;
    }

    col++;
    fila--;
  }

  if (hayTateti) return { estado: estadoJuego.terminado, ganador: marcaAsignada, rows };

  const empate = tablero.filter(i => !i.marca).length === 0;

  return { estado : empate ? estadoJuego.empate : estadoJuego.continua, ganador: '', rows };
};