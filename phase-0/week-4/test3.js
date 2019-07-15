function cariModus(arr) {
    let highCounter = 0;
    let highNumber = 0;
    let length = arr.length;
    let tmpArr = 0;

    for (let i = 0; i < length; i++) {
        let tmpCounter = 0;
        let tmpNumber = arr[i];

        for (let j = 0; j < length; j++) {
            if (arr[i] === arr[j]) {
                tmpCounter++;
            }
        }

        tmpArr += tmpCounter;

        if (tmpCounter > highCounter) {
            highCounter = tmpCounter;
            highNumber = tmpNumber;
        }
    }

    if ((tmpArr % length) === 0 ) {
        return -1;
    } else {
        return highNumber;
    }
}