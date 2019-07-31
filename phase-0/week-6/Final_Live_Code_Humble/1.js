/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

/*
SET an array with value hero type as a comparison
SPLIT composition array with "," as a separator
IF splitComposition length less than 5
  DISPLAY not sufficient players
IF string values on splitComposition is not match on hero type array
  DISPLAY string values is not on the pick list
ELSE
  
*/

function heroPick(composition) {
	// code here
	var heroType = [ 'ranger', 'mage', 'tank', 'warrior', 'assasin' ];
  var result = [];
	var splitComposition = composition.split(',');
	// console.log(splitComposition)
	if (splitComposition.length < 5) {
		return 'not sufficient players';
	}
	for (var i = 0; i < splitComposition.length; i++) {
    for(var j=0; j<heroType.length; j++){
      // for(var k=0;k<result.length;k++)
      if(heroType[j] === splitComposition[i]){
        if(splitComposition[i] !== result[i]){
          result.push(splitComposition[i])
        }
      }
    }
  }
  
	// return result
	console.log(result);
}

// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')); // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')); // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')); // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')); // god is not on the pick list
