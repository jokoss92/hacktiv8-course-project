/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

function standBackTriangel(width) {
  
    // your code here 
    // var space = ''
    // for (var i=width; i>0; i--){
    //   for(var j=0; j<i; j++){
    //     // space += "o"
    //     if(i === width ){
    //     }
    //   }
    //   // console.log(space)
    //   // space=''
    // }
    // for(var i=width-1; i>0; i--){
    //   for(var j=0; j<i; j++){
    //     space += "o"
    //   }
    //   console.log(space)
    //   space=''
    // }
    
    for(var i=width; i>0;i--){
      var space = ''
      for(var j=0; j<width;j++){
        if()
      }
      // if(){

      // }
      console.log('Ini i',i,'ini j',j)
      // space += 'o'
      // console.log(space)
    }

}
 
 standBackTriangel( 3 )
//  standBackTriangel( 5 )
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */