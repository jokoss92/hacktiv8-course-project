/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  // code here
  var stringNum = equation.toString()
  // for(var i=0; i<stringNum.length;i++){

  // }
  if(stringNum.length === 1){
    return stringNum
  } else {
    // // var splitNum = stringNum.split('')
    // // for(var i=0; i<splitNum.length;i++){
    // //   splitNum[i]+= '0'

    // }
    var depan = stringNum[0]
    var o = ''
    for(var i=1;i<stringNum.length;i++){
      o += '0'
    }
     depan += o
     
    }
    var sisa=stringNum.slice(1,stringNum.length)
    var lanjut = false
    for(var i=0; i<sisa.length;i++){
      if(sisa[i] !== '0')
      lanjut = true
    }
    if (lanjut===true){
      return depan+ "+" + parseNumber(Number(sisa))
    }
    return stringNum[0]+(sisa)
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3