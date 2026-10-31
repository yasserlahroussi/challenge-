function averageArray(numbers) {
  // Écris ton code ici
  let count = 0
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
    count++
  }
  return total/count
}