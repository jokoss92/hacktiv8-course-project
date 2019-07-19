function shoppingTime(memberId, money) {
	// you can only write your code here!
	var result = {};
	var listBarang = [ [ 'Sepatu Stacattu', 1500000 ], [ 'Baju Zoro', 500000 ], [ 'Baju H&N',250000 ], ['Sweater Uniklooh',175000], ['Casing Handphone',50000] ];
	var listPurchased = [];
	if (memberId === '' || memberId === undefined) {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	} else if (money < 50000) {
		return 'Mohon maaf, uang tidak cukup';
	} else {
		result.memberId = memberId;
		result.money = money;
		for (var i = 0; i < listBarang.length; i++) {
			var product = listBarang[i][0];
			var price = listBarang[i][1];
			if (money >= price) {
				listPurchased.push(product);
				money -= price;
			}
		}
		// if (money > 1500000) {
		// 	money -= 1500000;
		//     listBarang.push('Stacattu');
		//     // console.log(money)
		// }
		// if (money > 500000) {
		// 	money -= 500000;
		//     listBarang.push('Zoro');
		//     // console.log(money)
		// }
		// if (money > 250000) {
		// 	money -= 250000;
		//     listBarang.push('H&N');
		//     // console.log(money)
		// }
		// if (money > 175000) {
		// 	money -= 175000;
		//     listBarang.push('Uniklooh');
		//     // console.log(money)
		// }
		// if (money >= 50000) {
		// 	money -= 50000;
		//     listBarang.push('Casing Handphone');
		// console.log(money)
		// }

		// console.log(listBarang);
		result.listPurchased = listPurchased;
		result.changeMoney = money;
		return result;
	}
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
