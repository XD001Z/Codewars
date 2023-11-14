function pigIt(str){
    let wordArray = str.split(" ");
    let regex = /[\W]/gi;
  
    let newWordArray = wordArray.map((word) => {
      if (!(regex.test(word))) {
        let charArray = word.split("");
        charArray.push(charArray.splice(0,1), "a", "y")
        return charArray.join("");
        }
      return word;
    });
    return newWordArray.join(" ");
  }