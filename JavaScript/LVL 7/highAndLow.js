function highAndLow(numbers){
    let maxNum = -Infinity
    let minNum = Infinity
    let numberArray = numbers.split(" ")
    numberArray.forEach((number) => {
      if (Number(number) > maxNum) {
        maxNum = Number(number)
      }
      if (Number(number) < minNum) {
        minNum = Number(number)
      }
    });
    
    return `${maxNum} ${minNum}`
  }