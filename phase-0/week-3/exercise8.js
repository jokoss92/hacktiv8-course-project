function pasanganTerbesar(num) {
  // you can only write your code here!
  var biggest = 0;
  var current = 0;
  numString = num.toString();
  for(i=0; i<numString.length;i++){
    current = Number(numString[i]+numString[i+1]);
      if(current > biggest){
        biggest = current;
      }
  };
  return biggest;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99