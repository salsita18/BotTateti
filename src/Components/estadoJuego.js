export const estadoJuego = { continua: 'continua', empate: 'Empate', terminado: 'Hay un ganador!' };

const verificarLinea = (tablero, fila, col, m, marca, rows, recorriendo) => {
  const currMarc = tablero.find(i => i.fila === fila && i.col === col).marca;
  rows.push({col, fila});

  const cota = recorriendo === 'fila' ? fila : col;

  if (cota >= m-1) { 
    return currMarc && currMarc === marca;
  }

  if (!currMarc || currMarc !== marca) return false;

  if (recorriendo === 'fila') {
    fila++;
  } else {
    col++;
  }

  return verificarLinea(tablero, fila, col, m, marca, rows, recorriendo);
};

const verificarTateti = (tablero, x, m, sentido, rows) => {
  let fila;
  let col;
  let recorriendo;
  
  if (sentido === 'fila') {
    recorriendo = 'col';
    col = 0;
    fila = x;
  } else {
    recorriendo = 'fila '
    fila = 0;
    col = x;
  }
  const marca = tablero.find(i => i.fila === fila && i.col === col).marca;
  
  if (x >= m-1) { 
    const res = { resultado: verificarLinea(tablero, fila, col, m, marca, rows, recorriendo), marca };

    if (!res.resultado) rows.splice(0, rows.length);

    return res;
  }

  if (verificarLinea(tablero, fila, col, m, marca, rows, recorriendo)) {
    return { resultado: true, marca }
  }

  rows.splice(0, rows.length);

  return verificarTateti(tablero, x+1, m, sentido, rows);
}


export const verificarEstadoJuego = tablero => {
  let hayTateti;
  let marcaAsignada;
  let fila;
  let col;
  let rows = [];

  let verificacion = verificarTateti(tablero, 0, 3, 'fila', rows);

  if (verificacion.resultado) {
    return { estado: estadoJuego.terminado, ganador: verificacion.marca, rows };
  }

  verificacion = verificarTateti(tablero, 0, 3, 'col', rows);

  if (verificacion.resultado) {
    return { estado: estadoJuego.terminado, ganador: verificacion.marca, rows };
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