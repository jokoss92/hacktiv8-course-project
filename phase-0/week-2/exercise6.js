//1 Melakukan Looping Menggunakan While
var i = 2;
console.log("LOOPING PERTAMA");
while (i <= 20){
    console.log(i + ' - I love coding');
    i+=2;
}

var j = i-2;
console.log("LOOPING KEDUA");
while (j >= 2){
    console.log(j + ' - I will become fullstack developer')
    j-=2;
}

//2.Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(k=1; k<=20; k++){
    console.log(k + ' - I love coding');
}
console.log("LOOPING KEDUA");
for(l=k-1; l>=1; l--){
    console.log(l + ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
for(m=1; m<=100; m++){
    if(m % 2 == 0){
        console.log(m + " adalah bilangan Genap");
    }else{
        console.log(m + " adalah bilangan Ganjil");
    }
}

for(n=1; n<=100; n+=2){
    if(n % 3 == 0){
        console.log(n + " adalah bilangan kelipatan 3");    
    } else {
        console.log('""');
    }
}

for(o = 1; o<=100; o+=5){
    if(o % 6 == 0){
        console.log(o + " adalah bilangan kelipatan 6")
    } else{
        console.log('""')
    }
}

for(p = 1; p <=100; p+=9){
    if(p % 10 == 0){
        console.log(p + " adalah bilangan kelipatan 10");
    } else {
        console.log('""');
    }
}
