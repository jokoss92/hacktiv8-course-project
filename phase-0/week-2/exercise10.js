//Logic Challenge - Bandingkan Angka
function bandingkanAngka(angka1, angka2){
    if(angka2 > angka1){
        return "True";
    } else if(angka1 > angka2){
        return "False";
    } else if(angka1 == angka2){
        return -1;
    } else {
        return 'Input tidak valid';
    }
}

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));
console.log(bandingkanAngka('A', 'B'));
