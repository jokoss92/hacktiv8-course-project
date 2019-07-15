function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf = kata.split('')
    for(var i=0;i<kata.length; i++){
        switch(huruf[i]){
            case ' ':
              break;
            case 'z':
              huruf[i]= 'a';
              break;
              default:
                  huruf[i] = String.fromCharCode(1+ huruf[i].charCodeAt(0))
        }
    }
    return huruf.join('');
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu