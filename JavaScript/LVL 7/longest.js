function longest(s1, s2) {
    let string = (s1 + s2).split("")
    let uniqueChar = [...new Set(string)].sort()
    uniqueChar = uniqueChar.join("")
    return uniqueChar
  }