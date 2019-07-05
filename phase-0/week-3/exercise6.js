function angkaPalindrome(num) {
    //Tambah setiap input dengan 1
    var nextNum = num +1
    //jalankan fungsi untuk mengecek angka palindrome
    function checkAngkaPalindrome(nextNum){
        //rubah number menjadi string
        var numString = nextNum.toString();
        //reverse string sebagai pembanding
        var reverseNum = "";
        for(i=0; i< numString.length; i++){
            reverseNum = numString[i]+reverseNum
        }
        //mengecek apakah hasil reverse sama dengan string awal 
        return numString === reverseNum
    }
    while(true){
        //tampilkan hasil angka palindrome +1
        if(checkAngkaPalindrome(nextNum)){
            return nextNum
            //Tambah 1 hingga mencapai angka palindrome
        } else{
            nextNum += 1
        }
    }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001