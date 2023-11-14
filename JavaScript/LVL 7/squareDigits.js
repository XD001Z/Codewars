function squareDigits(num){
    let squaredDigits = []
    let digits = String(num).split('')
    for(let i = 0; i < digits.length; i++){
      squaredDigits.push(String(digits[i] ** 2))
    }
    return Number(squaredDigits.join(""))
  }