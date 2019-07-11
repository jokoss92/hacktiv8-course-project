function unshift(arr, ...rest) {
  var indexOfNewArr = 0;
  var newArr = [];

  // do loop, to create new array with rest value
  for (var i = 0; i < rest.length; i++) {
    newArr[indexOfNewArr] = rest[i];
    indexOfNewArr++;
  }

  // do loop, to add arr value
  for (var j = 0; j < arr.length; j++) {
    newArr[indexOfNewArr] = arr[j];
    indexOfNewArr++;
  }

  return newArr;
}

var array = [0, 1, 2, 3, 4, 5];

console.log(unshift(array, "tambah1", "tambah2"));
