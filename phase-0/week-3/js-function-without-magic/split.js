function split(str, separator) {
  var splitedStr = [];
  var indexOfSplitedStr = 0;
  var tempData = "";

  for (var i = 0; i < str.length; i++) {
    var separatorPattern = true;
    var indexOfSeparatorPattern = 0;

    // cek separator pattern
    for (var j = i; indexOfSeparatorPattern < separator.length; j++) {
      if (str[j] !== separator[indexOfSeparatorPattern]) {
        separatorPattern = false;
        break;
      }

      indexOfSeparatorPattern++;
    }

    // jika karakter indek ke i bukan separator, tampung di tempData
    if (separatorPattern === false) {
      tempData += str[i];
    }
    // jika separator, maka push ke array
    else {
      splitedStr[indexOfSplitedStr] = tempData;
      indexOfSplitedStr++;
      tempData = "";
      i = i + separator.length - 1;
    }

    // masukkan karakter setelah separator terakhir
    if (i === str.length - 1) {
      splitedStr[indexOfSplitedStr] = tempData;
    }
  }

  return splitedStr;
}

var string = "aku dan kamu";

console.log(split(string, " dan "));
