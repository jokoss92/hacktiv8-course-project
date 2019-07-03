//Logic Challenge - X dan O
function xo(str){
    var x = 0;
    var o = 0;
    for (var position = 0; position<str.length; position++){
        if (str.charAt(position) == 'x'){
            x +=1;
        } else (str.charAt(position) == 'o');{
            o +=1;
        } 
        if(x == o){
            return "True";
        } else {
            return "False";
        }
    } 
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
