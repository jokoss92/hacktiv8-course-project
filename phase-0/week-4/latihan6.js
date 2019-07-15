function richestGroupDynamic(groups) {
    let count = 0;
    let result = [];
    let temp = [];
    let oldHighest;
    for (let i = 0; i < groups.length; i++) {
      count = 0;
      for (let j = 0; j < groups[i].length; j++) {
        for (let k = 0; k < groups[i].length; k++) {
          if (j !== k && groups[i][j] === groups[i][k]) {
            count++;
            if (count >= oldHighest) {
              temp.push(groups[j][k]);
            } else {
              oldHighest = count;
            }
          }
        }
       
      }
      result.push(temp);
    }
  }
  
  console.log(richestGroupDynamic([
    ['A', 'B', 'C'],
    ['A', 'A', 'D', 'D', 'D']
  ]))
  // [ 'D' ]
  
  console.log(richestGroupDynamic([
    ['A', 'A'],
    ['B']
  ]))
  // [ 'A', 'B' ]
  
  console.log(richestGroupDynamic([
    ['Z', 'Z'],
    ['B', 'X']
  ]))
  // [ 'Z' ]
  
  console.log(richestGroupDynamic([]))
  // []