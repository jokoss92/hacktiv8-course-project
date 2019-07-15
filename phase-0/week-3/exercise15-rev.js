function groupAnimals(animals) {
    // you can only write your code here!
    var animalSort;

    for(var i=0; i<animals.length;i++){
        for(var j=0; j<animals.length; j++){
            if(animals[i][0] < animals[j][0]){
                animalSort = animals[j]
                animals[j] = animals[i]
                animals[i] = animalSort
            }
        }
    }

    var resultAnimals =[[]]
    var indexResult=0

    resultAnimals[0][0] = animals[0]

    for(var k=1; k<animals.length;k++){
        if(animals[k][0] === resultAnimals[indexResult][0][0]){
            resultAnimals[indexResult][resultAnimals[indexResult].length] = animals[k]
        }
        else {
            indexResult++
            resultAnimals[indexResult] = [animals[k]]
        }
    }
    return resultAnimals
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]