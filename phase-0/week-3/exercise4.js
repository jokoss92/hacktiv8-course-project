var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice([1],[2],"Roman Alamsyah Elsharawy", "Provinsi Lampung")
    input.splice([4],[1],"Pria","SMA International Metro")
    console.log(input);

    var date = input[3].split("/")
    switch(date[1]){
        case '01':
            console.log("Januari");
            break;

        case '02':
            console.log("Februari");
            break;

        case '03':
            console.log("Maret");
            break;

        case '04':
            console.log("April");
            break;

        case '05':
            console.log("Mei");
            break;

        case '06':
            console.log("Juni");
            break;

        case '07':
            console.log("Juli");
            break;

        case '08':
            console.log("Agustus");
            break;

        case '09':
            console.log("September");
            break;

        case '10':
            console.log("Oktober");
            break;

        case '11':
            console.log("November");
            break;

        case '12':
            console.log("Desember");
            break;

        default:
            console.log("Bulan Tidak Valid");
            break;

        
       

    }
    var date2 = date.join("-");
    console.log(date2);
    date3 = date.sort(function(value1, value2){
        return value1-value2
    });
    console.log(date3)


    console.log(input[1].slice(0,15));
}

dataHandling2(input);
