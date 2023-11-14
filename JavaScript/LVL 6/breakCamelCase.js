function solution(string) {
    let solution = []
    for (let i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
        solution.push(" ")
      }
      solution.push(string[i])
    }
    return solution.join("")
  }