function shift(arr) {
  var indexOfTempArr = 0;
  var tempArr = [];

  // do loop, to create new array without first data of array
  for (var i = 1; i < arr.length; i++) {
    tempArr[indexOfTempArr] = arr[i];
    indexOfTempArr++;
  }

  arr = tempArr;

  return arr;
}

var array = [0, 1, 2, 3, 4];

console.log(shift(array));
