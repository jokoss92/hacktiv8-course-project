var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice([1],[2],"Roman Alamsyah Elsharawy", "Provinsi Lampung")
    input.splice([4],[1],"Pria","SMA International Metro")
    console.log(input);
}

