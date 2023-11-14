function duplicateCount(text){
    let charDict = {}
      for (let i = 0; i < text.length; i++) {
          const key = text[i].toUpperCase()
          if (!(key in charDict)) {
              charDict[key] = 0  
          }
          charDict[key]++
      }
      let dupeCount = 0
      for (const key in charDict) {
          if (charDict[key] > 1) {
              dupeCount++
          }
      }
      return dupeCount
  }