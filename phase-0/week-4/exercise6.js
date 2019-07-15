function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tempArray =[]
    
    for(i=0;i<=angka;i++){
        if(angka%i === 0){
            var jumlahAngka = 0
            jumlahAngka = i.toString().length + (angka/i).toString().length
            tempArray.push(jumlahAngka)
        }
    }
    tempArray.sort()
    return tempArray[0]

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2