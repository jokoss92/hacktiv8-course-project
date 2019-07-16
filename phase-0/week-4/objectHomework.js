// 1. Buat object seperti ini
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/

// var myObjek ={
//   name : 'Joko Sarjono Slameto',
//   batch : 34,
//   hobbies : ['Reading', 'Listening Music']
// }

// console.log(myObjek)
// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
var insertToObjects = [
  ['Kapten Tsubasa', 'Nankatsu', 19],
  ['Wakabayashi', 'Nankatsu', 20],
  ['Saitama', 'Hero Associate', 18]
]

function objectFromArray(insertToObjects){
  var result = {}
  for(var i=0; i<insertToObjects.length; i++){
    result = {
      name : insertToObjects[i][0],
      club : insertToObjects[i][1],
      age : insertToObjects[i][2]
    }
  }
  return result
}

objectFromArray();
// 3. Membuat array menjadi unik

// function makeUnique(arrayOfNames) {

// }

// console.log(makeUnique(
//   ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']
// ))

// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']