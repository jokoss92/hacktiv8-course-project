/*
HACKTIV8 Final Live Coding Rocket
=======================
British National Crisis
=======================
Name : __________
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris dengan melakukan pengeboman di tempat-tempat yang berbeda.
Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan angka 2,3,4,6,7, atau 8
 yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan beberapa kata berupa angka dalam bahasa Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8
Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!
Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!
Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!
Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi TWO => 2. Maka targetnya District 2!

HINT:
Urutan angka mana yang keluar lebih dulu tidak penting!
Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea(code) {

    let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = [];
    let rekapCount = [];

    for (let i = 0; i < abjad.length; i++) {
        let count = 0;
        for (let j = 0; j < code.length; j++) {
            if (abjad[i] === code[j]) {
                count++
            }
        }
        if (count > 0) {
            str.push(abjad[i])
            rekapCount.push(count)
        }
    }

    let numCode = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGHT'];
    let num = [2, 3, 4, 6, 7, 8, ]

    //Mencocokan code -------------------------------------------------------------------------------------------------->

    let result = 0;
    let tes = []


    for (let i = 0; i < numCode.length; i++) {
        let s = 0;
        for (let j = 0; j < numCode[i].length; j++) {
            for (let k = 0; k < str.length; k++) {
                if (numCode[i][j] === str[k]) {
                    if (rekapCount[k] > 0) {
                        s++
                    }
                }
            } //end loop k
        } //end loop j
        if (s === numCode[i].length) {

            for (let l = 0; l < numCode[i].length; l++) {
                for (let m = 0; m < str.length; m++) {
                    if (numCode[i][l] === str[m]) {
                        rekapCount[m]--
                    }
                }
            }
            result += num[i];
            tes.push(numCode[i])
            i--

        }

    } //end loop i


    return `District ${result} is the next target!`

} //end of fucntion

console.log(nextTargetArea('WTO')); // "District 2 is the next target!" 
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!" 
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!" 
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!" 
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"