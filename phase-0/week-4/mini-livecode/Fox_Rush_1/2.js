/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////

  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.

  [PROCESS]

  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function tukarGanjil(kalimat) {
  // code below here
  var result = ''
  for(var i=0;i<kalimat.length;i++){
      var char = kalimat[i]
      // if(kalimat[i] === ' '){
      //   continue
      // }
      if(i+1%2 !== 0){
        if(char == char.toUpperCase()){
          result += char.toLowerCase()
        } else if(char == char.toLowerCase()){
          result += char.toUpperCase()
        } else if(kalimat[i] === ' ') {
          result += ' '
        } else {
          result += char
        }
      }
  }
  return result
};

// TEST CASES
console.log(tukarGanjil('Hello World')); // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')); // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')); // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')); // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')); // "001-a-3-5TRdyW"