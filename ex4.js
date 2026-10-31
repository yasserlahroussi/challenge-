function getOddNumbers(numbers) {
  // Écris ton code ici
  let array = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        array.push(numbers[i])
    }
  }
  return array
}
console.log(getOddNumbers([1,2,3]))