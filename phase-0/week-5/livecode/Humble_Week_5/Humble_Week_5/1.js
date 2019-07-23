/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.

[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre

[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/
/*
SET stringData with values
  IF stringData equals with ''
    PRINT "Tidak ada catatan eMoney"
  ELSE split stringData with separator ',' save at user array
  THEN split user array with separator ':'


*/

function eMoneySplit(stringData) {
  // code below here
 var userMoney = stringData.split(',')
 if(stringData === ''){
   return "tidak ada catatan eMoney"
 }
 var name =[]
 var money = []
 for(let i=0; i <userMoney.length; i++){
   var user = userMoney[i].split(':')
   name.push(user[0])
   money.push(user[1])
  //  money = parseInt(moneyString)
 }
 var min = 0
 var max = 0
 for(let j = 0;j<money.length; j++){
   if(parseInt(money[j]) > parseInt(money[max])){
     max = j
   }
   if(parseInt(money[j]) < parseInt(money[min])){
      min = j
   }
 }
 return "terbanyak adalah " + name[max] + " dan terdikit adalah " + name[min]
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney
