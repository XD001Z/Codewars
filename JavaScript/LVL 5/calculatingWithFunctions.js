function zero(val=null) {
    if (val === null) {return 0}
    switch (val[0]) {
        case "+":
            return 0 + Number(val[1]);
        case "-":
            return 0 - Number(val[1]);
        case "*":
            return 0 * Number(val[1]);
        case "/":
            return Math.floor(0 / Number(val[1]));
    }
}
function one(val=null) {
    if (val === null) {return 1}
    switch (val[0]) {
        case "+":
            return 1 + Number(val[1]);
        case "-":
            return 1 - Number(val[1]);
        case "*":
            return 1 * Number(val[1]);
        case "/":
            return Math.floor(1 / Number(val[1]));
    }

}
function two(val=null) {
    if (val === null) {return 2}
    switch (val[0]) {
        case "+":
            return 2 + Number(val[1]);
        case "-":
            return 2 - Number(val[1]);
        case "*":
            return 2 * Number(val[1]);
        case "/":
            return Math.floor(2 / Number(val[1]));
    }
}
function three(val=null) {
    if (val === null) {return 3}
    switch (val[0]) {
        case "+":
            return 3 + Number(val[1]);
        case "-":
            return 3 - Number(val[1]);
        case "*":
            return 3 * Number(val[1]);
        case "/":
            return Math.floor(3 / Number(val[1]));
    }
}
function four(val=null) {
    if (val === null) {return 4}
    switch (val[0]) {
        case "+":
            return 4 + Number(val[1]);
        case "-":
            return 4 - Number(val[1]);
        case "*":
            return 4 * Number(val[1]);
        case "/":
            return Math.floor(4 / Number(val[1]));
    }
}
function five(val=null) {
    if (val === null) {return 5}
    switch (val[0]) {
        case "+":
            return 5 + Number(val[1]);
        case "-":
            return 5 - Number(val[1]);
        case "*":
            return 5 * Number(val[1]);
        case "/":
            return Math.floor(5 / Number(val[1]));
    }
}
function six(val=null) {
    if (val === null) {return 6}
    switch (val[0]) {
        case "+":
            return 6 + Number(val[1]);
        case "-":
            return 6 - Number(val[1]);
        case "*":
            return 6 * Number(val[1]);
        case "/":
            return Math.floor(6 / Number(val[1]));
    }
}
function seven(val=null) {
    if (val === null) {return 7}
    switch (val[0]) {
        case "+":
            return 7 + Number(val[1]);
        case "-":
            return 7 - Number(val[1]);
        case "*":
            return 7 * Number(val[1]);
        case "/":
            return Math.floor(7 / Number(val[1]));
    }
}
function eight(val=null) {
    if (val === null) {return 8}
    switch (val[0]) {
        case "+":
            return 8 + Number(val[1]);
        case "-":
            return 8 - Number(val[1]);
        case "*":
            return 8 * Number(val[1]);
        case "/":
            return Math.floor(8 / Number(val[1]));
    }
}
function nine(val=null) {
    if (val === null) {return 9}
    switch (val[0]) {
        case "+":
            return 9 + Number(val[1]);
        case "-":
            return 9 - Number(val[1]);
        case "*":
            return 9 * Number(val[1]);
        case "/":
            return Math.floor(9 / Number(val[1]));
    }
}

function plus(val=null) {return `+${val}`}

function minus(val=null) {return `-${val}`}

function times(val=null) {return `*${val}`}

function dividedBy(val=null) {return `/${val}`}