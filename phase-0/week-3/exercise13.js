function targetTerdekat(arr) {
	// you can only write your code here!
	var positionO = arr.indexOf('o');
	var positionX = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'x') {
            positionX.push(i);
        } 
        var jarak = [0];
        var jarakTerdekat = jarak[0]
        for (var j = 0; j < positionX.length; j++) {
            jarak.push(Math.abs(positionO - positionX[j]));
            jarak.sort();
            if (jarak.length<2){
            } else {
            jarakTerdekat = jarak[1];
        }
        }
	}
	return jarakTerdekat;
}

// TEST CASES

console.log(targetTerdekat([ ' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x' ])); // 3
console.log(targetTerdekat([ 'o', ' ', ' ', ' ', 'x', 'x', 'x' ])); // 4
console.log(targetTerdekat([ 'x', ' ', ' ', ' ', 'x', 'x', 'o', ' ' ])); // 1
console.log(targetTerdekat([ ' ', ' ', 'o', ' ' ])); // 0
console.log(targetTerdekat([ ' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x' ])); // 2
