// 1. Buat object seperti ini
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/
var myObjek = {};
myObjek.name = 'Joko Sarjono S';
myObjek.batch = 34;
myObjek.hobbies = [ 'Coding', 'Reading', 'Watching Movie', 'Listening Music' ];
// console.log(myObjek);

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
var insertToObjects = [
	[ 'Kapten Tsubasa', 'Nankatsu', 19 ],
	[ 'Wakabayashi', 'Nankatsu', 20 ],
	[ 'Saitama', 'Hero Associate', 18 ]
];

// var resultObject = {}
// var key = Name
// for(var i =0;i<insertToObjects.length;i++){
//   resultObject[key] = insertToObjects[i][0]
// }

// console.log(resultObject)

function objectFromArray(insertToObjects) {
	var result = [];
	for (var i = 0; i < insertToObjects.length; i++) {
    var objResult ={}
    objResult.Name = insertToObjects[i][0]
    objResult.Club = insertToObjects[i][1]
    objResult.age = insertToObjects[i][2]

    result.push(objResult)
	}
	return result
}

// console.log(objectFromArray(insertToObjects));
// 3. Membuat array menjadi unik

function makeUnique(arrayOfNames) {
  var result = []
  for(var i=0; i<arrayOfNames.length; i++){
    if(arrayOfNames[i] === undefined){
      result.push(arrayOfNames[i])
    }
  }
  return result
}

// console.log(makeUnique(
//   ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']
// ))

// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']
