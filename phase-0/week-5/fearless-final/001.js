/*
=============
TUG OF WAR WINNER
=============
Name :_____________
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level 
  - A = 1 
  - B = 2
  - C = 3

Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!

[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar(sentence) {
  // only code here!
  var splitTeam = sentence.split("--V--")
  // var teamKiri = splitTeam[0]
  // var teamKanan = splitTeam[1]
  var pointKiri = 0
  var pointKanan = 0
  var result = []
  // var winner = 0
  if(splitTeam[0] === '' && splitTeam[1] === ''){
    return "No player"
  }
    for(var i=0; i<splitTeam.length; i++){
      var point = 0
      for(var j=0; j<splitTeam[i].length; j++){
        if(splitTeam[i][j] === 'A'){
          point ++
        } else if(splitTeam[i][j] === 'B'){
          point += 2
        } else if(splitTeam[i][j] === 'C'){
          point += 3
        }


        // if(splitTeam[1][j] === 'A'){
        //   pointKanan ++
        // } else if(splitTeam[1][j] === 'B'){
        //   pointKanan += 2
        // } else if(splitTeam[1][j] === 'C'){
        //   pointKanan += 3
        // }
      }
      result.push(point)
      // console.log(splitTeam, pointKiri, pointKanan)
      if(result[0] < result[1]){
        // winner = pointKanan
        return "Team Kanan Menang"
      } else if(result[0] > result[1]){
        // winner = pointKiri
        return "Team Kiri Menang"
      } else if(result[0] === result[1]){
        return "Draw"
      } 
      // console.log(splitTeam, pointKiri, pointKanan, winner)

    }
  console.log(result)
 
}

console.log(tugOfWar('ABCA--V--ABCC')); // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
console.log(tugOfWar('--V--')); // 'NO PLAYERS'