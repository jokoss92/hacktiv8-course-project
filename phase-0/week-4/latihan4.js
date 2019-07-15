function sumTheNumber(stringNumber){
    var result = 0
    for (var i = 0; i<stringNumber.length;i++){
        if(i%2 !== 0){
            result +=2 * stringNumber[i]
        }
        else{
            result += Number(stringNumber[i])
        }
    }
    return result
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2