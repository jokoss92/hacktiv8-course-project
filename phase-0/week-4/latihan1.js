function nextTargetName(angka){
    for(var i = 0; i<angka.length; i++){
        if(angka[i] === 0){
            angka[i] = " "
        } else {
            angka[i] = String.fromCharCode(angka[i]+96)
        }
    }
    angka = angka.join("").split(" ")
    for(var k=0; k<angka.length; k++){
        angka[k] = angka[k].substring(0,1).toUpperCase() + angka[k].substring(1)
    }
    return angka
}

console.log(nextTargetName([1,12,1,19,20,1,9,18,0,1,18,3,8,9,5])); // Alastair Archie
