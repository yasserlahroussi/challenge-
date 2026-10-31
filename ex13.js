function findMax(numbers) {
  // Écris ton code ici
  for (let i = 0; i < numbers.length-1; i++) {
    let count = 0
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[i]<numbers[j]) {
            count = numbers[i]  
            numbers[i] = numbers[j]
            numbers[j] = count 
        }
    }
  }
  return numbers[0]
}