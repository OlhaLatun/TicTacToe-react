let idxPattern 

function calculateWinner(squares) {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        idxPattern = winCombinations.indexOf(winCombinations[i])
        return squares[a];
      }
    }
    return null;
  }
 

  export {calculateWinner, idxPattern}

