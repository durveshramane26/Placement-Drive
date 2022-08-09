//Find the missing element in a given array of integers

const  findMissingElement = (arr, n) => {
    arr.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < n-1; i++) { 
        sum += arr[i];
    }
    let expectedSum = (n * (n + 1)) / 2;
    let missingElement = expectedSum - sum;
    return missingElement;
    

}

const arr = [1, 2, 3, 5]

n = arr.length + 1;
console.log(findMissingElement(arr, n));
