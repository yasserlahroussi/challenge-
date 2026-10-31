function getEvenFromMatrix(matrix) {
  // Écris ton code ici
  let array = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 ==0 ) {
            array.push(matrix[i][j])
        }
        
    }
    
  }
  return array
}