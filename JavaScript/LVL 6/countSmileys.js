function countSmileys(arr) {
    let regex = /^[:;][-~]?[)D]$/
    let smileyCount = 0
    arr.forEach(string => {
        if (regex.test(string)) {
            smileyCount++     
        }
    });
    return smileyCount
}