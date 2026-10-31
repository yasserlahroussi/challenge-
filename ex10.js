
function averageEvenMatrix(matrix) {
    // Écris ton code ici
    let total = 0
    let count = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 == 0) {
                total += matrix[i][j]
                count++
        }
    }
    }
    if (count !== 0) {
        console.log(total / count)

    }
    else {
        console.log(null)
    }

}
averageEvenMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])