//count all the triplets such that sum of two elements equals the third element.


const triplets = (arr) => {
    let count = 0;
    arr.sort();
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] == arr[k]) {
                    count++;
                }

            }
        }
    }
    return count;
}

console.log(triplets([1, 5, 3, 2]));
console.log(triplets([2, 3, 4]));