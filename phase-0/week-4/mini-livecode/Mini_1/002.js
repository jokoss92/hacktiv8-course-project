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
  var o = width-1
  for(var i=0;i<width;i++){
    let result = ""
    for(var j=0;j<width;j++){
      if(j !== o && j !==width-1){
        result += " "
      } else {
        result += "o"
      }
    }
    o--
    console.log(result)
  }
  o=1
  for(var i=0;i<width-1;i++){
    var result = ""
    for(var j=0;j<width;j++){
      if(j !==o && j !== width-1){
        result += " "
      } else {
        result += "o"
      }
    }
    o++
    console.log(result)
  }

}
 
 standBackTriangel( 3 )
 standBackTriangel( 7 )
 
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