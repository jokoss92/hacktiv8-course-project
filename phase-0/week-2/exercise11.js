//Logic Challenge Balik Kata
function balikKata(kata){
    var splitKata = kata.split("")
    var reverseKata = splitKata.reverse();
    var joinKata = reverseKata.join("");
    return joinKata;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
