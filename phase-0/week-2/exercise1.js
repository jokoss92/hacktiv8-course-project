//Soal 1 Newton Second Law
var m = 600;
var a = 2;
var F = m*a;
console.log(F);

/*
a. Algorithm
1. Get value of mass (m)
2. Get value of acceeration (a)
3. Get value of force (f) from calculation : m*a 

b. Pseudocode
START

STORE 'mass' with any value
STORE 'acceleration' with any value
STORE 'force' without any value

CALCULATE 'mass' times 'acceleration'
SET 'force' value with calculation result

DISPLAY force
END
*/

//Soal 2 Tahun Kabisat
var year = 2018;
if(year % 4 == 0 && year % 100 !== 0 || year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    console.log("Tahun Kabisat");  
} else {
    console.log("Bukan Tahun Kabisat");
}

/*
a. Algorithm
1. Get value of year
2. Calculate year if 

b. Pseudocode
START
STORE 'year' with any value
IF 'year' modulus 4 equals to 0 and year modulus 100 not equals to 100 
OR
 'year' modulus 4 equals to 0 and 'year' modulus 100 equals to 0 and 'year' modulus 400 equals to 0
    DISPLAY "Leap Year"
ELSE 
    DISPLAY "Gregorian Year"
END
*/ 

//Soal 3 Laundry Day
for(var pakaian = 1;pakaian <= 20;pakaian++){
   if(pakaian == 20){
       console.log("Nyalakan mesin cuci")
   } else{
       console.log("Pakaian belum cukup")
   }
}
/*
a. Algorithm
1. Set 'clothes' with 1
2. Add 'clothes' 1 by 1 until equals to 20
3. When 'clothes' value equals to 20, turn on the washing machine

b. Pseudocode
START
STORE 'clothes' with 1
WHILE 'clothes' 1  equal or less than 20
    IF 'clothes' equals to 20
    DISPLAY "turn on washing machine"
ELSE
    DISPLAY "not yet started"
ADD 'clothes' by 1
END IF
END WHILE
*/

//Soal 4 Periksa Kuku
var amountStudent = 40;
for(var student =1; student <= amountStudent; student++){
    if(student == 'kuku pendek'){
        console.log("guru memuji si anak")
    } else {
        console.log("guru menghkum si anak")
    }
}
/*
START
STORE 'amountStudent' with 40
FOR STORE 'student' with 1
LOOPING 'student' until LESS THAN OR EQUAL 'amountStudent'
ADD 'student' 1 by 1

IF student equals to long nails
DISPLAY 'Teacher punish student'
ELSE
DISPLAY 'Teacher praise student'
END IF
END
*/