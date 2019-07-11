function slice(arr, a = 0, b = arr.length) {
  var indexOfArr = 0;
  var newArr = [];

  // do loop, to create new array from a index to b index
  for (var i = a; i < b; i++) {
    newArr[indexOfArr] = arr[i];
    indexOfArr++;
  }

  return newArr;
}

var array = [0, 1, 2, 3, 4, 5];

console.log(slice(array, 1));
