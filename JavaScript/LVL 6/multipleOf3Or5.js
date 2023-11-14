function solution(number){
    let sum = 0
      let multiples = new Set()
      for (let i = 1; i < number; i++) {
          if (i % 3 === 0 || i % 5 === 0) {
              multiples.add(i)
          }   
      }
      let multiplesArray = [...multiples]
      multiplesArray.forEach((num)=> {
          sum += num
      })
      return sum
  }