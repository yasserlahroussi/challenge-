function countOccurrences(numbers, target) {
  // Écris ton code ici
  let count =0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == target) {
        count++
    }
    
  }
  return count
}