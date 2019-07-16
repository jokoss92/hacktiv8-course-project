/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
SET variable hasil(for total medals), hasilG(only for gold medals), hasilS(only for silver medals), hasilB(only for bronze medals) with 0
SET i with 0 for index doing looping increase by 1 until length less than array
  IF string on i is G
    THEN add 1 to hasilG and hasil
  ELSE IF string on i is S
    THEN add 1 to hasilS and hasil
  ELSE IF string on i is B
   THEN add 1 to hasilB and hasil
  ELSE 
  THEN add 0 to hasil
DISPLAY gold medal with hasilG + silver medal with hasilS + bronze medal with hasilB + total medal with hasil
*/

function poinCalculator(array) {
    // your code here
    var hasil = 0
    var hasilG = 0
    var hasilS = 0
    var hasilB =0
    for(var i=0; i<array.length; i++){
      if (array[i] === "G"){
        hasilG ++
        hasil += 2
      } else if(array[i] === "S"){
        hasilS ++
        hasil += 1
      } else if(array[i] === "B"){
        hasilB ++
        hasil += 0.5
      } else {
        hasil += 0
      }
    }
    return "Jumlah Gold: " + hasilG + ", jumlah Silver: " + hasilS + ", jumlah Bronze: " + hasilB + ". Dan totalnya adalah " + hasil
  }
  
  console.log(poinCalculator("GSB"));
  // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
  console.log(poinCalculator("GGG"));
  // jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
  console.log(poinCalculator("SSB"));
  // jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
  console.log(poinCalculator("BBGSSGB"));
  // jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
  console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
  
