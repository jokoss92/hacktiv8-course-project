/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    n-|
    |o|
    |-n
  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |

  [RULES]
  1. Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
  2. Minimal panjang karakter yang diinput adalah 3
*/

function diagonAlley(word) {
  // code here
  if(word.length <= 2){
    console.log('Invalid input')
  } else {
    for(var i=0;i<word.length;i++){
      var space = ''
      for(var j=0;j<word.length;j++){
        if(j===i){
          space += word[i]
        } else if(j===0 || j ===word.length-1){
          space += '|'
        } else if(i===0 || i===word.length-1){
          space += '-'
        }
        else {
          space += ' '
        }
  
      }
      console.log(space) 
    }
  }
}


// TEST CASES

diagonAlley('kuroko')
/*
  k----|
  |u   |
  | r  |
  |  o |
  |   k|
  |----o
*/
console.log('')
diagonAlley('non')
/*
  n-|
  |o|
  |-n
*/
console.log('')
diagonAlley('basuke')
/*
  b----|
  |a   |
  | s  |
  |  u |
  |   k|
  |----e
*/
console.log('')
diagonAlley('no')
// Invalid input