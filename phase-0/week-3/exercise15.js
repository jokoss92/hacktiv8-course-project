function groupAnimals(animals) {
    // you can only write your code here!
    animals = animals.sort()
    var tempArray = []
    var resultArray = []

    for(var h=0; h<animals.length;h++){
        var init = animals[h][0];
    }
    for (var i=0; i<animals.length; i++){
        // var init = animals[0][0];
        if(init === animals[i][0]){
                tempArray.push(animals[i]);
                if(i === (animals.length-1)){
                    resultArray.push(tempArray)
                } 
        
        } else {
            // for(var j=0; j<tempArray.length; j++){
            //     if(tempArray[j][0] === animals[i][0]){
            //         tempArray.push(animals[i]);
            //     }
            // }
            resultArray.push(tempArray)
            tempArray = []
            tempArray.push(animals[i])
            init = animals[i][0]
        }
    }
    return resultArray
  }

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]