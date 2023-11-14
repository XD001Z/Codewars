function findShort(s){
    let shortestLength = Infinity;
    s = s.split(" ");
    
    for (let i = 0; i < s.length; i++) {
      if (s[i].length < shortestLength) {
        shortestLength = s[i].length;
      }
    }
    return shortestLength;
  }