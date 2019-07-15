function changeMe(arr) {
    // you can only write your code here!
    var join = {}
    for(i =0;i<arr.length; i++){
        // join[i] = arr[i]
        console.log( i+1+'. '+arr[i][0]+" "+arr[i][1])
        // return join
        
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""