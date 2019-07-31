function splice(arr, a, b, ...rest) {
  var newArr = [];
  var indexOfNewArr = 0;

  for (var i = 0; i < arr.length; i++) {
    // lompati data yang dihapus
    if (i >= a && i < a + b) {
      continue;
    }

    // masukkan ke array
    newArr[indexOfNewArr] = arr[i];
    indexOfNewArr++;

    // jika ada data yang ditambah, masukan di indeks ke a
    if (indexOfNewArr === a) {
      for (var j = 0; j < rest.length; j++) {
        newArr[indexOfNewArr] = rest[j];
        indexOfNewArr++;
      }
    }
  }

  return newArr;
}

var array = [0, 8, 2, 3, 4];

console.log(splice(array, 1, 1, "tambah1", "tambah2"));
