function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomArr(n) {
    let arr = new Array(n);
    for (let x = 0; x < arr.length; x++) {
        arr[x] = getRandomInt(n);
    }
    return arr;
}

function bestCase(n) {
    let arr = randomArr(n);
    return arr.sort(function(a,b) {
        return a - b;
    });
}

function worstCase(n) {
    return bestCase(n).reverse();
}

string_arr = randomArr(1000).toString();
console.log(string_arr);