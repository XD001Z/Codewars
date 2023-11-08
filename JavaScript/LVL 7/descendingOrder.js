function descendingOrder(n){
    let stringArray = String(n).split("")
    stringArray.sort().reverse()
    let sortedArray = stringArray.join("")
    return Number(sortedArray)
  }