function richestGroup(groups){
    var countA = 0
    var countB = 0
    for(var i=0; i<groups.length;i++){
        if(groups[i][0] === 'A' && groups[i][1] !== 'B'){
            countA++
        }
        if(groups[i][0] === 'B' && groups[i][1] !== 'A'){
            countB++
        }
    }

    if(countA > countB){
        return 'Group A menang'
    } else if(countB > countA){
        return 'Group B menang'
    } else{
        return 'Tidak ada Pemenang'
    }
}

console.log(richestGroup([
    ['A', 'B'],
    ['A', 'A']
  ]))
  // Group A win...
  
  console.log(richestGroup([
    ['A', 'A'],
    ['B']
  ]))
  // Tidak ada pemenangnya...
  
  console.log(richestGroup([
    ['B']
  ]))
  // Group B win...
  
  console.log(richestGroup([]))
  // Tidak ada pemenangnya...