//1. Menyusun Barisan Bintang
var rows1 = 10;
for(i=1; i<=rows1; i++){
    console.log("*");
}

//2. Menyusun Barisan Bintang dengan Nested Looping
// var rows2 = 5;
// for(j=1; j<=rows2; j++){
//     console.log('*'.repeat(j));
// }
var rows2 = 5;
for(j=rows2; j>=1; j--){
    var star = "";
    for(k=j; k<=rows2; k++){
        star +="*";
    } console.log(star);
}
