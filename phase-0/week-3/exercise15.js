function groupAnimals(animals) {
    // you can only write your code here!
    animals = animals.sort()
    var tempArray = []
    var resultArray = []
    var init = animals[0][0]

    for (var i=0; i<animals.length; i++){
        if(init === animals[i][0]){
            tempArray.push(animals[i]);
            if(i === (animals.length-1)){
                resultArray.push(tempArray)
            } 
        } else {
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