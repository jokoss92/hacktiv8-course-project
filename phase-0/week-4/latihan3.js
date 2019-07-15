function americanGotTalent(votes) {
	var result = [];
	var count = 0;
	var winner;
	var highest;
	for (var i = 0; i < votes.length; i++) {
		for (var j = 0; j < votes.length; j++) {
			if (i !== j && votes[i] === votes[j]) {
				count++;
				if (count >= highest) {
					winner = highest;
					result.push(votes[j]);
				} else {
					highest = count;
				}
			}
		}
	}

	if (result.length > 1) {
		return 'Juara tidak bisa ditentukan';
	} else {
		return 'Selamat juaranya ' + result[0] + " total votes " + (winner+1);
	}
}

console.log(americanGotTalent([ 'Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho' ]));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent([ 'Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho' ]));
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent([ 'Lee Min Ho', 'Arby', 'Arby' ]));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
