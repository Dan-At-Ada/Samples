// function isPlaindrome(word){
//     let reverse = word.split("")
//     reverse = reverse.reverse()
//     console.log(reverse)
//     reverse = reverse.join("")    
//     console.log(reverse)

//     return (word === reverse)
//     // if (word === reverse){
//     //     return true
//     // }else{
//     //     return false
//     // }
// }

function isPlaindrome(word){
    for(let i = 0; i < word.length; i++){
        console.log(`${i} - ${word.length - i -1}`)
        if(word[i] !== word[word.length - i -1]){
            return false
        }
    }

    return true;

}

// console.log(isPlaindrome("racecar"))
// console.log(isPlaindrome("helloWorld"))
console.log(isPlaindrome("racecar"))
console.log(isPlaindrome("car"))