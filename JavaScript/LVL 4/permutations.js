function permutations(string) {
    if (string.length === 1) {
      return [string];
    }
    
    let resultPerms = new Set();
    
    for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      let leftoverChars = string.slice(0,i) + string.slice(i+1);
      
      let innerPerms = permutations(leftoverChars);
      
      for (let perm of innerPerms) {
        resultPerms.add(currentChar + perm);
      }
    }
    return [...resultPerms];
  }