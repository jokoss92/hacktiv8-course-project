/*
  //////////////////
  SUPER SHOOT SOCCER
  //////////////////

  Function Super Shot Soccer akan menunjukkan juara dari kompetisi sepak bola. Fungsi ini
  akan menerima parameter berupa array of object, dan mengembalikkan nilai berupa object urutan juara.

  EXAMPLE
  INPUT: [
    {Name: 'Hideous', Power: 100, Club: 'Germany'},
    {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
    {Name: 'Kira', Power: 40, Club: 'Korea'},
    {Name: 'Andre', Power: 59, Club: 'Egypt'}
  ]
  NOTES: 
    - Juara ditentukkan berdasarkan nilai powernya
    - Input array of object selalu ada value object orangnya
  PROCESS:
    - Germany => 100
    - Japan => 84
    - Korea => 40
    - Egypt => 59
  OUTPUT: {
    'Juara 1': 'Germany',
    'Juara 2': 'Japan',
    'Juara 3': 'Egypt',
    'Juara 4': 'Korea'
  }

  RULES:
    - Hanya boleh menggunakan built in function .push()
    - Asumsi setiap club tidak akan memiliki lebih dari 1 pemain
    - Asumsi jumlah power dari setiap club berbeda
*/

function superShootSoccer(players) {
  // code here
  var juara = 0
  for(var i in players){
    for(var j in players){
      if (players[i].Power > players[j].Power){
        juara = players[i]
        players[i] = players[j]
        players[j] = juara
      }
    }
  }
  var result = {}
  result['Juara 1'] = players[0].Club
  result['Juara 2'] = players[1].Club
  result['Juara 3'] = players[2].Club
  result['Juara 4'] = players[3].Club
  // console.log(players.Club)
  return result
}

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 100, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
  {Name: 'Kira', Power: 40, Club: 'Korea'},
  {Name: 'Andre', Power: 59, Club: 'Egypt'}
]))
// { 'Juara 1': 'Germany',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Egypt',
//   'Juara 4': 'Korea' }

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 20, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 77, Club: 'Japan'},
  {Name: 'Kira', Power: 41, Club: 'Korea'},
  {Name: 'Andre', Power: 84, Club: 'Egypt'}
]))
// { 'Juara 1': 'Egypt',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Korea',
//   'Juara 4': 'Germany' }