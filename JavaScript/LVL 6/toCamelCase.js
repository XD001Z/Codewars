function toCamelCase(str) {
    let regex = /[-_](\w)/g
      return str.replace(regex,(match) => {
          return match[1].toUpperCase()
      })
  }