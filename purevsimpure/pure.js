// Pure function

function PureAddByFive(number){
    var answer = number;
    answer += 5

    return answer
}

var result = PureAddByFive(12)

console.log(result)

result = PureAddByFive(15)

console.log(result)