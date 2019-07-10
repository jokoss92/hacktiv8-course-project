function targetTerdekat(arr) {
	// you can only write your code here!
	var positionO = arr.indexOf('o');
	var positionX = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'x') {
            positionX.push(i);
            var jarak = [0];
			for (var j = 0; j < positionX.length; j++) {
                jarak.push(Math.abs(positionO - positionX[j]));
                jarak.sort();
                var jarakTerdekat = jarak[0];
			} 
		} 
	}
	return jarak;
}

console.log(targetTerdekat([ ' ', ' ', 'o', ' ' ])); // 0