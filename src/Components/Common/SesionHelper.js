
export const getScore = () => {
  const score = localStorage.getItem('score');

  return JSON.parse(score);
}

export const registrarScore = resultado => {
  let score = getScore();

  if (!score) score = { victorias: 0, derrotas: 0, empates: 0 };

  if (resultado === 'victoria') {
    score.victorias = (score.victorias || 0) +1;
  } else if (resultado === 'derrota') {
    score.derrotas = (score.derrotas || 0) +1;
  } else {
    score.empates = (score.empates || 0) +1;
  }

  const stringScore = JSON.stringify(score);
  localStorage.setItem('score', stringScore);
};


