function split(str, separator) {
  var splitedStr = [];
  var indexOfSplitedStr = 0;
  var tempSeparator = 0;

  // do loop
  for (var i = 0; i < str.length; i++) {
    // jika character sama dengan separator, tambahkan menjadi data, kemudian push ke array
    if (str[i] === separator) {
      var tempData = "";

      // do loop, to add character into data
      for (var j = tempSeparator; j < i; j++) {
        if (str[j] !== separator) {
          tempData += str[j];
        }
      }

      // add data to array
      splitedStr[indexOfSplitedStr] = tempData;
      indexOfSplitedStr++;
      tempSeparator = i;
    }
  }

  // tambah data terakhir setelah separator, jika ada
  if (tempSeparator < str.length - 1) {
    tempData = "";

    // do loop, mulai dari separator terakhir, sampai data terakhir
    for (var k = tempSeparator + 1; k < str.length; k++) {
      tempData += str[k];
    }

    // add to last array
    splitedStr[indexOfSplitedStr] = tempData;
  }

  return splitedStr;
}

var string = "111-222-333-444-555-";

console.log(split(string, "-"));
