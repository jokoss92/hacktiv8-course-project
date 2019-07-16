var max = 5; // silahkan beri nilai bebas

// code here
function pyramidNumber(max) {
  for (var i = 1; i <= max; i++) {
    var str = '';
    for (var j = 0; j < i; j++) {
      str += i;
    }
    console.log(str);
  }
}

pyramidNumber(max);
