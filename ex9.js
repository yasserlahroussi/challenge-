sumRows([
    [1, 2, 3],[4, 5],[6, 7, 8]
]);
function sumRows(matrix) {
  // Écris ton code ici
  let array = []
  for (let i = 0; i < matrix.length; i++) {
     let total = 0
    for (let j = 0; j < matrix[i][j].length; j++) {
        total += matrix[j]
    }
    array.push(total)
  }
  return array
}
sumRows(sumRows)