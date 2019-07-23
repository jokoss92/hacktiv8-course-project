/*
  ================
  Format Uang (KBBI)
  ================

  [INSTRUCTIONS]

  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00

  [RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
*/

function formatUang(number) {
  // code below here
  var numString = number.toString()
  var rupiah = ''
  var counter = 0

  for(var i=numString.length-1; i>=0;i--){
    counter++
    rupiah = numString[i] + rupiah
    if(counter ===3 && i !== 0){
      rupiah = '.' + rupiah
      counter = 0
    }
  }
  return 'Rp'+rupiah+',00'
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
