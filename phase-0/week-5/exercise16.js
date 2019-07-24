function totalDigitRekursif(angka) {
    // you can only write your code here!
    var jumlah = ''
    angka = angka.toString()
    if(angka.length === 1){
        return Number(angka)
    }
    for(var i = 1; i<angka.length; i++){
        jumlah += angka[i]
    }
    return Number(angka[0])+totalDigitRekursif(Number(jumlah))
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5