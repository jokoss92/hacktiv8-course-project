function groupAnimals(animals) {
  // you can only write your code here!
  var result=[];
  animals.sort(function(value1, value2) { return value1.charAt(0) > value2.charAt(0) });
  var tmp =[];
  var hurufDepan = animals[0].charAt(0);
  for(var i = 0;i<animals.length;i++){
      
      if(animals[i].charAt(0)===hurufDepan){
          tmp.push(animals[i]);
      }else{
          hurufDepan = animals[i].charAt(0);
          result.push(tmp);
          tmp=[]; 
          tmp.push(animals[i]);
      }

  }
  result.push(tmp);
  return result;
}

   // TEST CASES
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]