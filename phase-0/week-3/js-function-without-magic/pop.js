function pop(arr) {
  var indexOfTempArr = 0;
  var tempArr = [];

  // do loop. to create new array without last data of array
  for (var i = 0; i < array.length - 1; i++) {
    tempArr[indexOfTempArr] = arr[i];
    indexOfTempArr++;
  }

  arr = tempArr;

  return arr;
}

var array = [0, 1, 2, 3, 4];

console.log(pop(array));
console.log(array);
