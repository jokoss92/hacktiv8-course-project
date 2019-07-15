function cariModus(arr) {
    // you can only write your code here!
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < arr.length; i++) {
        number = arr[i];
        // for(j = arr.length -1; j > 0; j--){
        //     if (arr[i] === arr[j]){
        //         return -1
        //     }
        // }
        if(arr.every(v => v === arr[0])){
            return -1
        }

        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        } 
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
            if(modes.length === arr.length){
                return -1
            } 
            
        }
    return modes[0];
}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1