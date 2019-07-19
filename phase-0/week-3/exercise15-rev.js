function groupAnimals(animals) {
    // you can only write your code here!
   var animal = []
   for(var i=0; i<animals.length; i++){
    animal.push([])
    var position =0
    for(var j=0; j<animals.length;j++){
      if(animals[i][0] === animals[j][0]){
        animal[i][position] = animals[j]
        position ++
      }
    }
   }
   var holder=0
   for(var i=0; i<animal.length-1;i++){
     for(var j=0; j<animal.length-i-1;j++){
       if(animal[j] > animal[j+1]){
         holder = animal[j]
         animal[j] = animal[j+1]
         animal[j+1] = holder
       }
     }
   }
   for(var i=0; i<animal.length-1;i++){
     if(animal[i][0] === animal[i+1][0]){
       animal.splice(i,1)
     }
   }
   return animal
}
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]