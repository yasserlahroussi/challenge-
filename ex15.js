function findMatrixMax(matrix) {
  // Écris ton code ici
  let max = matrix[0][0]
  let colon = 0
  let ligne = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (max < matrix[i][j]) {
            max = matrix[i][j]
            ligne = i
            colon = j 
        }
        
    }
    
  }
  return { value: max, row: ligne, col: colon }
}