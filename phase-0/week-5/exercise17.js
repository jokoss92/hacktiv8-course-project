function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var total = 1
    angka = angka.toString()
    for(var i = 0; i<angka.length; i++){
        total *= Number(angka[i])
    }
    if(total.toString().length === 1){
        return total
    }
    return kaliTerusRekursif(total)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6