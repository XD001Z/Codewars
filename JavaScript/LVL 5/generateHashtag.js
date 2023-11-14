function generateHashtag (str) {
    return str.length === 0 ? false : (() => {
        str = str.split(" ").filter((word) => word !== "").map((word) => word[0].toUpperCase() + word.slice(1))
        return (str.length === 0 || str.join("").length >= 140) ? false : "#" + str.join("");
    })();
}