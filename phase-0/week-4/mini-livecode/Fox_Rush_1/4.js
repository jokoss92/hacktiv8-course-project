/*
  //////////////////////
  FUNCTION COUNT PROFIT
  //////////////////////

  Fungsi Count Profit akan mencari keuntungan tetapi 

  [PROCESS]
  Sama seperti tugas tetapi nama shoppersnya wajib dibuat dinamis dan diubah menjadi string.

  [RULES]
  - Stock tidak boleh negatif
  - Dilarang menggunakan built in function apapun
*/

function countProfit(shoppers) {
	var listBarang = [
		[ 'Sepatu Stacattu', 1500000, 10 ],
		[ 'Baju Zoro', 500000, 2 ],
		[ 'Sweater Uniklooh', 175000, 1 ]
	];

	// you can only write your code here!
	if (shoppers.length === 0) {
		return [];
	} else {
		var arrResult = [];
		for (var i = 0; i < listBarang.length; i++) {
			var objectShoppers = {};
			var arrShoppers = [];
			var jumlahBeli = 0;
			for (var j = 0; j < shoppers.length; j++) {
				if (listBarang[i][0] === shoppers[j].product && shoppers[j].amount < listBarang[i][2]) {
          arrShoppers.push(shoppers[j].name);
          // var pembeli = '';
          // for (var k=0; k<arrShoppers.length; k++) {
          //   if (arrShoppers.length < 1) {
          //     pembeli = arrShoppers[k];
          //   } else {
          //     pembeli = arrShoppers[k] + ' dan ' + arrShoppers[k + 1];
          //   }
          // }
					jumlahBeli += shoppers[j].amount;
				}
				objectShoppers.product = listBarang[i][0];
				objectShoppers.shoppers = arrShoppers;
				objectShoppers.leftOver = listBarang[i][2] - jumlahBeli;
				objectShoppers.totalProfit = jumlahBeli * listBarang[i][1];
			}
			arrResult.push(objectShoppers);
		}
	}
	return arrResult;
}

// TEST CASES
console.log(
	countProfit([
		{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
		{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
		{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
	])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: 'Windi dan Vanessa',
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: '',
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: '',
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
	countProfit([
		{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
		{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
		{ name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
		{ name: 'Devi', product: 'Baju Zoro', amount: 1 },
		{ name: 'Lisa', product: 'Baju Zoro', amount: 1 }
	])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: 'Windi',
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: 'Devi dan Lisa',
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: 'Rani',
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
	countProfit([
		{ name: 'Windi', product: 'Sepatu Stacattu', amount: 1 },
		{ name: 'Devi', product: 'Sepatu Stacattu', amount: 1 },
		{ name: 'Dini', product: 'Sepatu Stacattu', amount: 1 }
	])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: 'Windi, Devi, dan Dini',
//     leftOver: 7,
//     totalProfit: 4500000 },
//   { product: 'Baju Zoro',
//     shoppers: '',
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: '',
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
