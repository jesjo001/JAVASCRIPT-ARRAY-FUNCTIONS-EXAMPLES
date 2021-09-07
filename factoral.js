//fin =d the fatoral of a num 

function factorize(num) {

    let result = 1
    for (var i = 1; i < num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorize(5))