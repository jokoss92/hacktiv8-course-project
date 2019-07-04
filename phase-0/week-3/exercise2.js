var input = "hello world!";

function balikString(input){
    var hasilString = '';
    for(var i=input.length-1;i>=0;i--){
        hasilString += input[i];
    }
    return hasilString;
}

console.log(balikString(input));