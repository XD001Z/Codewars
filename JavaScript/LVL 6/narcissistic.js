function narcissistic(value) {
    total = 0
    stringVal = String(value)
    for(let i = 0; i < stringVal.length; i++) {
      total += Number(stringVal[i]) ** stringVal.length
    }
    return total === value ? true : false
  }