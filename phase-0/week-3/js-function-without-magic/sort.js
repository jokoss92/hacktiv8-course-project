function sort(arr) {
  var temp;

  // do loop, for every data in array
  for (var i = 0; i < arr.length; i++) {
    // do loop, to compare data to other data in array
    for (var j = 0; j < arr.length; j++) {
      // bandingkan nilai data ke i, terhadap semua data di array
      // jika data ke i > dari data lain, swip data, shg data ke i di depan
      // jika data ke i < dari data lain, swip data, shg data ke i di belakang
      // ubah tanda > atau < untuk asc atau dcs

      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        console.log(arr);
      }
    }
  }

  return arr;
}

console.log(sort(["cacing", "ayam", "kuda", "anoa", "kancil"]));
