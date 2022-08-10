// Kth Largest Element In An Array

const KthElement = (arr, k) => {
    arr.sort((a, b) => a - b);
    //console.log(arr)
    let max = arr.length-k;
    for (i = 0; i < arr.length; i++) {
        if (i == max) {
            return arr[i]
        }
    }

}

const arr = [3, 5, 7, 9, 1 , 2, 4, 8, 6];
k = 3;
console.log(KthElement(arr, k))