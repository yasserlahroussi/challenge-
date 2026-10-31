function findMinMax(numbers) {
  // Écris ton code ici
    for (let i = 0; i < numbers.length; i++) {
    let count = 0
    for (let j = 0; j < numbers.length-1; j++) {
        if (numbers[i]<numbers[j]) {
            count = numbers[i]  
            numbers[i] = numbers[j]
            numbers[j] = count 
        }
    }
  }
  console.log(numbers)
  return {min : numbers[0] , max : numbers[numbers.length -1]}
  
}
findMinMax([7,2,9,4])