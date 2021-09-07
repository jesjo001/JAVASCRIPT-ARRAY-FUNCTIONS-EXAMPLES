function reverseString(str) {

    return str.split("").reverse().join("")
}


console.log(reverseString("Hello world"))


//method 2
//using a reversed for loop

function reverseString2(str) {

    let finalString = ""

    // reverse for loop
    for (i = str.length - 1; i >= 0; i--) {
        finalString = finalString += str[i]

    }

    return finalString;
}


console.log(reverseString2("Hello world"))

