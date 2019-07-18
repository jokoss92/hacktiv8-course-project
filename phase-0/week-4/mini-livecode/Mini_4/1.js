/*
  ===========
  Fear Factor
  ===========

  [INSTRUCTIONS]
  Fear Factor adalah suatu fungsi untuk mengetahui dia bisa menjadi juara atau
  tidak.

  [EXAMPLE]
  Input:
  fearFactor = 'Single'
  weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
  Output:
  Dia kalah karena kelemahan yang pertama

  [RULE]
  - WAJIB menggunakan PSEUDOCODE
  - Maksimal weaknesses ada 9
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function fearFactorFunc(factor, weakAgainsts) {
  // code below here
  for(var i=0; i<weakAgainsts.length; i++){
    var faktorKe = 0
    if(i===0){
      faktorKe = 'pertama'
    } else if(i===1){
      faktorKe = 'kedua'
    } else if(i===2) {
      faktorKe = 'ketiga'
    } else if(i===3) {
      faktorKe = 'keempat'
    } else if(i===5) {
      faktorKe = 'kelima'
    } else if(i===6) {
      faktorKe = 'ketujuh'
    } else if(i===7) {
      faktorKe = 'kedelapan'
    } else{
      faktorKe = 'kesembilan'
    }
    if(factor === weakAgainsts[i]){
      console.log("Dia kalah karena kelemahan yang " + faktorKe)
    }
    if(factor !== weakAgainsts[i]){
      console.log("Selamat dia juara")
    }
  }
};

var fearFactor = 'Single';
var weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor, weaknesses);
// Dia kalah karena kelemahan yang pertama

var fearFactor2 = 'Menikah';
var weaknesses2 = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor2, weaknesses2);
// Selamat dia juara

var fearFactor3 = 'Menikah';
var weaknesses3 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Menikah'];
fearFactorFunc(fearFactor3, weaknesses3);
// Dia kalah karena kelemahan yang kesembilan

var fearFactor4 = 'Menikah';
var weaknesses4 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Jomblo Fisabilillah'];
fearFactorFunc(fearFactor4, weaknesses4);
// Selamat dia juara
