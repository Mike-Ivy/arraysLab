function divideArray(numbers) {
    var evenNums = [];
    var oddNums = [];
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNums.push(numbers[i]);
        }
        if (numbers[i] % 2 != 0) {
            oddNums.push(numbers[i]);
        }
    }
    evenNums.sort();
    oddNums.sort();

    console.log("Even Numbers:");
    if (evenNums.length == 0) {
        console.log("None");
    }
    else {
        for (let i=0; i<evenNums.length; i++) {
            console.log(evenNums[i]);
        }
    }
    console.log("Odd Numbers:");
    if (oddNums.length == 0) {
        console.log("None");
    }
    else {
        for (let i=0; i<oddNums.length; i++) {
            console.log(oddNums[i]);
        }
    }
}

let nums = [5,4,6,2,3];
divideArray(nums);