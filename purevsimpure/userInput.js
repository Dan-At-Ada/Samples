const readline = require("readline-sync")

var userNumber = Number(readline.question("Gimme a number: "))
console.log(userNumber)


function addUserNumberByFive(number){
    return number+5
}

var result = addUserNumberByFive(userNumber)

console.log(result)
