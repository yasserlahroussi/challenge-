function getEvenNumbers(start, end) {
  // Écris ton code ici

  let array = []
  for (let i = start ; i <= end ; i++) {
     if(i % 2 == 0) {
        array.push(i)
     }
  }
  return array
}
getEvenNumbers(1,10)