//Logic Challenge - Konversi Menit
function konversiMenit(menit){
    var hours = Math.trunc(menit/60);
    var minutes = menit % 60;
    if(minutes < 10){
        return hours + ":" + 0 + minutes;
    } else {
        return hours + ":" + minutes;
    }
    
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
console.log(konversiMenit(1000));
