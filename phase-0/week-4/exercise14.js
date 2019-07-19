function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var tarif = 2000
    var awal = 0
    var akhir = 0
    var arrResult = []
    for(var i = 0; i<arrPenumpang.length; i++){
        var objPenumpang = {}
        objPenumpang.penumpang = arrPenumpang[i][0]
        objPenumpang.naikDari = arrPenumpang[i][1]
        objPenumpang.tujuan = arrPenumpang[i][2]
        for(var j=0;j<rute.length; j++){
            if(arrPenumpang[i][2] === rute[j]){
                akhir = j + 1
            }
            if(arrPenumpang[i][1] === rute[j]){
                awal = j + 1
            }
        }
        var tarifBayar = (akhir-awal) * tarif
        objPenumpang.bayar = tarifBayar
        arrResult.push(objPenumpang)
    }
    return arrResult
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]