/*
========
MARATHON
========

[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;

[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'

'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina

partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18

[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode

*/

/* function marathon(track, stamina) {
  // code below here
  var staminas = stamina
  var ranges = 0
  var x
  var o
  var -
  for (let i = 0; i < track.length; i++) {
    if (track[i] === 'X' && x <= 4 && track[i] === track [i-1]) {
      x++
      }
    } else  {
      o++
      if (o === 2) {
        o = 0
      }
    } else if (track[i] === '-') {

    }

  } */

function marathon(track, stamina) {
  stamina++
  let countEx = 4;
  let countOh = 2;
  let kata = ''
  for (let i = 0; i < track.length; i++) {
    if (track[i] === 'X') {countEx--; countOh = 2}
    if (track[i] === 'O') {countOh--; countEx = 4}
    if (track[i] === '-') {stamina += 2; countOh = 2; countEx = 4;}
    if (countEx === 3) stamina--;
    if (countOh === 1) stamina--;
    if (countEx === 0) countEx = 4;
    if (countOh === 0) countOh = 2;
    kata += track[i]
    if (stamina === 0) return "Selamat anda telah menempuh jarak " + i + " km"
  }
  return 'Selamat anda telah menempuh garis finish' 
}


console.log(marathon('XXXXXXOOO-XXOOXXXXXOO-XXXXO', 5)); //Selamat anda telah menempuh jarak 18 km
console.log(marathon('XXXXXXOOOXXOOXXXXXOOXXXXO', 5)); //Selamat anda telah menempuh jarak 11 km
console.log(marathon('XXXXXXXX', 3)); //Selamat anda telah menempuh garis finish
