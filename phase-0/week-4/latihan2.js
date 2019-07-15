function arrangePairs(studentsArr){
    var student = studentsArr.split(" ")
    var pair = []
    for(var i=0; i<studentsArr.length;i+=2){
        if (student[i] === []){
            pair = []
        } 
    else if(student[i] === undefined){
            pair.push(student[i].substring(0,1).toUpperCase()+student[i].substring(1) + " dan Instruktur")
        } else {
            pair.push(student[i].substring(0,1).toUpperCase()+student[i].substring(1) + " dan " + student[i+1].substring(0,1).toUpperCase()+student[i+1].substring(1))
        }
    }
    return pair
}

console.log(arrangePairs('yani joni doni roni')); // ['Yani dan Joni', 'Doni dan Roni']
console.log(arrangePairs('james jake jade')); // ['James dan Jake', 'Jade dan Instruktur']
console.log(arrangePairs('tori nori sori wori mori')); // ['Tori dan Nori', 'Sori dan Wori', 'Mori dan Instruktur'];
console.log(arrangePairs('rudi')); // ['Rudi dan Instruktur']
console.log(arrangePairs('')); // []