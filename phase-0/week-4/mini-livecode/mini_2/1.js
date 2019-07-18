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
  // var uang = number.toString().split()
  var uang = number.split(' ')
  // console.log(uang)
  var rupiah = []
  // console.log(arr)
  // uang[0] = uang[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  // for(var i=0; i>number.length;i++){
  //   if(uang.length === 0){
  //     uang.push('.')
  //   }
  // }
  // for(var i=number.length-1; i>0;i--){
  //   if(i%3 === 0){
  //     arr.push(number)

  //   }
  // }
  // console.log(arr)
  // // console.log(uang)
  // return "Rp" + uang[0] + ",00"
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
